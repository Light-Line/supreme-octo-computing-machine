import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ComparePage from './pages/ComparePage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Fallback to home */}
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
