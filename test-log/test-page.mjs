import { chromium } from '@playwright/test';
import { exec, spawn } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Timestamp for this test run
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const testDir = path.join(__dirname, '..', 'test-log', timestamp);
fs.mkdirSync(testDir, { recursive: true });

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

// Pages to test
const pages = [
  { path: '/', name: 'homepage' },
  { path: '/about-us', name: 'about' },
  { path: '/compare', name: 'compare' },
  { path: '/blog', name: 'blog' },
  { path: '/blog/thirty-ads-one-page', name: 'blog-post' },
  { path: '/contact', name: 'contact' },
];

async function startDevServer() {
  console.log('Building and starting preview server...');

  // Build first
  await execAsync('npm run build', { cwd: path.join(__dirname, '..') });

  const server = spawn('npm', ['run', 'preview', '--', '--port', '4173'], {
    cwd: path.join(__dirname, '..'),
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: true,
  });

  // Wait for server to be ready
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 5000);
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Local:')) {
        clearTimeout(timeout);
        resolve();
      }
    });
  });

  console.log('Preview server ready at http://localhost:4173');
  return server;
}

async function takeScreenshots(browser) {
  console.log('\nTaking screenshots...');
  
  for (const pageInfo of pages) {
    console.log(`  Testing ${pageInfo.name}...`);
    const page = await browser.newPage();
    const errors = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:4173${pageInfo.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);

      const screenshotPath = path.join(testDir, `screenshot-${pageInfo.name}-${vp.name}.png`);
      await page.screenshot({
        path: screenshotPath,
        clip: { x: 0, y: 0, width: vp.width, height: vp.height }
      });
    }
    
    console.log(`    ✓ ${pageInfo.name}: ${viewports.length} screenshots, ${errors.length} errors`);
    await page.close();
  }
}

async function runLighthouse() {
  console.log('\nRunning Lighthouse on all pages...');
  const results = {};

  for (const pageInfo of pages) {
    console.log(`  Testing ${pageInfo.name}...`);
    const pageResults = {};
    
    // Test on desktop only to save time
    const vp = viewports.find(v => v.name === 'desktop');
    const outputPath = path.join(testDir, `lighthouse-${pageInfo.name}.json`);
    
    try {
      await execAsync(
        `npx lighthouse http://localhost:4173${pageInfo.path} --output=json --output-path=${outputPath} --chrome-flags="--headless --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --quiet`,
        { timeout: 120000, cwd: path.join(__dirname, '..') }
      );

      const data = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
      pageResults.desktop = {
        performance: Math.round(data.categories.performance.score * 100),
        accessibility: Math.round(data.categories.accessibility.score * 100),
        'best-practices': Math.round(data.categories['best-practices'].score * 100),
        seo: Math.round(data.categories.seo.score * 100),
      };
      console.log(`    ✓ ${pageInfo.name}:`, pageResults.desktop);
    } catch (e) {
      console.log(`    ✗ ${pageInfo.name}: ${e.message.substring(0, 80)}`);
      pageResults.desktop = { error: e.message.substring(0, 100) };
    }
    
    results[pageInfo.name] = pageResults;
  }

  return results;
}

async function checkBrokenLinks(browser) {
  console.log('\nChecking for broken links...');
  const page = await browser.newPage();
  const brokenLinks = [];
  const checkedUrls = new Set();

  for (const pageInfo of pages) {
    await page.goto(`http://localhost:4173${pageInfo.path}`, { waitUntil: 'networkidle' });
    
    const links = await page.$$eval('a[href]', anchors => 
      anchors.map(a => ({ href: a.getAttribute('href'), text: a.textContent }))
        .filter(a => a.href && !a.href.startsWith('#') && !a.href.startsWith('mailto:') && !a.href.startsWith('tel:'))
    );

    for (const link of links) {
      // Skip external links and already checked
      if (link.href.startsWith('http') || checkedUrls.has(link.href)) continue;
      checkedUrls.add(link.href);
      
      try {
        const response = await page.request.get(`http://localhost:4173${link.href}`);
        if (!response.ok() && response.status() !== 304) {
          brokenLinks.push({ page: pageInfo.name, href: link.href, status: response.status() });
        }
      } catch (e) {
        brokenLinks.push({ page: pageInfo.name, href: link.href, error: e.message });
      }
    }
  }

  await page.close();
  console.log(`  Found ${brokenLinks.length} broken links`);
  brokenLinks.forEach(l => console.log(`    - ${l.page}: ${l.href} (${l.status || l.error})`));
  return brokenLinks;
}

async function main() {
  const results = {
    timestamp,
    pages: pages.map(p => p.name),
  };

  let server = null;

  try {
    // Start dev server
    server = await startDevServer();

    // Launch browser
    const browser = await chromium.launch({ headless: true });

    // Take screenshots
    await takeScreenshots(browser);

    // Run Lighthouse
    results.lighthouse = await runLighthouse();

    // Check broken links
    results.brokenLinks = await checkBrokenLinks(browser);

    await browser.close();

    // Save results
    const resultsPath = path.join(testDir, 'results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\nResults saved to: ${resultsPath}`);

  } catch (e) {
    console.error('Test failed:', e.message);
    results.error = e.message;
  } finally {
    // Kill dev server
    if (server) {
      try { process.kill(-server.pid, 'SIGTERM'); } catch {}
    }
    try { await execAsync('pkill -f "vite" 2>/dev/null || true'); } catch {}
  }

  return results;
}

main().catch(console.error);
