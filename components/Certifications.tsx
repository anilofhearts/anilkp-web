'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Clock } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      name: 'Azure Solutions Architect Expert',
      code: 'AZ-305',
      issuer: 'Microsoft',
      year: '2023',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Azure DevOps Engineer Expert',
      code: 'AZ-400',
      issuer: 'Microsoft',
      year: '2023',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Azure Administrator Associate',
      code: 'AZ-104',
      issuer: 'Microsoft',
      year: '2022',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      name: 'Kubernetes and Cloud Native Associate',
      code: 'KCNA',
      issuer: 'CNCF',
      year: '2023',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'IBM Cybersecurity Analyst',
      code: 'Professional Certificate',
      issuer: 'IBM',
      year: '2023',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Oracle Cloud Infrastructure Foundation',
      code: 'OCI 2023',
      issuer: 'Oracle',
      year: '2023',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'ITIL Foundation',
      code: 'ITIL v4',
      issuer: 'Axelos',
      year: '2021',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'DevOps & Cloud Computing',
      code: 'Advanced Certification',
      issuer: 'IIT Madras',
      year: '2023',
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  const pursuing = [
    {
      name: 'AWS Solutions Architect',
      target: 'Q2 2025',
      icon: '☁️',
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      target: 'Q3 2025',
      icon: '☸️',
    },
  ]

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry-recognized credentials validating technical expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600 card-hover">
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold rounded-full">
                  {cert.year}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  {cert.code}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{cert.issuer}</p>

                {/* Decorative gradient line */}
                <div
                  className={`mt-4 h-1 w-full bg-gradient-to-r ${cert.color} rounded-full`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pursuing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border-2 border-dashed border-primary-300 dark:border-primary-700">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Currently Pursuing
              </h3>
            </div>
            <div className="space-y-4">
              {pursuing.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cert.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </span>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full">
                    Target: {cert.target}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Certifications
