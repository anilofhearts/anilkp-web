'use client'

import React, { useState, useEffect } from 'react'
import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'Observability & SRE',
    'Kubernetes Engineer',
    'AIOps Agents',
    'Cloud Architect',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Generate particles for background
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-cyan-950"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary-400/20 dark:bg-primary-500/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="neural-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="currentColor" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 shadow-2xl"
          >
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl md:text-5xl font-bold text-gray-400">
              AKP
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
          >
            ANIL KUMAR PILLAI
          </motion.h1>

          {/* Rotating Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-12"
          >
            <span className="text-primary-600 dark:text-primary-400">
              Senior Infrastructure & Cloud Engineer
            </span>{' '}
            |{' '}
            <span className="inline-block min-w-[280px] text-left">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="gradient-text"
              >
                {roles[currentRole]}
              </motion.span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Observability · SRE · Kubernetes · AIOps Agents. Relocating to Abu Dhabi, UAE.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <button
              onClick={() => scrollToSection('#devops-projects')}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#ai-projects')}
              className="btn-primary bg-accent-600 hover:bg-accent-700"
            >
              AI Experiments
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-6 pt-8"
          >
            <a
              href="mailto:anilkp787@gmail.com"
              className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/anil-kumar-pillai-b8512322b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://github.com/anilkp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
