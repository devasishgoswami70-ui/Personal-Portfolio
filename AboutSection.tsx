import React from 'react'
import { cn } from '@/lib/utils'
import { personalInfo, interests } from '@/data/portfolio'

export default function AboutSection() {
  return (
    <div className="container-custom pt-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="section-title mb-6">
            More Than Just Marketing. A Mindset of Growth.
          </h2>
          <p className="text-lg sm:text-xl text-white/60 section-subtitle mb-8">
            I'm currently pursuing my B.Com at St. Xavier's College, Ranchi. Alongside my academics, I'm developing practical skills in digital marketing, business strategy, e-commerce and technology.
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            I enjoy exploring how brands attract customers, how businesses position themselves in competitive markets and how digital platforms can create growth opportunities. For me, marketing isn't just about promotion—it's about understanding human behavior, solving real problems, and creating value that lasts.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            I'm someone who believes in continuous learning, experimentation and turning ideas into practical solutions. Whether it's launching a social media campaign, optimizing a Google Ads strategy, or building a brand from the ground up, I approach every challenge with curiosity and determination.
          </p>
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-sm font-medium text-white/60 mb-4">Personal Interests</h3>
            <div className="grid grid-cols-2 gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="skill-tag"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center h-64 w-64">
          <div
            className="glass-strong rounded-2xl w-full max-w-md p-8 text-center"
            style={{ width: '200px', height: '200px' }}
          >
            <div className="relative">
              <div
                className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-accent-400 opacity-20 rounded-3xl blur-sm"
              />
              <div className="relative z-10">
                <div
                  className="w-20 h-20 mx-auto rounded-full bg-primary-500/20 border border-primary-400/20 flex items-center justify-center mb-4"
                  style={{ width: '100px', height: '100px' }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="14" />
                  </svg>
                </div>
                <h4 className="font-medium text-white">Devasish Goswami</h4>
                <p className="text-xs text-white/50">Digital Marketer | Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}