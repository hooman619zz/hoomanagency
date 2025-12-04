'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    name: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration and inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/project1.jpg',
    link: '#',
  },
  {
    name: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and user management.',
    tags: ['Next.js', 'Tailwind CSS', 'D3.js', 'Firebase'],
    image: '/images/project2.jpg',
    link: '#',
  },
  {
    name: 'Mobile App',
    description: 'Cross-platform mobile application with offline capabilities and push notifications.',
    tags: ['React Native', 'Redux', 'GraphQL', 'AWS'],
    image: '/images/project3.jpg',
    link: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A snapshot of digital products, platforms, and experiences I&apos;ve helped bring to life.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                  <div className="w-full h-48 bg-gray-200"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="text-sm font-medium text-[#007FFF] hover:text-[#0066CC] inline-flex items-center"
                  >
                    View project
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center rounded-full bg-[#007FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0066CC] transition-colors"
            >
              View all projects
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
