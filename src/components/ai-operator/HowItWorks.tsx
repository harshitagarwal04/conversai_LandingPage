"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Upload, Settings, Rocket, BarChart } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Knowledge",
    description: "Import your FAQs, scripts, product info, and business processes. Our AI learns your unique operations.",
    color: "blue"
  },
  {
    number: "02",
    icon: Settings,
    title: "Customize Your Operator",
    description: "Choose voice, personality, and response style. Set up routing rules and escalation protocols.",
    color: "purple"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy Instantly",
    description: "Go live in minutes across all channels. Your AI operator starts handling conversations immediately.",
    color: "green"
  },
  {
    number: "04",
    icon: BarChart,
    title: "Monitor & Optimize",
    description: "Track performance in real-time. AI continuously learns and improves from every interaction.",
    color: "orange"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
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
                From setup to success in minutes
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No technical expertise required. Our intuitive platform guides you through every step.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20 hidden lg:block" />
            
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-4 mb-4">
                      <span className={`text-6xl font-bold bg-gradient-to-r 
                        ${step.color === 'blue' ? 'from-blue-400 to-cyan-400' : ''}
                        ${step.color === 'purple' ? 'from-purple-400 to-pink-400' : ''}
                        ${step.color === 'green' ? 'from-green-400 to-emerald-400' : ''}
                        ${step.color === 'orange' ? 'from-orange-400 to-red-400' : ''}
                        bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold !text-white mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-400 max-w-md">{step.description}</p>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      {/* Animated Background */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r 
                        ${step.color === 'blue' ? 'from-blue-500/20 to-cyan-500/20' : ''}
                        ${step.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' : ''}
                        ${step.color === 'green' ? 'from-green-500/20 to-emerald-500/20' : ''}
                        ${step.color === 'orange' ? 'from-orange-500/20 to-red-500/20' : ''}
                        blur-3xl`} />
                      
                      {/* Card */}
                      <div className="relative p-12 rounded-2xl bg-gray-900/50 border border-gray-800">
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-r 
                          ${step.color === 'blue' ? 'from-blue-500 to-cyan-500' : ''}
                          ${step.color === 'purple' ? 'from-purple-500 to-pink-500' : ''}
                          ${step.color === 'green' ? 'from-green-500 to-emerald-500' : ''}
                          ${step.color === 'orange' ? 'from-orange-500 to-red-500' : ''}`}>
                          <step.icon className="w-12 h-12 !text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-20"
          >
            <p className="text-2xl font-semibold !text-white mb-2">
              Ready to transform your customer communications?
            </p>
            <p className="text-lg text-gray-400">
              Start your free trial today. No credit card required.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}