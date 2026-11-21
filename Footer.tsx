import React from 'react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-dark-1000 border-t border-white/5">
      <div className="container-custom py-12">
        <div className="flex flex-col sm:flex-col sm:justify-between sm:items-start gap-8 pt-8 sm:pt-12">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-bold text-white">DEVASISH</span>
            <p className="text-white/50 text-sm">Digital Marketer | Strategist</p>
          </div>

          <nav className="hidden sm:block">
            <ul className="flex gap-8">
              <li>
                <a
                  href="#hero"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 sm:pt-8 border-t border-white/10">
            <div className="text-center sm:text-left">
              <p className="text-white/50 text-sm mb-2">
                {personalInfo.tagline}
              </p>
              <p className="text-white/50 text-xs">
                Copyright © {new Date().getFullYear()} Devasish Goswami. All rights reserved.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary-400 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1-12 0" />
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="8" y1="13" x2="8.01" y2="13" />
              </svg>
              LinkedIn
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-primary-400 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}