'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'GraphQL', 'REST APIs'] },
  { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
  { name: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'CI/CD'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
            <motion.div
              className="relative h-64 overflow-hidden rounded-2xl bg-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#007FFF] to-[#00BFFF] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-400">Your Photo</span>
              </div>
            </motion.div>

            <motion.div
              className="lg:pt-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-base leading-7 text-gray-700 space-y-6">
                <p>
                  With over 5 years of experience in web development, I specialize in building modern web applications that deliver exceptional user experiences. My journey in tech started with a curiosity for how things work, which eventually led me to pursue a career in software development.
                </p>
                <p>
                  I believe in writing clean, maintainable code and following best practices to ensure the applications I build are not only functional but also scalable and performant. I'm passionate about learning new technologies and staying up-to-date with the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new recipes in the kitchen.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold text-gray-900">Skills & Technologies</h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {skills.map((category) => (
                    <div key={category.name} className="border-l-2 border-[#007FFF] pl-3">
                      <h4 className="text-sm font-medium text-gray-900">{category.name}</h4>
                      <ul className="mt-2 space-y-1">
                        {category.items.map((item) => (
                          <li key={item} className="text-sm text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <a
                  href="#contact"
                  className="rounded-full bg-[#007FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0066CC] transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-900 hover:text-[#007FFF] transition-colors"
                >
                  Download CV <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
