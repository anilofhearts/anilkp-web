'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Target, Zap, Brain } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const metrics = [
    {
      icon: Award,
      value: '7+',
      label: 'Years Cloud & SRE',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      value: '200+',
      label: 'Servers Migrated to Azure',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      value: '1.5h',
      label: 'MTTR (from 4 hours)',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Brain,
      value: 'CKA',
      label: 'Kubernetes + Azure Expert',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center mb-12 space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Senior infrastructure and SRE engineer with{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              7+ years of hands-on cloud, Kubernetes and observability engineering
            </span>
            , built on{' '}
            <span className="font-semibold text-accent-600 dark:text-accent-400">
              14 years running mission-critical Linux, VMware and network infrastructure
            </span>{' '}
            for the Indian Air Force.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently the{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              DevOps & SRE lead for a PCI-DSS payments platform at NEXT UK
            </span>
            . There I built centralised observability (Prometheus, Grafana, ELK) that cut
            MTTR from 4 hours to under 1.5 hours, and led the migration of 200+ servers to
            Azure with zero downtime. Certified Kubernetes Administrator (CKA) and Azure
            Solutions Architect / DevOps Engineer Expert.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I also build{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              AI-powered operational agents
            </span>
            : Model Context Protocol (MCP) servers for SRE health checks, and a multi-agent
            RAG platform in production at MindGrid AI.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <metric.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>

                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {metric.label}
                </div>

                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${metric.color} opacity-10 rounded-bl-full`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 p-8 glass-effect rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI for Operations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Building MCP servers on Azure Container Apps so AI agents can run
                operational health checks, plus a production CrewAI multi-agent RAG
                platform (MindGrid AI) for curriculum-anchored tutoring. Bridging SRE
                practice with AIOps automation.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
