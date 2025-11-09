import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-slate-700 md:text-slate-600">
      <li><a href="#features" className="hover:text-slate-900">Capabilities</a></li>
      <li><a href="#solutions" className="hover:text-slate-900">Work</a></li>
      <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
    </ul>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-extrabold tracking-tight text-slate-900">Nexrizen</a>

          <nav className="hidden md:block">{nav}</nav>

          <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-lg font-bold">Menu</span>
            <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="max-w-7xl mx-auto px-6 pb-6">
            {nav}
          </div>
        </div>
      )}
    </header>
  )
}
