import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ComparePage from './pages/ComparePage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import DemoPage from './pages/DemoPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CompetitorPage from './pages/CompetitorPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      {/* Competitor comparison pages */}
      <Route path="/smartly-vs-vibelets" element={<CompetitorPage competitor="smartly" />} />
      <Route path="/atria-vs-vibelets" element={<CompetitorPage competitor="atria" />} />
      <Route path="/adcreative-vs-vibelets" element={<CompetitorPage competitor="adcreative" />} />
      <Route path="/creatify-vs-vibelets" element={<CompetitorPage competitor="creatify" />} />
      <Route path="/foreplay-vs-vibelets" element={<CompetitorPage competitor="foreplay" />} />
      <Route path="/madgicx-vs-vibelets" element={<CompetitorPage competitor="madgicx" />} />
      <Route path="/omneky-vs-vibelets" element={<CompetitorPage competitor="omneky" />} />
      <Route path="/arcads-vs-vibelets" element={<CompetitorPage competitor="arcads" />} />
      {/* Fallback to home */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
