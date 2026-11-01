'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Cloud,
  Container,
  FileCode,
  Shield,
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
      id: 'observability',
      name: 'Observability & SRE',
      icon: Activity,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Prometheus', level: 92 },
        { name: 'Grafana', level: 92 },
        { name: 'ELK Stack', level: 88 },
        { name: 'Dynatrace', level: 82 },
        { name: 'Incident Response & RCA', level: 94 },
        { name: 'Capacity & Performance', level: 90 },
      ],
    },
    {
      id: 'ai',
      name: 'AI for Operations',
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'MCP Servers', level: 88 },
        { name: 'CrewAI Multi-Agent', level: 85 },
        { name: 'RAG & Vector Search', level: 86 },
        { name: 'LLM Integration', level: 84 },
        { name: 'Python', level: 88 },
      ],
    },
    {
      id: 'cicd',
      name: 'CI/CD & Build',
      icon: GitBranch,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Azure DevOps (YAML)', level: 94 },
        { name: 'Jenkins (Groovy)', level: 90 },
        { name: 'GitHub Actions', level: 86 },
        { name: 'ArgoCD (GitOps)', level: 88 },
        { name: 'Helm', level: 90 },
        { name: 'SonarQube / Veracode', level: 85 },
      ],
    },
    {
      id: 'container',
      name: 'Containers & Orchestration',
      icon: Container,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'Kubernetes (AKS / EKS / kubeadm)', level: 94 },
        { name: 'Docker', level: 93 },
        { name: 'Azure Container Apps', level: 90 },
        { name: 'Kafka', level: 84 },
        { name: 'Redis', level: 86 },
      ],
    },
    {
      id: 'iac',
      name: 'IaC & Config',
      icon: FileCode,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Terraform', level: 92 },
        { name: 'Ansible / AAP', level: 90 },
        { name: 'PowerShell', level: 88 },
        { name: 'Bash / Groovy', level: 88 },
      ],
    },
    {
      id: 'cloud',
      name: 'Cloud & Hybrid',
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Azure (AKS, ACA, APIM, Key Vault)', level: 94 },
        { name: 'AWS (EKS, EC2, ELB, IAM)', level: 86 },
        { name: 'OCI', level: 78 },
        { name: 'VMware / RHEL Hybrid', level: 90 },
      ],
    },
    {
      id: 'devsecops',
      name: 'DevSecOps & Compliance',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'PCI-DSS', level: 90 },
        { name: 'Defender for Cloud / RBAC', level: 86 },
        { name: 'Key Vault Secrets', level: 90 },
        { name: 'TLS / SELinux Hardening', level: 88 },
      ],
    },
    {
      id: 'ways',
      name: 'Ways of Working',
      icon: Server,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'ServiceNow (Change / Incident)', level: 90 },
        { name: 'Jira / ITIL', level: 88 },
        { name: 'HLD / LLD Design', level: 90 },
        { name: 'Runbooks & Knowledge Transfer', level: 92 },
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Observability, Kubernetes, cloud platforms, DevSecOps, and AI for operations
          </p>
        </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
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
