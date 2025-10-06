'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Cloud,
  Container,
  FileCode,
  Database,
  Activity,
  Brain,
  GitBranch,
  Server,
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')

  const skillCategories = [
    {
      id: 'cicd',
      name: 'DevOps & CI/CD',
      icon: GitBranch,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitLab', level: 90 },
        { name: 'Jenkins', level: 88 },
        { name: 'Azure DevOps', level: 92 },
        { name: 'Docker', level: 93 },
        { name: 'Python', level: 85 },
        { name: 'Shell Scripting', level: 90 },
      ],
    },
    {
      id: 'container',
      name: 'Container Orchestration',
      icon: Container,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'Kubernetes', level: 92 },
        { name: 'OpenShift', level: 85 },
        { name: 'AKS', level: 90 },
        { name: 'Helm', level: 88 },
      ],
    },
    {
      id: 'iac',
      name: 'Infrastructure as Code',
      icon: FileCode,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Terraform', level: 90 },
        { name: 'Ansible', level: 87 },
        { name: 'Bicep', level: 82 },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Azure', level: 93 },
        { name: 'AWS', level: 85 },
        { name: 'Oracle Cloud (OCI)', level: 80 },
      ],
    },
    {
      id: 'monitoring',
      name: 'Monitoring & Observability',
      icon: Activity,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Prometheus', level: 88 },
        { name: 'Grafana', level: 87 },
        { name: 'ELK Stack', level: 83 },
        { name: 'Datadog', level: 80 },
      ],
    },
    {
      id: 'database',
      name: 'Databases',
      icon: Database,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Oracle RAC', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      id: 'sre',
      name: 'SRE Practices',
      icon: Server,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'High Availability', level: 92 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Incident Response', level: 90 },
      ],
    },
    {
      id: 'ai',
      name: 'AI/ML & Automation',
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'AI APIs', level: 82 },
        { name: 'LLM Integration', level: 80 },
        { name: 'Chatbot Development', level: 83 },
        { name: 'Intelligent Automation', level: 85 },
      ],
    },
  ]

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory)

  return (
    <section
      id="skills"
      className="section-container bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
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
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across DevOps, cloud infrastructure, and AI innovation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
