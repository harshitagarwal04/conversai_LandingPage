'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  Cloud, 
  Lock, 
  Cpu,
  Workflow,
  Layers
} from 'lucide-react'

const capabilities = [
  {
    icon: Database,
    title: 'Data Integration',
    items: [
      'CIBIL & Experian bureau APIs',
      'DigiLocker document fetch',
      'Bank account aggregator APIs',
      'GSTN verification'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    items: [
      'AWS/Azure deployment',
      'Auto-scaling architecture',
      '99.9% uptime SLA',
      'Multi-region support'
    ]
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    items: [
      'ISO 27001 certified',
      'RBI compliant architecture',
      'End-to-end encryption',
      'GDPR ready'
    ]
  },
  {
    icon: Cpu,
    title: 'AI/ML Capabilities',
    items: [
      'Custom risk models',
      'NLP for document processing',
      'Predictive analytics',
      'Fraud detection algorithms'
    ]
  },
  {
    icon: Workflow,
    title: 'Workflow Engine',
    items: [
      'No-code workflow builder',
      'Custom approval chains',
      'Rule-based automation',
      'SLA management'
    ]
  },
  {
    icon: Layers,
    title: 'API Architecture',
    items: [
      'RESTful & GraphQL APIs',
      'Webhook support',
      'Rate limiting',
      'API versioning'
    ]
  }
]

export default function TechnicalCapabilities() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Capabilities
          </h2>
          <p className="text-lg text-gray-600">
            Enterprise-grade infrastructure built for scale and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <capability.icon className="h-5 w-5 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {capability.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {capability.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}