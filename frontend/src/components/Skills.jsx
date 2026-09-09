import Reveal from './Reveal'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">Skills</p>
      </Reveal>

      <div className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04}>
            <div>
              <h4 className="font-mono text-sm text-white mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted border border-line rounded-full px-3 py-1 hover:border-accent hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
