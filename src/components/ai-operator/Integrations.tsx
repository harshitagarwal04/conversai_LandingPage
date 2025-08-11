"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Cloud, Database, Code, Webhook } from 'lucide-react'

const integrationCategories = [
  {
    title: 'CRM Platforms',
    icon: Database,
    integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Monday.com', 'Copper']
  },
  {
    title: 'Communication',
    icon: Zap,
    integrations: ['Slack', 'Teams', 'Discord', 'Telegram', 'WhatsApp', 'Twilio']
  },
  {
    title: 'Help Desk',
    icon: Shield,
    integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Help Scout', 'Jira', 'ServiceNow']
  },
  {
    title: 'E-Commerce',
    icon: Cloud,
    integrations: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Square', 'Stripe']
  },
  {
    title: 'Marketing',
    icon: Code,
    integrations: ['Mailchimp', 'SendGrid', 'ActiveCampaign', 'Klaviyo', 'Brevo', 'ConvertKit']
  },
  {
    title: 'Custom APIs',
    icon: Webhook,
    integrations: ['REST API', 'GraphQL', 'Webhooks', 'WebSocket', 'gRPC', 'Custom SDK']
  }
]

export default function Integrations() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Connects with everything you use
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seamlessly integrate with your existing tech stack. No migration required.
            </p>
          </motion.div>

          {/* Integration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <category.icon className="w-5 h-5 !text-white" />
                  </div>
                  <h3 className="text-lg font-semibold !text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.integrations.map((integration, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* API Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-gray-800 p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold !text-white mb-4">
                  Developer-First Platform
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                  Build custom integrations with our comprehensive API. Full documentation, 
                  SDKs in multiple languages, and dedicated developer support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-lg bg-gray-800 !text-white font-medium hover:bg-gray-700 transition-colors">
                    View API Docs
                  </button>
                  <button className="px-6 py-3 rounded-lg border border-gray-700 !text-white font-medium hover:border-gray-600 transition-colors">
                    Get API Key
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
                <div className="text-gray-400 mb-2">{`// Quick Start`}</div>
                <div className="text-blue-400">const</div>
                <span className="!text-white"> conversai </span>
                <span className="text-gray-400">= </span>
                <span className="text-purple-400">new</span>
                <span className="text-yellow-400"> ConversAI</span>
                <span className="text-gray-400">(</span>
                <span className="text-green-400">{`'YOUR_API_KEY'`}</span>
                <span className="text-gray-400">);</span>
                <br /><br />
                <div className="text-blue-400">const</div>
                <span className="!text-white"> response </span>
                <span className="text-gray-400">= </span>
                <span className="text-blue-400">await</span>
                <span className="!text-white"> conversai</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-400">createCall</span>
                <span className="text-gray-400">({'{'}</span>
                <br />
                <span className="!text-white ml-4">  to</span>
                <span className="text-gray-400">: </span>
                <span className="text-green-400">{`'+1234567890'`}</span>
                <span className="text-gray-400">,</span>
                <br />
                <span className="!text-white ml-4">  agentId</span>
                <span className="text-gray-400">: </span>
                <span className="text-green-400">{`'agent_123'`}</span>
                <br />
                <span className="text-gray-400">{'}'});</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}