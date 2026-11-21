import React from 'react'
import { cn } from '@/lib/utils'
import { skills } from '@/data/portfolio'

export default function ExpertiseSection() {
  return (
    <div className="container-custom">
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">
            Expertise & Skills
          </h2>
          <p className="section-subtitle text-center mb-16 text-white/50 max-w-2xl mx-auto">
            A comprehensive look at my capabilities across digital marketing, business strategy, and technology tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-hover p-8 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500">
            <h3 className="text-xl font-display font-bold mb-4">Digital Marketing</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Core digital marketing competencies spanning social, search, and brand strategy.
            </p>
            <div className="space-y-2">
              {skills.digitalMarketing.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-hover p-8 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500">
            <h3 className="text-xl font-display font-bold mb-4">Business & Strategy</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Strategic thinking, analysis, and business development capabilities.
            </p>
            <div className="space-y-2">
              {skills.businessStrategy.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-hover p-8 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all duration-500">
            <h3 className="text-xl font-display font-bold mb-4">Tools & Technology</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Technical tools and platforms I'm proficient with.
            </p>
            <div className="space-y-2">
              {skills.toolsTechnology.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}