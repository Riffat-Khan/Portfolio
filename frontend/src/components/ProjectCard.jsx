import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

export default function ProjectCard({ project, delay = 0 }) {
  if (project.comingSoon) {
    return (
      <Reveal delay={delay}>
        <div className="h-full border border-dashed border-line rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[260px] text-muted">
          <Sparkles className="text-accent mb-3" size={22} />
          <p className="font-display text-lg font-medium text-white/80">Coming Soon</p>
          <p className="text-sm mt-2 max-w-[220px]">{project.description}</p>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal delay={delay}>
      <div className="h-full border border-line rounded-2xl p-6 flex flex-col bg-card hover:border-accent/60 transition-colors min-h-[260px]">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-accent border border-accent/30 rounded-full px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>

        <p className="text-muted mt-4 text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex items-center gap-4 mt-6 font-mono text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-accent transition-colors"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}
