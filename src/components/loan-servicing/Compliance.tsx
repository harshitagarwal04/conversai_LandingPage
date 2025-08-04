'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Award } from 'lucide-react'

const complianceFeatures = [
  {
    icon: Shield,
    title: 'RBI Compliant',
    description: 'Fully compliant with RBI guidelines including Fair Practices Code and KYC norms'
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Bank-grade encryption with data stored in India. ISO 27001 certified infrastructure'
  },
  {
    icon: FileCheck,
    title: 'Automated Reporting',
    description: 'Automatic CIBIL reporting, GST returns, and regulatory submissions with audit trails'
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'SOC 2 Type II, PCI DSS compliant, and regular VAPT audits'
  }
]

export default function Compliance() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security & Compliance
          </h2>
          <p className="text-lg text-gray-600">
            Built to meet the strictest regulatory requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {complianceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}