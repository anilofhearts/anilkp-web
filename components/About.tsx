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
      value: '11+',
      label: 'Years Experience',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      value: '100%',
      label: 'Zero-Downtime Migrations',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      value: '50%',
      label: 'Faster Incident Response',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Brain,
      value: '10+',
      label: 'AI Projects Deployed',
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
            Senior DevOps/SRE Engineer with{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              11+ years of experience
            </span>{' '}
            building resilient cloud infrastructure and automating excellence. Military
            background bringing discipline and precision to enterprise-scale deployments
            across{' '}
            <span className="font-semibold text-accent-600 dark:text-accent-400">
              Azure, AWS, and Kubernetes
            </span>
            .
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently serving as{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              DevOps Engineer at NEXT Technologies UK
            </span>
            , specializing in CI/CD pipelines, container orchestration, and infrastructure
            as code. Passionate about exploring{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              AI/ML applications
            </span>{' '}
            and building intelligent automation solutions that bridge DevOps excellence
            with cutting-edge innovation.
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
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <metric.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {metric.label}
                </div>

                {/* Decorative element */}
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
                Innovation Mindset
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Continuously exploring emerging technologies and building intelligent
                solutions. From deploying WhatsApp-based AI learning assistants to
                implementing ML-powered infrastructure optimization, I combine DevOps
                stability with innovative AI experimentation to solve real-world
                challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
