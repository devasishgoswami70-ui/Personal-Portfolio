import React, { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { useThree } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Font } from '@next/font/google'
import { Text, Vector3 } from '@react-three/fiber'
import { cn } from '@/lib/utils'
import { personalInfo, interests, professionalInterests, skills, projects, journey, certifications, currentlyExploring, navigation, footerTagline } from '@/data/portfolio'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ExpertiseSection from '@/sections/ExpertiseSection'
import ProjectsSection from '@/sections/ProjectsSection'
import JourneySection from '@/sections/JourneySection'
import CertificationsSection from '@/sections/CertificationsSection'
import CurrentlyExploringSection from '@/sections/CurrentlyExploringSection'
import ContactSection from '@/sections/ContactSection'
import Footer from '@/components/Footer'
import ProjectDetail from '@/pages/ProjectDetail'

const inter = Font({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavLink = (href: string) => {
    setIsMenuOpen(false)
    navigate(href)
  }

  return (
    <BrowserRouter>
      <div className={cn('min-h-screen', 'overflow-x-hidden', 'text-white', 'font-sans')}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-1000/80 backdrop-blur-md border-b border-white/5">
          <div className="container-custom h-20 flex items-center justify-between">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
              className={cn(
                'text-2xl font-display font-bold text-white hover:no-underline',
                'data-[state]=hover:text-primary-400 transition-colors'
              )}
            >
              DEVASISH
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigation.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.href}
                  className={cn('text-white/70 hover:text-white transition-colors hover:after:w-full after:duration-300')}
                  onClick={() => handleNavLink(nav.href)}
                >
                  {nav.label}
                </Link>
              ))}
              <button
                className="btn-ghost px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(true)}
              >
                Let's Talk
              </button>
            </div>

            <button
              className="md:hidden btn-ghost p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(true}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-dark-1000/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 pt-20"
          >
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-display font-bold text-white mb-8"
            >
              DEVASISH
            </Link>
            <nav className="flex flex-col gap-6">
              {navigation.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-medium text-white hover:text-primary-400 transition-colors"
                >
                  {nav.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4">
              <button
                className="btn-primary px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="relative">
          <AboutSection />
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="relative">
          <ExpertiseSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <ProjectsSection />
        </section>

        {/* Journey Section */}
        <section id="journey" className="relative">
          <JourneySection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative">
          <CertificationsSection />
        </section>

        {/* Currently Exploring Section */}
        <section id="currently-exploring" className="relative">
          <CurrentlyExploringSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <ContactSection />
        </section>

        {/* Project Detail Page */}
        <Routes>
          <Route path="/" element={<ProjectsSection />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}