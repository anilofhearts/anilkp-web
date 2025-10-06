'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import AIProjects from '@/components/AIProjects'
import DevOpsProjects from '@/components/DevOpsProjects'
import TechEnthusiast from '@/components/TechEnthusiast'
import Certifications from '@/components/Certifications'
import Education from '@/components/Education'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <AIProjects />
      <DevOpsProjects />
      <TechEnthusiast />
      <Certifications />
      <Education />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  )
}
