'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'MSc Computer Science',
      institution: 'Woolf University (Scaler Neoversity)',
      period: 'In progress',
      status: 'Ongoing',
      location: 'Online',
      description:
        'Advanced studies in computer science with focus on distributed systems, cloud architecture, and AI applications.',
      color: 'from-purple-500 to-indigo-500',
      statusBadge: 'In Progress',
    },
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Shobhit University, Meerut',
      period: '2014',
      status: 'Completed',
      location: 'Meerut, India',
      description:
        'Graduate program in computer applications, software development, and systems.',
      color: 'from-green-500 to-teal-500',
      statusBadge: 'Completed',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'EIILM University, Sikkim',
      period: '2011',
      status: 'Completed',
      location: 'Sikkim, India',
      description:
        'Foundation in computer science, programming fundamentals, and information systems.',
      color: 'from-orange-500 to-red-500',
      statusBadge: 'Completed',
    },
  ]

  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous academic pursuit combining formal education with practical expertise
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 card-hover">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      edu.status === 'Ongoing'
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white animate-pulse-slow'
                        : 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    }`}
                  >
                    {edu.statusBadge}
                  </span>
                </div>

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`hidden md:flex w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} items-center justify-center flex-shrink-0`}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Decorative gradient bar */}
                <div
                  className={`mt-6 h-1 w-full bg-gradient-to-r ${edu.color} rounded-full`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 italic">
              &ldquo;Education is not the learning of facts, but the training of the mind to
              think.&rdquo; - Committed to lifelong learning and continuous skill development.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education
