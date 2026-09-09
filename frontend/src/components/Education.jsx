import Reveal from './Reveal'
import { education } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">Education</p>
      </Reveal>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.05}>
            <div className="border border-line rounded-2xl p-6">
              <h4 className="font-display text-lg font-medium">{e.title}</h4>
              <p className="font-mono text-sm text-muted mt-2">{e.period}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
