import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-28">
      <Reveal>
        <p className="section-label mb-4">Projects</p>
      </Reveal>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title + i} project={project} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
