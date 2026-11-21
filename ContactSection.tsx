import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/portfolio'

export default function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    setTimeout(() => {
      setFormState('success')
      setFormError(null)

      setTimeout(() => {
        setFormState('idle')
      }, 3000)
    }, 1500)
  }

  return (
    <section className="relative">
      <div className="container-custom">
        <div className="section-padding">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="section-title mb-4">
              Have an Idea? Let's Make It Happen.
            </h2>
            <p className="section-subtitle text-white/50">
              I'm always interested in connecting with ambitious people, exploring opportunities and collaborating on meaningful projects.
            </p>
          </div>

          <div className="glass-strong p-6 rounded-2xl border border-white/10 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
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
                  <path d="M4 4c1.7 0 3.4 1.1 4.2 3L10 18a2 2 0 0 0 2-2H18a2 2 0 0 0 2-2V6z" />
                  <line x1="9" y1="21" x2="9" y2="14" />
                  <line x1="15" y1="21" x2="15" y2="14" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-primary-400 hover:underline transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
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
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
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

          <form
            onSubmit={handleSubmit}
            className="glass-strong p-8 rounded-2xl border border-white/10 max-w-md mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-sm text-white/50 mb-2.5 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-1000 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-white/50 mb-2.5 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-1000 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-sm text-white/50 mb-2.5 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-1000 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-500 focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label
                  className="block text-sm text-white/50 mb-2.5 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50 shrink-0" />
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-1000 border border-white/10 text-white placeholder-white/40 resize-none focus:outline-none focus:border-primary-500 focus:ring-primary-500/50 transition-all duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className={`btn-primary w-full py-4 text-lg font-medium transition-all duration-300`}
              disabled={formState === 'submitting'}
            >
              {formState === 'submitting'
                ? 'Sending...'
                : 'Send Message'}
            </button>

            {formState === 'error' && (
              <p className="mt-4 text-sm text-white/60">
                Something went wrong. Please try again.
              </p>
            )}

            {formState === 'success' && (
              <p className="mt-4 text-sm text-primary-400">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}