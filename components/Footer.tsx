'use client'

import React from 'react'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">AKP</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior DevOps & Infrastructure Engineer
            </p>
            <p className="text-gray-400 mt-2">
              Observability · SRE · Kubernetes · AIOps Agents
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'AI Projects', 'DevOps Projects', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(
                          `#${item.toLowerCase().replace(' ', '-')}`
                        )
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:anilkp787@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  anilkp787@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447717123234"
                  className="hover:text-primary-400 transition-colors"
                >
                  +44 7717 123234
                </a>
              </li>
              <li>Leicester, United Kingdom</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Anil Kumar Pillai. All rights reserved.
            </p>

            {/* Made with */}
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> using
              Next.js & Tailwind CSS
            </p>

            {/* Tech Stack Badge */}
            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full border border-blue-600/30">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs bg-cyan-600/20 text-cyan-400 rounded-full border border-cyan-600/30">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full border border-purple-600/30">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
