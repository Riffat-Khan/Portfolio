import Reveal from './Reveal'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">Experience</p>
      </Reveal>

      <div className="mt-8 flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-8 border-t border-line first:border-t-0 sm:first:border-t">
              <div className="font-mono text-sm text-muted">{job.period}</div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-muted">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
