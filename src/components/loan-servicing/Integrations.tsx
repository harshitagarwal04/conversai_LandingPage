'use client'

import { motion } from 'framer-motion'

const integrations = [
  { name: 'CIBIL', category: 'Credit Bureau' },
  { name: 'Experian', category: 'Credit Bureau' },
  { name: 'DigiLocker', category: 'Document' },
  { name: 'Aadhaar e-KYC', category: 'Verification' },
  { name: 'PAN Verification', category: 'Verification' },
  { name: 'GSTN', category: 'Verification' },
  { name: 'Razorpay', category: 'Payment' },
  { name: 'Paytm', category: 'Payment' },
  { name: 'UPI', category: 'Payment' },
  { name: 'WhatsApp Business', category: 'Communication' },
  { name: 'SMS Gateways', category: 'Communication' },
  { name: 'Email Services', category: 'Communication' }
]

export default function Integrations() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pre-built Integrations
          </h2>
          <p className="text-lg text-gray-600">
            Connect with all major financial services and verification APIs
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="font-medium text-gray-900">{integration.name}</div>
                <div className="text-sm text-gray-500">{integration.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}