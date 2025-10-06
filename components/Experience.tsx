'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'NEXT Technologies UK',
      role: 'DevOps Engineer (SRE)',
      period: '2023 - Present',
      location: 'United Kingdom',
      achievements: [
        'Architected and deployed high-availability Kubernetes clusters reducing deployment time by 40%',
        'Implemented comprehensive monitoring and alerting using Prometheus and Grafana',
        'Led cloud migration initiatives with zero downtime',
        'Established GitOps workflows using ArgoCD for continuous deployment',
      ],
      technologies: ['Kubernetes', 'Azure', 'Terraform', 'GitLab CI/CD', 'Prometheus'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'UST Global',
      role: 'Lead Cloud Infrastructure',
      period: '2022 - 2023',
      location: 'India',
      achievements: [
        'Led team of 5 engineers managing multi-cloud infrastructure',
        'Optimized cloud costs by 30% through resource rightsizing and automation',
        'Implemented disaster recovery solutions with RPO < 1 hour',
        'Mentored junior engineers on DevOps best practices',
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Jenkins', 'Ansible'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Kerala State IT Mission',
      role: 'DB-Admin / Lead DevOps',
      period: '2022',
      location: 'Kerala, India',
      achievements: [
        'Managed critical government infrastructure serving millions of citizens',
        'Implemented automated backup and recovery procedures',
        'Designed high-availability database architectures',
        'Led DevOps transformation initiatives for e-governance platforms',
      ],
      technologies: ['Oracle RAC', 'Kubernetes', 'Azure DevOps', 'PostgreSQL'],
      color: 'from-green-500 to-teal-500',
    },
    {
      company: 'ITDOCK Technologies',
      role: 'Principal Consultant',
      period: '2019 - 2022',
      location: 'India',
      achievements: [
        'Consulted for enterprise clients on cloud migration strategies',
        'Designed and implemented CI/CD pipelines for multiple projects',
        'Built infrastructure automation frameworks using Terraform',
        'Conducted training sessions on DevOps practices and tools',
      ],
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GitLab'],
      color: 'from-orange-500 to-red-500',
    },
    {
      company: 'Indian Air Force',
      role: 'Infrastructure Engineer',
      period: '1999 - 2019',
      location: 'India',
      achievements: [
        '20 years of distinguished service in technical operations',
        'Managed critical defense infrastructure with 99.9% uptime',
        'Led teams in high-pressure environments with precision',
        'Developed discipline and systematic approach to problem-solving',
      ],
      technologies: ['Infrastructure Management', 'Systems Engineering', 'Team Leadership'],
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven track record of delivering excellence across enterprise and government
            sectors
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-primary-500 mt-1">▹</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white shadow-md`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
