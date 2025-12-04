'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:contact@hooman.dev', icon: 'mail' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: true, message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to build your product?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tell me about your idea, your team, and where you&apos;d like to take it. I&apos;ll get back to you with next steps.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              className="lg:pr-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">Send me a message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007FFF] focus:ring-[#007FFF] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007FFF] focus:ring-[#007FFF] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007FFF] focus:ring-[#007FFF] sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center rounded-full bg-[#007FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0066CC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FFF] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {submitStatus && (
                  <div
                    className={`rounded-md p-4 ${
                      submitStatus.success ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    <div
                      className={`text-sm ${
                        submitStatus.success ? 'text-green-700' : 'text-red-700'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              className="lg:pl-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              <div className="mt-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email me at</p>
                    <a
                      href="mailto:contact@hooman.dev"
                      className="text-base font-medium text-gray-900 hover:text-[#007FFF]"
                    >
                      contact@hooman.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Call me at</p>
                    <a
                      href="tel:+1234567890"
                      className="text-base font-medium text-gray-900 hover:text-[#007FFF]"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Based in</p>
                    <p className="text-base font-medium text-gray-900">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-900">Connect with me</h3>
                <div className="mt-4 flex space-x-4">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#007FFF]"
                    >
                      <span className="sr-only">{item.name}</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {item.icon === 'github' && (
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.1-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.943-4.566 4.943-.776 0-1.202-.008-1.405-.018.14.99.544 1.844 1.24 2.45.594.5 1.373.747 2.25.747 1.617 0 2.878-.93 3.405-2.38.22-.55.384-1.16.47-1.81.17-.8.17-1.55.13-2.25h.04c.1.5.16 1 .16 1.57 0 1.1-.16 2.1-.48 3.02-.32.92-.78 1.73-1.37 2.43-.6.7-1.32 1.25-2.15 1.65-.84.4-1.77.6-2.8.6-1.04 0-2-.2-2.89-.6-.89-.4-1.66-.95-2.32-1.65-.66-.7-1.19-1.52-1.59-2.46-.4-.94-.6-1.96-.6-3.05 0-1.08.2-2.1.6-3.05.4-.95.94-1.78 1.62-2.49.68-.71 1.5-1.27 2.44-1.69.95-.42 1.99-.63 3.12-.63 1.13 0 2.18.21 3.14.63.96.42 1.78 1 2.46 1.72l1.1-1.1 1.1-1.1-1.1-1.1-1.1-1.1c-.72.68-1.55 1.2-2.48 1.56-.93.36-1.93.54-3.01.54z"
                            clipRule="evenodd"
                          />
                        )}
                        {item.icon === 'linkedin' && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                        {item.icon === 'twitter' && (
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        )}
                        {item.icon === 'mail' && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
