'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: '₹49,999',
    period: '/month',
    description: 'Perfect for small NBFCs and MFIs',
    features: [
      'Up to 10,000 active loans',
      'Basic automation features',
      'WhatsApp & SMS integration',
      '5 user accounts',
      'Standard reports',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹1,49,999',
    period: '/month',
    description: 'For growing financial institutions',
    features: [
      'Up to 50,000 active loans',
      'Advanced AI features',
      'Multi-channel collections',
      'Unlimited users',
      'Custom reports & analytics',
      'API access',
      'Priority support',
      'Field force mobile app',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large banks and NBFCs',
    features: [
      'Unlimited loans',
      'Full AI suite',
      'Custom integrations',
      'Dedicated account manager',
      'On-premise deployment option',
      'Custom ML models',
      'SLA guarantee',
      'White-label option',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Start with a 30-day free trial. No credit card required.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                size="lg"
                asChild
              >
                <Link href="/schedule-demo">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">All plans include:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              'GST included',
              'Data backup',
              'SSL security',
              'Regular updates',
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-blue-50 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-2">Volume Discounts Available</h3>
          <p className="text-gray-600 mb-4">
            Processing more than 1 lakh loans? Get custom pricing tailored to your scale.
          </p>
          <Link href="/contact" className="text-blue-600 font-medium hover:underline">
            Contact our sales team →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}