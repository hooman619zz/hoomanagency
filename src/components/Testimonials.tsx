'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, BrandVibe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'HOOMAN transformed our brand identity completely. Their strategic approach and creative execution helped us connect with our audience in ways we never imagined.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, TechNova',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'Working with HOOMAN was a game-changer for our startup. Their team understood our vision and delivered a website that perfectly represents our innovative spirit.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director, GreenLife',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The content strategy HOOMAN developed for us resulted in a 200% increase in engagement. Their human-centered approach makes all the difference.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our clients say</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from the brands and businesses we've had the privilege to work with.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover" 
                    src={testimonial.image} 
                    alt={`${testimonial.name} photo`} 
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
