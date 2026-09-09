import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AvatarOrbit() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // React's JSX `muted` attribute doesn't reliably set the DOM property
    // before playback starts, which makes browsers block autoplay.
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto"
    >
      {/* Comet trail orbiting the avatar */}
      <svg
        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] animate-spin-slow"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="cometTrail" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="1" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#cometTrail)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="70 240"
        />
      </svg>

      {/* Faint static ring */}
      <div className="absolute -inset-4 rounded-full border border-line" />

      {/* Circular looping video */}
      <div className="absolute inset-0 rounded-full overflow-hidden border border-line shadow-[0_0_40px_-10px_rgba(94,234,212,0.35)]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/hi-avatar.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </motion.div>
  )
}
