import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="font-inter text-slate-800 bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
        <footer id="contact" className="py-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Nexrizen. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
