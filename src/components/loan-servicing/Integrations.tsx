'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const integrations = [
  { name: 'CIBIL', category: 'Credit Bureau' },
  { name: 'Experian', category: 'Credit Bureau' },
  { name: 'DigiLocker', category: 'Documents' },
  { name: 'Aadhaar', category: 'KYC' },
  { name: 'PAN', category: 'KYC' },
  { name: 'Razorpay', category: 'Payments' },
  { name: 'WhatsApp', category: 'Communication' },
  { name: 'AWS', category: 'Infrastructure' }
]

export default function Integrations() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-6"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Plug & Play Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Connect with your existing tech stack in minutes
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="font-bold text-lg text-gray-900 mb-1">
                  {integration.name}
                </div>
                <div className="text-sm text-gray-500">
                  {integration.category}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              + Many more integrations available through our API
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}