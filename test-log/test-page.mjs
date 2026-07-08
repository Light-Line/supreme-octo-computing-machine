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
  const page = await browser.newPage();

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    const screenshotPath = path.join(testDir, `screenshot-${vp.name}.png`);
    // Use viewport screenshot instead of fullPage
    await page.screenshot({
      path: screenshotPath,
      clip: { x: 0, y: 0, width: vp.width, height: vp.height }
    });
    console.log(`  ✓ ${vp.name} (${vp.width}x${vp.height})`);
  }

  await page.close();
}

async function checkConsoleErrors(browser) {
  console.log('\nChecking console errors...');
  const page = await browser.newPage();
  const errors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push({ text: msg.text() });
    }
  });

  page.on('pageerror', error => {
    errors.push({ text: error.message, type: 'pageerror' });
  });

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  await page.close();
  return errors;
}

async function runLighthouse() {
  console.log('\nRunning Lighthouse...');
  const results = {};

  for (const vp of viewports) {
    const outputPath = path.join(testDir, `lighthouse-${vp.name}.json`);
    try {
      await execAsync(
        `npx lighthouse http://localhost:4173 --output=json --output-path=${outputPath} --chrome-flags="--headless --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --quiet`,
        { timeout: 120000, cwd: path.join(__dirname, '..') }
      );

      const data = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
      const scores = {
        performance: Math.round(data.categories.performance.score * 100),
        accessibility: Math.round(data.categories.accessibility.score * 100),
        'best-practices': Math.round(data.categories['best-practices'].score * 100),
        seo: Math.round(data.categories.seo.score * 100),
      };
      results[vp.name] = scores;
      console.log(`  ✓ ${vp.name}:`, scores);
    } catch (e) {
      console.log(`  ✗ ${vp.name}: ${e.message.substring(0, 100)}`);
      results[vp.name] = { error: e.message.substring(0, 100) };
    }
  }

  return results;
}

async function main() {
  const results = {
    timestamp,
    viewports: viewports.map(v => `${v.name}: ${v.width}x${v.height}`),
  };

  let server = null;

  try {
    // Start dev server
    server = await startDevServer();

    // Launch browser
    const browser = await chromium.launch({ headless: true });

    // Take screenshots
    await takeScreenshots(browser);

    // Check console errors
    results.consoleErrors = await checkConsoleErrors(browser);
    console.log(`\nConsole errors: ${results.consoleErrors.length}`);
    results.consoleErrors.forEach(e => console.log(`  - ${e.text.substring(0, 100)}`));

    // Run Lighthouse
    results.lighthouse = await runLighthouse();

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
