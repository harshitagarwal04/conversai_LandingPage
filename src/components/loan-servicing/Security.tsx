'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileCheck, Server, Users } from 'lucide-react'

const certifications = [
  {
    title: 'RBI Compliant',
    description: 'Adheres to RBI guidelines and Fair Practices Code',
    icon: '🏛️'
  },
  {
    title: 'ISO 27001',
    description: 'Information security management certification',
    icon: '🔒'
  },
  {
    title: 'SOC 2 Type II',
    description: 'Audited security, availability, and confidentiality',
    icon: '✅'
  },
  {
    title: 'Data Residency',
    description: 'All data stored within India as per regulations',
    icon: '🇮🇳'
  }
]

const securityFeatures = [
  {
    icon: Shield,
    title: 'End-to-End Encryption',
    description: 'All customer conversations and data encrypted in transit and at rest using AES-256'
  },
  {
    icon: Lock,
    title: 'Zero Data Retention',
    description: 'Customer PII is never stored permanently, only processed for active sessions'
  },
  {
    icon: Eye,
    title: 'Audit Trail',
    description: 'Complete logging of all interactions for regulatory compliance and monitoring'
  },
  {
    icon: FileCheck,
    title: 'Compliance Checks',
    description: 'Built-in validation for Fair Practices Code and debt collection regulations'
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Hosted on RBI-approved cloud infrastructure with 99.9% uptime SLA'
  },
  {
    icon: Users,
    title: 'Role-based Access',
    description: 'Granular permissions and multi-factor authentication for all admin users'
  }
]

export default function Security() {
  return (
    <section className="py-32 bg-black">
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
              Bank-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your customers' data and privacy are protected with enterprise-level security measures 
              and full regulatory compliance designed for the Indian financial sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#ffffff' }}>
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}