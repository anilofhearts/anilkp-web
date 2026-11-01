'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Trophy, Zap, Shield, Users, Rocket } from 'lucide-react'

const WhyWorkWithMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Trophy,
      title: '7+ Years Cloud & SRE, 14 Years Infrastructure',
      description:
        'Hands-on Kubernetes, observability and cloud engineering, grounded in 14 years of mission-critical Linux/VMware ops in the Indian Air Force',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'PCI-DSS Payments Platform Leadership',
      description:
        'DevOps & SRE lead for NEXT UK payments — Worldpay, Barclays, PayPal, Tabby, Tamara — with ServiceNow change ownership',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Measurable Reliability Outcomes',
      description:
        'Cut MTTR from 4 hours to under 1.5 hours; migrated 200+ servers to Azure with zero downtime; ~70% CI agent cost reduction',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'AIOps: MCP Servers & Multi-Agent RAG',
      description:
        'Production MindGrid AI tutoring platform plus MCP servers on ACA for AI-driven SRE health checks',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: CheckCircle2,
      title: 'CKA + Azure Expert Certified',
      description:
        'Certified Kubernetes Administrator, Azure Solutions Architect Expert and DevOps Engineer Expert — Kubestronaut path underway',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Continuous Learner & Team Player',
      description:
        'Pursuing MSc while actively exploring emerging technologies and mentoring team members',
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section
      id="why-work-with-me"
      className="section-container bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full font-semibold shadow-lg">
              <Trophy className="w-5 h-5" />
              <span>Unique Value Proposition</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work With Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Combining proven DevOps excellence with innovative AI exploration to deliver
            next-generation infrastructure solutions
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 card-hover">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>{value.title}</span>
                </h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Senior/Principal-Level Roles
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl">
              Seeking opportunities at leading tech companies or innovative startups where I
              can leverage my DevOps expertise and AI passion to drive transformative
              infrastructure solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl"
              >
                Let&apos;s Connect
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhyWorkWithMe
