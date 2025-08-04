'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is our AI solution GDPR compliant?',
    answer: 'Yes, our AI agents are built with full GDPR compliance and UK data protection regulations. All tenant interactions are logged, recorded, and follow strict privacy requirements for data handling.'
  },
  {
    question: 'How quickly can we see improvements in occupancy rates?',
    answer: 'Most UK property companies see a 20-30% improvement in lead conversion within the first 30 days. Full occupancy rate improvements are typically achieved within 60 days of deployment.'
  },
  {
    question: 'Does it integrate with our existing property management system?',
    answer: 'Yes, our AI agents integrate seamlessly with popular UK property management platforms and CRM systems through secure APIs. No disruption to your existing workflows.'
  },
  {
    question: 'Can the AI handle different types of property inquiries?',
    answer: 'Absolutely. Our AI agents are trained to handle student accommodation, build-to-rent, commercial properties, and traditional rentals. They can answer specific questions about amenities, pricing, and availability.'
  },
  {
    question: 'How secure is tenant data?',
    answer: 'We follow enterprise-grade security with ISO 27001 certification, end-to-end encryption, and SOC 2 compliance. All tenant data is stored within UK borders and never shared with third parties.'
  },
  {
    question: 'Can we customize the AI agent conversations?',
    answer: 'Yes, you can fully customize conversation flows, property details, pricing strategies, and escalation rules to match your brand voice and specific property portfolios.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ color: '#ffffff' }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold" style={{ color: '#ffffff' }}>
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-white flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-white flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}