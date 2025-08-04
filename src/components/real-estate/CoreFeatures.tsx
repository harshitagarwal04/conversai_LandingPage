'use client'

import { motion } from 'framer-motion'
import { 
  Phone,
  MessageSquare,
  Mail,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  Users
} from 'lucide-react'

const problems = [
  {
    icon: TrendingUp,
    problem: 'High Vacancy Rates',
    solution: 'AI agents qualify leads instantly and schedule viewings 24/7, reducing time-to-lease by 40%'
  },
  {
    icon: Clock,
    problem: 'Manual Tenant Support',
    solution: 'Automated handling of maintenance requests, rent reminders, and property inquiries around the clock'
  },
  {
    icon: Users,
    problem: 'High Operational Costs',
    solution: 'Replace expensive call centers with AI agents that handle thousands of tenant interactions simultaneously'
  },
  {
    icon: Shield,
    problem: 'GDPR Compliance Issues',
    solution: 'Built-in GDPR compliance ensures all tenant data and interactions follow UK data protection regulations'
  }
]

const channels = [
  { icon: Phone, name: 'Voice Calls' },
  { icon: MessageSquare, name: 'WhatsApp' },
  { icon: Mail, name: 'Email' },
  { icon: Globe, name: 'Web Chat' }
]

export default function CoreFeatures() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ color: '#ffffff' }}
          >
            How AI Agents Transform Property Management
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {problems.map((item, index) => (
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
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold"
                  style={{ color: '#ffffff' }}>{item.problem}</h3>
                </div>
                
                <p className="text-gray-300 text-lg">
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ color: '#ffffff' }}
          >
            One Platform, All Channels
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-gray-900 rounded-3xl flex items-center justify-center mb-6">
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold"
                style={{ color: '#ffffff' }}>{channel.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}