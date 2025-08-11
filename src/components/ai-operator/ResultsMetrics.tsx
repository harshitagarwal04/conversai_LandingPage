"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '3x',
    label: 'Faster Response Times',
    description: 'Instant answers to customer queries'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Always Available',
    description: 'Never miss a customer interaction'
  },
  {
    icon: DollarSign,
    value: '60%',
    label: 'Cost Reduction',
    description: 'Lower operational expenses'
  },
  {
    icon: Users,
    value: '95%',
    label: 'Customer Satisfaction',
    description: 'Higher CSAT scores across channels'
  }
]

const testimonials = [
  {
    quote: "ConversAI transformed our customer service. We're handling 10x more inquiries with the same team size.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Keller Williams Realty"
  },
  {
    quote: "The AI sounds so natural, customers often don't realize they're not talking to a human. It's incredible.",
    author: "Michael Rodriguez",
    role: "Customer Success Director",
    company: "CBRE Group"
  },
  {
    quote: "We saw ROI within the first month. Setup was surprisingly simple and the results exceeded expectations.",
    author: "Emily Thompson",
    role: "CEO",
    company: "Cushman & Wakefield"
  }
]

export default function ResultsMetrics() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Proven results, real impact
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of businesses already transforming their customer communications
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                  <metric.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold !text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold !text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-blue-400">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculator CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-gray-800 p-12"
          >
            <h3 className="text-3xl font-bold !text-white mb-4">
              Calculate Your ROI
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              See how much time and money you could save with ConversAI&apos;s AI operators
            </p>
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 !text-white font-semibold transition-all duration-300">
              Calculate Savings
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}