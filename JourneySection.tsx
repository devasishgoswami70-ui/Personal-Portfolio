import React from 'react'
import { cn } from '@/lib/utils'
import { journey } from '@/data/portfolio'

export default function JourneySection() {
  return (
    <section className="relative">
      <div className="container-custom">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              My Journey
            </h2>
            <p className="section-subtitle text-white/50 max-w-xl mx-auto">
              An ongoing journey of learning, building, and growing as a digital marketer and strategist.
            </p>
          </div>

          <div className="relative">
            {journey.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start justify-between pt-8"
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2 -top-1 w-8 h-8 rounded-full bg-primary-500 border border-dark-1000 flex items-center justify-center text-xs font-bold"
                >
                  {index + 1}
                </div>

                <div className="relative w-1/2 pr-8 pl-8 group">
                  <h3 className="text-lg font-display font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}