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
      role: 'Senior Cloud DevOps & SRE Architect, Payments Platform',
      period: 'Sep 2023 – Present',
      location: 'Leicester, United Kingdom',
      achievements: [
        'Led discovery and migration of 200+ on-premises servers (Prod, Pre-Prod, UAT) to Azure for a payments platform serving Worldpay, Barclays, PayPal, Tabby and Tamara — zero downtime, full PCI-DSS compliance',
        'Delivered HLD and DevOps LLD with architects covering networking, App Gateway, APIM fronting IBM MQ, Key Vault, hybrid connectivity, observability and access control',
        'Moved legacy VM workloads onto AKS and Azure Container Apps for faster, repeatable microservice deployments and horizontal scale',
        'Migrated CI build agents from VMSS to ACA: ~70% infrastructure cost reduction and 35% faster average build times',
        'Built centralised observability with Prometheus, Grafana and ELK — cut MTTR from 4 hours to under 1.5 hours; PowerShell Azure Function health dashboard for Pre-Prod',
        'Standardised Terraform and Ansible (AAP) blueprints and Azure DevOps CI/CD templates; owned production change management via ServiceNow',
      ],
      technologies: [
        'AKS',
        'Azure Container Apps',
        'Terraform',
        'Ansible AAP',
        'Prometheus',
        'Grafana',
        'ELK',
        'Azure DevOps',
        'PCI-DSS',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'UST Global',
      role: 'Lead – Cloud Infrastructure (DevOps)',
      period: 'Sep 2022 – Aug 2023',
      location: 'Thiruvananthapuram, India',
      achievements: [
        'Maintained and evolved the Azure DevOps architecture for the NEXT e-commerce payments ecosystem',
        'Automated IaaS/PaaS provisioning and secure connectivity (site-to-site VPN, Private Endpoints)',
        'Built CI/CD pipelines with SonarQube and Veracode as quality gates, plus PowerShell operational automation',
      ],
      technologies: ['Azure DevOps', 'Terraform', 'SonarQube', 'Veracode', 'VPN', 'Private Endpoints'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Kerala State IT Mission',
      role: 'Lead DevOps / Database Administrator',
      period: 'Apr 2022 – Sep 2022',
      location: 'Thiruvananthapuram, India',
      achievements: [
        'Architected and deployed the DIGIT e-Governance platform handling 2M+ digital transactions a month at 99.9% uptime on Kubernetes, Docker, Kafka, Redis, Helm, Jenkins and Ansible',
        'Designed and ran the Aadhaar Vault infrastructure with HSM integration and strict regulatory compliance',
        'Helped move the platform from monolith to microservices with automated Jenkins deployments on AWS',
        'Ran database administration and performance tuning using system metrics to remove bottlenecks before outages',
      ],
      technologies: ['Kubernetes', 'Docker', 'Kafka', 'Redis', 'Helm', 'Jenkins', 'Ansible', 'AWS', 'HSM'],
      color: 'from-green-500 to-teal-500',
    },
    {
      company: 'ITDOCK Technologies Pvt Ltd',
      role: 'Principal Consultant',
      period: 'Sep 2019 – Mar 2022',
      location: 'Thiruvananthapuram, India',
      achievements: [
        'Designed and deployed multi-tenant Kubernetes SaaS environments on AWS for ERP and Harbour management systems',
        'Built Terraform automation, highly available Redis and Kafka clusters with automatic failover, and observability stacks',
      ],
      technologies: ['Kubernetes', 'AWS', 'Terraform', 'Redis', 'Kafka', 'Observability'],
      color: 'from-orange-500 to-red-500',
    },
    {
      company: 'Indian Air Force',
      role: 'Infrastructure Engineer',
      period: 'Aug 2005 – Aug 2019',
      location: 'New Delhi, India',
      achievements: [
        'Ran RHEL 6/7 estates and core services (HTTP, FTP, Samba, SMTP), including clustering, disaster recovery and security compliance for mission-critical defence systems',
        'Hardened systems with iptables, firewalld and SELinux; administered LVM, LDAP and VMware; OS-level load balancing for HA',
        'Introduced preventive maintenance that raised uptime by over 30%, and deployed secure network infrastructure across multiple units',
      ],
      technologies: ['RHEL', 'VMware', 'SELinux', 'LDAP', 'LVM', 'Networking'],
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From mission-critical defence infrastructure to PCI-DSS payments and AIOps
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>

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
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                <div className="hidden md:block md:w-1/2"></div>

                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600">
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
