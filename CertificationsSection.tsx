import React from 'react'
import { cn } from '@/lib/utils'
import { certifications } from '@/data/portfolio'

export default function CertificationsSection() {
  return (
    <section className="relative">
      <div className="container-custom">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              Certifications & Education
            </h2>
            <p className="section-subtitle text-white/50 max-w-2xl mx-auto">
              Educational background and verified certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-display font-medium mb-4">Education</h3>
              <div className="glass-strong p-6 rounded-2xl border border-white/10">
                <h4 className="text-lg font-medium text-white mb-2">
                  Bachelor of Commerce (B.Com)
                </h4>
                <p className="text-white/50 text-sm">
                  St. Xavier's College, Ranchi.
                </p>
                <p className="text-white/50 text-sm">
                  Second-year Student · Expected Graduation: 2027
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-medium mb-4">
                Certifications & Learning
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-white">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-white/50">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-xs text-white/40">
                        {cert.status}
                      </span>
                    </div>
                    {cert.verified && (
                      <span className="text-xs text-primary-400">
                        ✓ Verified
                      </span>
                    )}
                    <p className="text-xs text-white/50 mt-1">
                      {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}