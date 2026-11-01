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
      title: 'Azure Migration — Payments Platform',
      category: 'Cloud Migration',
      icon: Cloud,
      description:
        'Led discovery and migration of 200+ on-premises servers (Prod, Pre-Prod, UAT) to Azure for a PCI-DSS payments platform serving Worldpay, Barclays, PayPal, Tabby and Tamara — zero downtime.',
      technologies: ['Azure', 'AKS', 'ACA', 'Terraform', 'Ansible AAP', 'Azure DevOps', 'APIM'],
      achievements: [
        '200+ servers migrated with zero downtime and full PCI-DSS compliance',
        'HLD + DevOps LLD covering App Gateway, APIM/IBM MQ, Key Vault, hybrid connectivity',
        'Legacy VMs moved onto AKS and Azure Container Apps for scalable microservices',
        'Centralised Prometheus / Grafana / ELK observability; MTTR cut from 4h to under 1.5h',
      ],
      metrics: {
        servers: '200+',
        mttr: '<1.5h',
        downtime: 'Zero',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'CI Agents: VMSS → Azure Container Apps',
      category: 'Innovation',
      icon: DollarSign,
      description:
        'Ran a POC then migrated CI build agents from VMSS to Azure Container Apps for on-demand, elastic agents on the payments platform.',
      technologies: ['Azure Container Apps', 'Azure DevOps', 'VMSS', 'YAML Pipelines'],
      achievements: [
        '~70% infrastructure cost reduction for build agents',
        '35% faster average build times',
        'Elastic, on-demand agents replacing always-on VMSS capacity',
        'Production-ready pipeline templates standardised across teams',
      ],
      metrics: {
        costSaving: '70%',
        buildTime: '-35%',
        elasticity: 'On-demand',
      },
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'DIGIT e-Governance Platform',
      category: 'Government',
      icon: Container,
      description:
        'Architected and deployed the DIGIT e-Governance platform for Kerala State IT Mission on Kubernetes, Docker, Kafka, Redis, Helm, Jenkins and Ansible.',
      technologies: ['Kubernetes', 'Docker', 'Kafka', 'Redis', 'Helm', 'Jenkins', 'Ansible', 'AWS'],
      achievements: [
        '2M+ digital transactions a month at 99.9% uptime',
        'Monolith → microservices with automated Jenkins deployments on AWS',
        'Database administration and performance tuning to prevent outages',
        'Full stack: containers, messaging, caching and CI/CD',
      ],
      metrics: {
        transactions: '2M+/mo',
        availability: '99.9%',
        architecture: 'Microservices',
      },
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Aadhaar Vault',
      category: 'Security',
      icon: Shield,
      description:
        'Designed and ran Aadhaar Vault infrastructure with HSM integration and strict regulatory compliance for citizen identity data.',
      technologies: ['HSM', 'Kubernetes', 'Security Hardening', 'Regulatory Compliance'],
      achievements: [
        'HSM-backed vault for Aadhaar identity data',
        'Strict regulatory compliance controls',
        'Hardened access and encryption patterns',
        'Operated as part of DIGIT e-governance stack',
      ],
      metrics: {
        compliance: 'Regulated',
        security: 'HSM',
        scope: 'Identity',
      },
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Multi-tenant K8s SaaS (ERP & Harbour)',
      category: 'Education',
      icon: GraduationCap,
      description:
        'Designed and deployed multi-tenant Kubernetes SaaS environments on AWS for ERP (education) and Harbour management systems at ITDOCK.',
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'Redis', 'Kafka', 'Observability'],
      achievements: [
        'Multi-tenant SaaS on Kubernetes for ERP and harbour systems',
        'Terraform automation for repeatable environments',
        'HA Redis and Kafka clusters with automatic failover',
        'Full observability stacks for production operations',
      ],
      metrics: {
        tenancy: 'Multi',
        failover: 'Auto',
        iac: 'Terraform',
      },
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Harbour Management System',
      category: 'Government',
      icon: Ship,
      description:
        'Kubernetes SaaS and HA infrastructure for harbour management, with Redis/Kafka failover and observability for critical maritime operations.',
      technologies: ['Kubernetes', 'AWS', 'Redis', 'Kafka', 'Terraform', 'Grafana'],
      achievements: [
        'Multi-tenant harbour management on AWS Kubernetes',
        'Highly available Redis and Kafka with automatic failover',
        'Observability for early detection of operational issues',
        'Terraform-driven environment replication',
      ],
      metrics: {
        ha: 'Failover',
        stack: 'K8s+Kafka',
        iac: 'Terraform',
      },
      color: 'from-cyan-500 to-blue-500',
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
