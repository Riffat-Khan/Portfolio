import Reveal from './Reveal'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">About</p>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="font-display text-2xl sm:text-3xl leading-relaxed max-w-3xl text-white/90">
          {profile.summary}
        </p>
      </Reveal>
    </section>
  )
}
