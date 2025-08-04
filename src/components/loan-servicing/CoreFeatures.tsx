'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Users,
  CreditCard,
  Bell,
  CheckCircle2
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Intelligent Document Processing',
    description: 'Automated extraction and verification of loan documents with 99% accuracy using advanced OCR and AI.',
    capabilities: ['Aadhaar e-KYC', 'PAN verification', 'Bank statement analysis', 'Income document processing']
  },
  {
    icon: Shield,
    title: 'Risk Assessment & Scoring',
    description: 'Real-time credit scoring and risk profiling using alternative data sources and ML models.',
    capabilities: ['Bureau integration', 'Alternative data scoring', 'Fraud detection', 'Portfolio risk monitoring']
  },
  {
    icon: Zap,
    title: 'Automated Loan Origination',
    description: 'Streamline the entire loan application process from lead capture to disbursement.',
    capabilities: ['Digital application forms', 'Instant eligibility check', 'Auto-approval workflows', 'E-mandate registration']
  },
  {
    icon: CreditCard,
    title: 'Smart Collections',
    description: 'AI-powered collection strategies with multichannel communication and payment options.',
    capabilities: ['UPI collections', 'WhatsApp reminders', 'Voice AI calls', 'Settlement predictions']
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Communicate with customers in their preferred language across all channels.',
    capabilities: ['12+ Indian languages', 'Voice & text support', 'Regional dialect handling', 'Real-time translation']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive dashboards with real-time insights into portfolio performance.',
    capabilities: ['NPA tracking', 'Collection efficiency', 'Disbursement analytics', 'Custom reports']
  }
]

export default function CoreFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to modernize your loan servicing operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 bg-white hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-900 transition-colors">
                    <feature.icon className="h-6 w-6 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}