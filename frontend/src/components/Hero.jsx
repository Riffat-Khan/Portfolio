import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import AvatarOrbit from './AvatarOrbit'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 bg-grid bg-[size:48px_48px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />

      <div className="relative max-w-5xl mx-auto w-full grid gap-12 md:grid-cols-[1.3fr_1fr] items-center">
      <div className="order-2 md:order-1">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-5"
        >
          Hi, I&apos;m Riffat
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl"
        >
          Building backend systems with{' '}
          <span className="text-accent">Python</span> &amp;{' '}
          <span className="text-accent">Django</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-muted text-lg max-w-xl"
        >
          Currently exploring <span className="text-white">AI</span>,{' '}
          <span className="text-white">LLM integrations</span> &amp; automation pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="font-mono text-sm uppercase tracking-wider bg-accent text-bg rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Explore my work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm uppercase tracking-wider border border-line rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center gap-5 text-muted"
        >
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      <div className="order-1 md:order-2">
        <AvatarOrbit />
      </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
