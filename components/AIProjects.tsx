'use client'

import React, { useState } from 'react'
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
  ExternalLink,
  Sparkles,
  Bot,
  DollarSign,
  FileText,
} from 'lucide-react'

const AIProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedProject, setExpandedProject] = useState<number | null>(0)

  const featuredProject = {
    title: 'WhatsApp AI Learning Assistant',
    subtitle: 'Democratizing Education Through Conversational AI',
    description:
      'Built an intelligent WhatsApp chatbot leveraging Large Language Models (LLMs) to provide 24/7 educational assistance to students. Natural language processing enables contextual, conversational responses tailored to student queries, transforming how students access learning support.',
    longDescription:
      'Students can ask questions, get explanations, receive study tips, and access learning resources through simple WhatsApp messages. The automated response system reduces response time from hours to seconds, making quality education support accessible to anyone with a mobile phone.',
    features: [
      {
        icon: Smartphone,
        title: 'WhatsApp Integration',
        description: 'Accessible on any device with WhatsApp',
      },
      {
        icon: Brain,
        title: 'AI-Powered Responses',
        description: 'Context-aware educational support using LLMs',
      },
      {
        icon: BookOpen,
        title: 'Multi-Subject Support',
        description: 'Covers various academic topics and levels',
      },
      {
        icon: Zap,
        title: 'Real-time Assistance',
        description: 'Instant responses 24/7',
      },
      {
        icon: MessageCircle,
        title: 'Conversational Interface',
        description: 'Natural dialogue flow for easy interaction',
      },
      {
        icon: BarChart3,
        title: 'Learning Analytics',
        description: 'Track engagement and common queries',
      },
    ],
    techStack: [
      'WhatsApp Business API',
      'Python',
      'OpenAI GPT / Claude API',
      'Natural Language Processing',
      'Azure Functions',
      'MongoDB',
    ],
    impact: [
      'Reduced student query response time from hours to seconds',
      '24/7 availability empowering self-paced learning',
      'Scalable solution serving multiple students simultaneously',
      'Democratizing access to quality educational support',
    ],
    status: 'Live in Production',
    statusColor: 'from-green-500 to-green-600',
  }

  const otherProjects = [
    {
      title: 'AI-Powered DevOps Automation',
      description:
        'Intelligent monitoring and incident prediction system using machine learning to analyze logs and metrics, predicting potential failures before they occur.',
      icon: Bot,
      technologies: ['Python', 'Machine Learning', 'Prometheus', 'Grafana', 'TensorFlow'],
      highlights: [
        'Reduced incident response time by 60%',
        'Predicted 85% of critical failures before occurrence',
        'Automated root cause analysis',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Infrastructure Cost Optimization Bot',
      description:
        'AI-driven cloud resource analyzer providing intelligent recommendations for cost optimization across multi-cloud environments.',
      icon: DollarSign,
      technologies: ['Python', 'Azure APIs', 'AWS SDK', 'LLM for insights'],
      highlights: [
        'Identified $50K+ annual savings opportunities',
        'Automated rightsizing recommendations',
        'Real-time cost anomaly detection',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'ChatOps Implementation',
      description:
        'Slack/Teams bot for infrastructure management enabling team members to deploy, monitor, and troubleshoot through conversational commands.',
      icon: MessageCircle,
      technologies: ['Python', 'Slack API', 'Kubernetes API', 'Azure DevOps'],
      highlights: [
        'Reduced deployment time by 40%',
        'Improved team collaboration',
        'Self-service infrastructure operations',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Automated Documentation Generator',
      description:
        'AI-powered tool that generates comprehensive documentation from infrastructure code, API endpoints, and configuration files.',
      icon: FileText,
      technologies: ['Python', 'LLM APIs', 'IaC parsing', 'Markdown'],
      highlights: [
        'Saved 20+ hours/week on documentation',
        'Maintains up-to-date technical docs',
        'Generates runbooks automatically',
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span>AI Experiments & Innovation</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pioneering AI Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bridging DevOps excellence with cutting-edge AI innovation to solve real-world
            challenges
          </p>
        </div>

        {/* Featured Project - WhatsApp AI Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-950 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-purple-200 dark:border-purple-800 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Featured AI Project
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-6">
                {featuredProject.subtitle}
              </p>

              {/* Description */}
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {featuredProject.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {featuredProject.longDescription}
              </p>

              {/* Features Grid */}
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

              {/* Technology Stack */}
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

              {/* Impact Metrics */}
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

              {/* Status & Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <div
                  className={`px-4 py-2 bg-gradient-to-r ${featuredProject.statusColor} text-white rounded-lg font-semibold shadow-md`}
                >
                  {featuredProject.status}
                </div>
                <button className="px-6 py-2 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other AI Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More AI & Automation Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700"
              >
                {/* Icon & Title */}
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

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
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
