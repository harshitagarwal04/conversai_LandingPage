'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Automate Collections',
    description: 'AI agents handle payment reminders, follow-ups, and negotiations in 12+ languages. Reduce NPAs by 40%.',
    metric: '85% Collection Rate'
  },
  {
    title: 'Ensure Compliance',
    description: 'Built-in RBI guidelines, automated CIBIL reporting, and complete audit trails. Stay compliant without manual effort.',
    metric: '100% Compliant'
  },
  {
    title: 'Scale Operations',
    description: 'Process 10,000+ applications daily with 90% automation. From origination to closure in hours, not days.',
    metric: '5x Faster'
  }
]

export default function MinimalFeatures() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-3xl font-bold text-blue-600">
                  {feature.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}