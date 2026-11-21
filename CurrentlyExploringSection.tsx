import React from 'react'
import { cn } from '@/lib/utils'
import { currentlyExploring } from '@/data/portfolio'

export default function CurrentlyExploringSection() {
  return (
    <section className="relative">
      <div className="container-custom">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              Always Learning. Always Evolving.
            </h2>
            <p className="section-subtitle text-white/50 max-w-2xl mx-auto">
              A glimpse into the areas I'm currently exploring to level up my craft.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentlyExploring.map((topic, index) => (
              <div
                key={index}
                className="glass-strong p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16" />
                      <line x1="12" y1="16" x2="12" y2="22" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{topic}</h4>
                    <p className="text-xs text-white/50">
                      In-depth exploration and practical experimentation
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}