'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, Phone, CheckCircle } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '20-30%',
    label: 'Increase in Occupancy Rates',
    description: 'Faster lead qualification and viewing scheduling'
  },
  {
    icon: Clock,
    value: '40-50%',
    label: 'Reduction in Response Time',
    description: 'Instant responses to tenant queries and maintenance requests'
  },
  {
    icon: Users,
    value: '35-45%',
    label: 'Lower Operational Costs',
    description: 'Reduced dependency on large customer service teams'
  },
  {
    icon: Phone,
    value: '24/7',
    label: 'Continuous Operations',
    description: 'Round-the-clock tenant support and lead qualification'
  }
]

const results = [
  {
    category: 'Student Accommodation Provider',
    portfolio: '2,500 Beds Across London',
    improvements: [
      'Occupancy rate improved from 85% to 96%',
      'Monthly operational costs reduced by £15,000',
      'Tenant satisfaction scores up 25%',
      '48-hour AI deployment timeline'
    ]
  },
  {
    category: 'Build-to-Rent Developer',
    portfolio: '5,000 Units Nationwide',
    improvements: [
      'Lead conversion rate increased by 35%',
      'Viewing requests processed 80% faster',
      'Maintenance requests handled in minutes',
      'Multi-language support for international tenants'
    ]
  },
  {
    category: 'Property Management Company',
    portfolio: '1,200 Rental Properties',
    improvements: [
      'Tenant retention improved by 30%',
      'Rent collection efficiency up 20%',
      'Emergency maintenance response automated',
      'GDPR compliance maintained across all interactions'
    ]
  }
]

export default function Results() {
  return (
    <section id="results" className="py-32 bg-black">
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
              Proven Results Across UK Property Companies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how student accommodation providers, build-to-rent developers, and property managers 
              are transforming their operations with AI-powered automation.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-3xl flex items-center justify-center mb-6">
                  <metric.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#ffffff' }}>
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#ffffff' }}>
                  {metric.label}
                </h3>
                <p className="text-gray-400 text-sm">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-3xl p-8"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>
                    {result.category}
                  </h3>
                  <div className="text-gray-400 font-medium">
                    {result.portfolio}
                  </div>
                </div>

                <div className="space-y-4">
                  {result.improvements.map((improvement, improvementIndex) => (
                    <div key={improvementIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {improvement}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg">
              Results based on implementations across 25+ UK property companies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}