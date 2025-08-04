'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, Phone, CheckCircle } from 'lucide-react'

const metrics = [
  {
    icon: TrendingUp,
    value: '15-25%',
    label: 'Average Collection Rate Improvement',
    description: 'Increase in successful recoveries within 60 days'
  },
  {
    icon: Clock,
    value: '30-40%',
    label: 'Reduction in Resolution Time',
    description: 'Faster payment processing and customer queries'
  },
  {
    icon: Users,
    value: '25-35%',
    label: 'Lower Operational Costs',
    description: 'Reduced dependency on large call center teams'
  },
  {
    icon: Phone,
    value: '24/7',
    label: 'Continuous Operations',
    description: 'Round-the-clock customer engagement'
  }
]

const results = [
  {
    category: 'Mid-size NBFC',
    portfolio: '₹500 Cr Portfolio',
    improvements: [
      'Collection rate improved from 65% to 75%',
      'Monthly operational costs reduced by ₹5 Lakhs',
      'Customer satisfaction scores up 20%',
      '72-hour deployment timeline'
    ]
  },
  {
    category: 'Regional Bank',
    portfolio: '₹2000 Cr Portfolio',
    improvements: [
      'NPA reduction of 12% in first quarter',
      'Processing time for extensions cut by 50%',
      'Compliance violations reduced by 90%',
      'Multi-language support increased reach by 25%'
    ]
  },
  {
    category: 'Digital Lender',
    portfolio: '₹150 Cr Portfolio',
    improvements: [
      'Early intervention prevented ₹8 Cr in defaults',
      'Customer retention improved by 30%',
      'Real-time payment tracking reduced disputes',
      'Seamless API integration with existing systems'
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
              Proven Results Across Financial Institutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how NBFCs, banks, and digital lenders are transforming their collection operations 
              with AI-powered automation.
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
              Results based on implementations across 15+ financial institutions in India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}