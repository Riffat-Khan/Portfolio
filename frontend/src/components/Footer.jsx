import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-xs text-muted">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
