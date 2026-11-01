'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MessageCircle,
  Smartphone,
  Brain,
  BookOpen,
  Zap,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Bot,
  Server,
  FileText,
} from 'lucide-react'

const AIProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProject = {
    title: 'MindGrid AI — WhatsApp Tutoring Platform',
    subtitle: 'Founder & Lead Engineer, GridLab Technologies',
    description:
      'Built a WhatsApp-based AI tutoring platform for CBSE Classes 9–12 on a CrewAI multi-agent architecture, with retrieval-augmented generation (RAG) over a vectorised curriculum.',
    longDescription:
      'Integrated Twilio WhatsApp messaging and Razorpay payments, and drafted a patent for a curriculum-anchored RAG system that uses Bloom\'s Taxonomy metadata. Production stack (MongoDB, Redis, Nginx) runs on Azure with Docker Compose and Prometheus/Grafana — moved off Kubernetes to match platform cost to workload size.',
    features: [
      {
        icon: Smartphone,
        title: 'WhatsApp + Twilio',
        description: 'Tutoring over WhatsApp for CBSE 9–12',
      },
      {
        icon: Brain,
        title: 'CrewAI Multi-Agent',
        description: 'Specialised agents for teaching workflows',
      },
      {
        icon: BookOpen,
        title: 'Curriculum RAG',
        description: 'Vectorised curriculum with Bloom\'s Taxonomy',
      },
      {
        icon: Zap,
        title: 'Azure Production',
        description: 'Docker Compose, MongoDB, Redis, Nginx',
      },
      {
        icon: MessageCircle,
        title: 'Payments',
        description: 'Razorpay integrated for subscriptions',
      },
      {
        icon: BarChart3,
        title: 'Observability',
        description: 'Prometheus / Grafana monitoring',
      },
    ],
    techStack: [
      'CrewAI',
      'RAG / Vector Search',
      'Twilio WhatsApp',
      'Razorpay',
      'Python',
      'Azure',
      'Docker Compose',
      'MongoDB',
      'Redis',
      'Prometheus',
      'Grafana',
    ],
    impact: [
      'Production multi-agent RAG tutoring platform for CBSE 9–12',
      'Patent draft for curriculum-anchored RAG with Bloom\'s Taxonomy metadata',
      'Cost-aligned architecture by right-sizing off Kubernetes to Docker Compose',
      'End-to-end stack: messaging, payments, retrieval, and monitoring',
    ],
    status: 'Live in Production',
    statusColor: 'from-green-500 to-green-600',
  }

  const otherProjects = [
    {
      title: 'MCP Servers for SRE Automation',
      description:
        'Model Context Protocol (MCP) servers hosted on Azure Container Apps that let AI agents run SRE tooling — operational health checks and DevOps automation.',
      icon: Server,
      technologies: [
        'MCP',
        'Azure Container Apps',
        'Python',
        'DNS / HTTP Health Checks',
        'Azure DevOps',
        'GitHub',
      ],
      highlights: [
        'DNS/HTTP health-check MCP server for AI-driven ops checks',
        'Next: CSV-driven Azure DevOps → GitHub repository migration tool',
        'Hosted on ACA for elastic, low-ops AI agent tooling',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AIOps Agents R&D',
      description:
        'Personal R&D into AI agents that automate operational health checks, incident triage assist, and repository/platform migrations via MCP.',
      icon: Bot,
      technologies: ['MCP', 'LLM Integration', 'Python', 'Azure', 'SRE Tooling'],
      highlights: [
        'Agents that invoke real SRE tooling through MCP',
        'Bridges observability practice with AI automation',
        'Designed for payments-grade operational workflows',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Curriculum-Anchored RAG (Patent Draft)',
      description:
        'Patent draft for a RAG system that grounds tutoring answers in a vectorised curriculum using Bloom\'s Taxonomy metadata for pedagogical alignment.',
      icon: FileText,
      technologies: ['RAG', 'Vector Search', 'Bloom\'s Taxonomy', 'LLMs'],
      highlights: [
        'Curriculum-grounded answers instead of generic LLM output',
        'Metadata-driven pedagogical structure',
        'Built into MindGrid production tutoring flows',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section
      id="ai-projects"
      className="section-container bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span>AI Engineering & Automation</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Production multi-agent RAG platforms and MCP servers for SRE automation
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-950 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-purple-200 dark:border-purple-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Featured AI Project
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-6">
                {featuredProject.subtitle}
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {featuredProject.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {featuredProject.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {featuredProject.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl backdrop-blur-sm border border-purple-200 dark:border-purple-800"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Impact & Results
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredProject.impact.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${featuredProject.statusColor} text-white rounded-lg font-semibold shadow-md`}
                >
                  {featuredProject.status}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More AI & Automation Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AIProjects
