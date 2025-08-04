'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is our AI solution RBI compliant?',
    answer: 'Yes, our AI agents are built with RBI guidelines and Fair Practices Code compliance. All interactions are logged, recorded, and follow regulatory requirements for debt collection and customer communication.'
  },
  {
    question: 'How quickly can we see results?',
    answer: 'Most NBFCs and banks see a 20-40% improvement in collection rates within the first 30 days. Full ROI is typically achieved within 90 days of deployment.'
  },
  {
    question: 'Does it integrate with our existing loan management system?',
    answer: 'Yes, our AI agents integrate seamlessly with popular LMS platforms including Finacle, Temenos, and custom systems through APIs. No disruption to your existing workflows.'
  },
  {
    question: 'What languages do the AI agents support?',
    answer: 'Our AI agents support 10+ Indian languages including Hindi, English, Tamil, Telugu, Bengali, Marathi, and Gujarati. They automatically detect customer language preferences.'
  },
  {
    question: 'How secure is customer data?',
    answer: 'We follow bank-grade security with ISO 27001 certification, end-to-end encryption, and SOC 2 compliance. Customer data never leaves India and is stored in RBI-approved data centers.'
  },
  {
    question: 'Can we customize the AI agent conversations?',
    answer: 'Absolutely. You can customize conversation flows, collection strategies, escalation rules, and compliance scripts to match your brand voice and policies.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 bg-black">
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