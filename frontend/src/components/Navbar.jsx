import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? 'bg-bg/80 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold tracking-tight">
          Riffat<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-block font-mono text-xs uppercase tracking-wider border border-line rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
        >
          Resume
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-line px-6 py-4 flex flex-col gap-4 font-mono text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={profile.resumeFile} download className="text-accent">
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
