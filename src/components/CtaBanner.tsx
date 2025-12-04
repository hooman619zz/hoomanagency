'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#007FFF] py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to build a brand people feel?
          </motion.h2>
          <motion.p 
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's create something remarkable together. Get in touch with our team today.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#007FFF] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link href="#services" className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors duration-200">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1//2 -translate-y-1/2">
        <div className="w-[64rem] aspect-square bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
