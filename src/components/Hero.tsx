'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">HOOMAN builds</span>
            <span className="block mt-2 bg-gradient-to-r from-[#007FFF] to-[#00BFFF] bg-clip-text text-transparent">
              human-centric digital products
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A software studio focused on thoughtful interfaces, reliable engineering,
            and products that feel as good as they look.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="mailto:hello@hooman.com"
              className="rounded-full bg-[#007FFF] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#0066CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FFF] transition-colors duration-200"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="#work"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-[#007FFF] transition-colors duration-200 flex items-center"
            >
              View selected work
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </motion.div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
            <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,127,255,0.1)_0%,rgba(0,127,255,0)_100%)]" />
            <div className="absolute inset-0 bg-[url('https://tailwindcss.com/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
