'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    name: 'Web Development',
    description: 'Custom, responsive websites built with modern frameworks like Next.js, React, and Tailwind CSS for optimal performance and user experience.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5.04 16.21a2.25 2.25 0 00-.33.255 2.25 2.25 0 00-.255.33L3.104 19.5a2.25 2.25 0 001.396 1.396l2.295.766a2.25 2.25 0 00.33.255c.103.082.21.156.33.22a2.25 2.25 0 00.255.13l5.714 1.91a2.25 2.25 0 001.59 0l5.714-1.91a2.25 2.25 0 00.255-.13c.12-.064.227-.138.33-.22.12-.1.228-.21.33-.33.082-.103.156-.21.22-.33a2.25 2.25 0 00.13-.255l.766-2.295a2.25 2.25 0 01.255-.33c.082-.103.156-.21.22-.33.1-.12.21-.228.33-.33.103-.082.21-.156.33-.22a2.25 2.25 0 00.255-.13l5.714-1.91a2.25 2.25 0 000-1.59l-5.714-1.91a2.25 2.25 0 01-1.59-1.59l-1.91-5.714a2.25 2.25 0 00-1.59-1.59l-5.714-1.91a2.25 2.25 0 00-1.59 0l-5.714 1.91a2.25 2.25 0 00-1.59 1.59L3.104 9.75z" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'Full-Stack Applications',
    description: 'End-to-end web applications with robust backends, APIs, and modern frontend interfaces that scale with your needs.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'UI/UX Design',
    description: 'Thoughtful user interfaces and experiences that are not just beautiful but intuitive and accessible to all users.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    href: '#',
  },
  {
    name: 'API Development',
    description: 'RESTful and GraphQL APIs that power your applications with clean, well-documented, and efficient endpoints.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    href: '#',
  },
];

export default function Services() {
  return (
    <section id="expertise" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Expertise
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I create digital solutions that solve real problems and deliver real value.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service, index) => (
              <motion.article 
                key={service.name}
                className="flex flex-col items-start justify-between p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#007FFF]">
                    {service.icon}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#007FFF]">
                    <Link href={service.href}>
                      <span className="absolute inset-0" />
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{service.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Link
                    href={service.href}
                    className="text-sm font-semibold leading-6 text-[#007FFF] hover:text-[#0066CC] flex items-center gap-1 group"
                  >
                    Learn more
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
