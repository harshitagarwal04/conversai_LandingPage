'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  UserCheck, 
  Calculator, 
  Wallet, 
  Phone, 
  Headphones
} from 'lucide-react'

const stages = [
  {
    icon: FileText,
    title: 'Application',
    description: 'Digital onboarding in minutes',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: UserCheck,
    title: 'Verification',
    description: 'Instant KYC with Aadhaar',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Calculator,
    title: 'Assessment',
    description: 'AI-powered credit scoring',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Wallet,
    title: 'Disbursement',
    description: 'Same-day fund transfer',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Phone,
    title: 'Collections',
    description: 'Voice AI in 12+ languages',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 customer assistance',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function LoanLifecycle() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            End-to-End Automation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            From application to closure, automate every step
          </motion.p>
        </div>
        
        {/* Desktop View */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2" />
            
            <div className="grid grid-cols-6 gap-4 relative">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.color} p-0.5 mb-4 transform transition-transform hover:scale-110`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <stage.icon className="w-10 h-10 text-gray-700" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stage.color} p-0.5 mb-3`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <stage.icon className="w-8 h-8 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
        >
          {[
            { value: '90%', label: 'Automation' },
            { value: '60%', label: 'Cost Reduction' },
            { value: '2 Days', label: 'Implementation' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}