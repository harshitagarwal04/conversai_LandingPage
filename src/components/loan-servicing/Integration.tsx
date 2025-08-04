'use client'

import { motion } from 'framer-motion'
import { Database, Zap, Shield, Clock } from 'lucide-react'

const integrations = [
  {
    name: 'Core Banking Systems',
    description: 'Direct integration with major CBS platforms',
    logo: '🏦'
  },
  {
    name: 'Loan Management Systems',
    description: 'Seamless connection to popular LMS solutions',
    logo: '💼'
  },
  {
    name: 'Custom APIs',
    description: 'RESTful APIs for any loan management system',
    logo: '🔧'
  },
  {
    name: 'Legacy Systems',
    description: 'Bridge connections for older banking infrastructure',
    logo: '🏛️'
  }
]

const features = [
  {
    icon: Database,
    title: 'Real-time Data Sync',
    description: 'Instant access to loan balances, payment history, and customer data'
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Go live in 48 hours with pre-built connectors'
  },
  {
    icon: Shield,
    title: 'Secure APIs',
    description: 'Bank-grade encryption and tokenized data exchange'
  },
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Continuous health checks and automatic failover'
  }
]

export default function Integration() {
  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with your existing loan management systems without disrupting operations. 
              Our AI agents access real-time data to provide accurate, personalized interactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#ffffff' }}>
                  {integration.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}