import React from 'react'
import { cn } from '@/lib/utils'
import { projects } from '@/data/portfolio'

export default function ProjectsSection() {
  return (
    <section className="relative">
      <div className="container-custom">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-6">
              Selected Work & Creative Experiments.
            </h2>
            <p className="section-subtitle text-white/50 max-w-2xl mx-auto">
              These are a combination of academic assignments, self-initiated concepts and practical experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-500"
              >
                <div
                  className="relative h-64 w-full overflow-hidden rounded-t-2xl group-hover:scale-[103%] group-hover:transition-transform duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h3 className="font-display font-medium text-lg sm:text-xl text-white hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-white/50 capitalize">{project.category}</span>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-white/50">
                    <div>
                      <div className="text-xs text-white/40 mb-1">Objective</div>
                      <div className="font-medium line-clamp-2">{project.objective}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/40 mb-1">Contribution</div>
                      <div className="font-medium line-clamp-2">{project.contribution}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                    <span className="text-xs text-white/50">{project.type}</span>
                    <span className="text-xs text-white/50">{project.year}</span>
                  </div>
                </div>

                <a
                  href={`/project/${project.id}`}
                  className="mt-4 inline-block px-4 py-2 btn-primary text-sm font-medium"
                >
                  View Project
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}