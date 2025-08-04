'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    company: 'Leading NBFC',
    logo: '/logos/nbfc1.png',
    quote: 'ConversAI reduced our NPAs by 35% in just 6 months. The AI-driven collections are game-changing.',
    author: 'Rajesh Kumar',
    role: 'Chief Risk Officer',
    metrics: {
      npaReduction: '35%',
      collectionRate: '92%',
      timesSaved: '₹12 Cr',
    },
  },
  {
    company: 'Microfinance Institution',
    logo: '/logos/mfi1.png',
    quote: 'The multi-language support helped us reach rural customers effectively. Collections improved by 40%.',
    author: 'Priya Sharma',
    role: 'Head of Operations',
    metrics: {
      customersServed: '2L+',
      languages: '8',
      efficiency: '40%',
    },
  },
  {
    company: 'Private Bank',
    logo: '/logos/bank1.png',
    quote: 'Seamless integration with our core banking. Processing time reduced from days to hours.',
    author: 'Amit Patel',
    role: 'Digital Banking Head',
    metrics: {
      processingTime: '80%',
      accuracy: '99.9%',
      loansProcessed: '50K+',
    },
  },
]

const partners = [
  'HDFC Bank', 'ICICI Bank', 'Bajaj Finance', 'Muthoot Finance',
  'Kotak Mahindra', 'Axis Bank', 'IndusInd Bank', 'L&T Finance',
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Trusted by India's Leading Financial Institutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join 100+ NBFCs and banks transforming their loan operations
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">{testimonial.company}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-2">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="font-bold text-blue-600">{value}</p>
                    <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by leading financial institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="h-12 bg-gray-200 rounded-lg flex items-center justify-center px-4">
                <span className="text-xs font-semibold text-gray-600">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: 'Total Loans Processed', value: '₹50,000 Cr+' },
            { label: 'Active Users', value: '10,000+' },
            { label: 'Collection Rate', value: '94.5%' },
            { label: 'Customer Satisfaction', value: '4.8/5' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}