'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect Your Systems',
    description: 'Integrate with your existing LMS and payment processors in minutes.'
  },
  {
    number: '02',
    title: 'Configure AI Agents',
    description: 'Set up workflows, compliance rules, and communication preferences.'
  },
  {
    number: '03',
    title: 'Go Live',
    description: 'Start automating collections, support, and operations immediately.'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          >
            Start in Days, Not Months
          </motion.h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 md:gap-8"
              >
                <div className="text-5xl md:text-6xl font-bold text-gray-200">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}