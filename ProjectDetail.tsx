import React from 'react'
import { cn } from '@/lib/utils'
import { useLocation, useNavigate } from 'react-router-dom'
import { projects } from '@/data/portfolio'

interface ProjectDetailProps {
  params: { id: string }
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === params.id)
  const navigate = useNavigate()

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-white/60">Project not found</h2>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen bg-dark-1000">
      <div className="container-custom">
        <div className="section-padding">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="btn-ghost px-4 py-2 rounded-lg text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              ← Back to Projects
            </button>
          </div>

          <div className="mb-12">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs text-white/50 capitalize">
                  {project.category}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient mb-4">
              {project.title}
            </h1>

            <p className="text-white/60 text-lg">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass-strong p-6 rounded-2xl border border-white/10">
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">Showcase</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                {project.showcase.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-strong p-6 rounded-2xl border border-white/10">
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">Objective</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="glass-strong p-6 rounded-2xl border border-white/10">
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
                My Contribution
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {project.contribution}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12">
            <div>
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="skill-tag text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
                Project Type
              </h4>
              <p className="text-white/60 text-sm font-medium">
                {project.type}
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3 text-lg font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}