'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Clock, Globe, Shield } from 'lucide-react'

const propositions = [
  {
    icon: TrendingDown,
    title: 'Reduce NPAs by 40%',
    description: 'AI-driven early warning systems predict defaults 90 days in advance, enabling proactive intervention.',
  },
  {
    icon: Clock,
    title: 'Process 5x Faster',
    description: 'Automate loan origination, underwriting, and disbursement with intelligent workflow automation.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Serve customers in 12+ Indian languages including Hindi, Tamil, Telugu, Bengali, and more.',
  },
  {
    icon: Shield,
    title: '100% RBI Compliant',
    description: 'Built-in compliance with latest RBI guidelines, automatic CIBIL reporting, and GST automation.',
  },
]

export default function ValuePropositions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Transform Your Loan Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join India's leading financial institutions in revolutionizing loan servicing with AI
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {propositions.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <prop.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}