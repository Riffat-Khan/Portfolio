import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">Contact</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold max-w-xl">
          Let&apos;s build something together.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors">
            <Mail size={16} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors">
            <Phone size={16} /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors">
            <Github size={16} /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
