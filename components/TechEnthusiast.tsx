'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Code, Lightbulb, Rocket, Github, ExternalLink } from 'lucide-react'

const TechEnthusiast = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const currentlyExploring = [
    'Fine-tuning Large Language Models',
    'Kubernetes Operators Development',
    'MLOps & AI Model Deployment',
    'Service Mesh (Istio/Linkerd)',
    'eBPF for Observability',
    'Platform Engineering',
  ]

  const techReads = [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      topic: 'Distributed Systems',
    },
    {
      title: 'The Phoenix Project',
      author: 'Gene Kim',
      topic: 'DevOps Culture',
    },
    {
      title: 'Building LLM Applications',
      author: 'Various Authors',
      topic: 'AI/ML Engineering',
    },
  ]

  const sideProjects = [
    {
      name: 'Infrastructure-as-Code Templates',
      description: 'Reusable Terraform/Bicep modules for rapid cloud deployment',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'DevOps Automation Scripts',
      description: 'Python utilities for common infrastructure operations',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Learning Lab',
      description: 'Experimental projects testing emerging technologies',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const experiments = [
    'Azure OpenAI Service Integration',
    'GitOps with FluxCD',
    'Chaos Engineering with Litmus',
    'Serverless Kubernetes with Knative',
  ]

  return (
    <section
      id="tech-enthusiast"
      className="section-container bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Enthusiast Corner
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and exploration of emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Currently Exploring
              </h3>
            </div>
            <div className="space-y-3">
              {currentlyExploring.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {topic}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Latest Tech Reads */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Latest Tech Reads
              </h3>
            </div>
            <div className="space-y-4">
              {techReads.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg hover:scale-105 transition-transform"
                >
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {book.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    by {book.author}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full">
                    {book.topic}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Side Projects
              </h3>
            </div>
            <div className="space-y-4">
              {sideProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                        {project.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Experiments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tech Stack Experiments
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {experiments.map((experiment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {experiment}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                "The best way to predict the future is to invent it." - Building tomorrow's
                solutions today.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default TechEnthusiast
