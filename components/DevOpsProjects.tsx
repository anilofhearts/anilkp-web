'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Cloud,
  Container,
  Shield,
  GraduationCap,
  Ship,
  DollarSign,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react'

const DevOpsProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'Azure Cloud Migration - Payment Infrastructure',
      category: 'Cloud Migration',
      icon: Cloud,
      description:
        'Led enterprise-scale migration of critical payment infrastructure from on-premises to Azure with zero downtime, ensuring business continuity and PCI-DSS compliance.',
      technologies: ['Azure', 'Kubernetes', 'Terraform', 'Azure DevOps', 'Helm'],
      achievements: [
        'Zero downtime migration for 24/7 payment processing',
        'Reduced infrastructure costs by 35%',
        'Improved system reliability to 99.99% uptime',
        'Implemented automated disaster recovery',
      ],
      metrics: {
        uptime: '99.99%',
        costSaving: '35%',
        performance: '+50%',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'DiGit egov Platform',
      category: 'Government',
      icon: Container,
      description:
        'Built Kubernetes-based infrastructure from scratch for Kerala State e-governance platform, serving millions of citizens with secure, scalable services.',
      technologies: ['Kubernetes', 'Docker', 'GitLab CI/CD', 'Prometheus', 'ELK Stack'],
      achievements: [
        'Deployed 50+ microservices on AKS',
        'Serving 5M+ citizen transactions monthly',
        'Implemented comprehensive monitoring and alerting',
        'Achieved SOC 2 compliance',
      ],
      metrics: {
        users: '5M+',
        services: '50+',
        availability: '99.9%',
      },
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Aadhar Vault Project',
      category: 'Security',
      icon: Shield,
      description:
        'Designed and deployed highly secure infrastructure for storing and processing Aadhaar (citizen identity) data with military-grade encryption and compliance.',
      technologies: ['Azure', 'Oracle RAC', 'Terraform', 'Security Hub', 'HSM'],
      achievements: [
        'Zero security incidents since deployment',
        'Encrypted data at rest and in transit',
        'Implemented role-based access control',
        'Achieved government security certifications',
      ],
      metrics: {
        security: '100%',
        compliance: 'Certified',
        records: '10M+',
      },
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Edudock Platform',
      category: 'Education',
      icon: GraduationCap,
      description:
        'Deployed school ERP system on AWS Kubernetes infrastructure, providing scalable education management for 500+ institutions.',
      technologies: ['AWS', 'EKS', 'PostgreSQL', 'Jenkins', 'ArgoCD'],
      achievements: [
        'Automated deployment pipeline reducing release time by 70%',
        'Scaled to support 500+ schools',
        'Implemented multi-tenancy architecture',
        'Reduced infrastructure costs with auto-scaling',
      ],
      metrics: {
        schools: '500+',
        students: '100K+',
        deployment: '70% faster',
      },
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Harbour Management System',
      category: 'Government',
      icon: Ship,
      description:
        'Built high-availability infrastructure for port and harbour management system, ensuring 24/7 operations for critical maritime logistics.',
      technologies: ['Kubernetes', 'Oracle DB', 'Ansible', 'Grafana', 'Redis'],
      achievements: [
        'Achieved 99.95% uptime for critical operations',
        'Implemented automated backup and recovery',
        'Reduced incident response time by 60%',
        'Deployed across multiple port locations',
      ],
      metrics: {
        uptime: '99.95%',
        locations: '10+',
        response: '60% faster',
      },
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Azure Container Apps POC',
      category: 'Innovation',
      icon: DollarSign,
      description:
        'Led proof-of-concept for Azure Container Apps migration, demonstrating significant cost optimization opportunities for modern cloud-native applications.',
      technologies: [
        'Azure Container Apps',
        'Bicep',
        'Azure DevOps',
        'Application Insights',
      ],
      achievements: [
        'Identified 40% potential cost reduction',
        'Improved deployment simplicity',
        'Reduced cold start times by 50%',
        'Created migration blueprint for organization',
      ],
      metrics: {
        costSaving: '40%',
        performance: '+50%',
        complexity: '-60%',
      },
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  const categories = ['all', 'Cloud Migration', 'Government', 'Security', 'Education', 'Innovation']

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="devops-projects"
      className="section-container bg-white dark:bg-gray-900"
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
            DevOps & Cloud Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enterprise-scale infrastructure projects delivering measurable business impact
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}
                >
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-3 bg-white/50 dark:bg-gray-600/50 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default DevOpsProjects
