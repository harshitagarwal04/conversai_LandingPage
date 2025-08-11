"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Calendar, Wrench, TrendingUp, Clock, CheckCircle } from 'lucide-react'

const features = [
  {
    id: 'instant-response',
    title: 'Instant Response',
    icon: MessageSquare,
    description: 'Responds 24/7 like a human to everyday patient questions about appointments, insurance, and medical records.',
    benefits: [
      { icon: TrendingUp, text: 'Uptick in patient satisfaction' },
      { icon: Clock, text: 'Decrease manual call volume' }
    ],
    gradient: 'from-blue-600/10 to-cyan-600/10',
    borderGradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'takes-action',
    title: 'Takes Action',
    icon: Calendar,
    description: 'Patients book appointments in a single call. ConversAI syncs with your scheduling system, sends confirmations and reminders, and follows up automatically.',
    benefits: [
      { icon: CheckCircle, text: 'Convert more calls to appointments' },
      { icon: MessageSquare, text: 'Reduce missed connections' }
    ],
    gradient: 'from-purple-600/10 to-pink-600/10',
    borderGradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'solves-issue',
    title: 'Solves Issues',
    icon: Wrench,
    description: 'Real-time triage diagnoses patient concerns, prioritizes them, and routes calls to the right department before the conversation even ends.',
    benefits: [
      { icon: CheckCircle, text: 'On-time issue resolution' },
      { icon: Clock, text: 'Eliminate remote call centers' }
    ],
    gradient: 'from-green-600/10 to-emerald-600/10',
    borderGradient: 'from-green-600 to-emerald-600'
  }
]

export default function FeatureCards() {
  return (
    <section className="py-20 bg-black">
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
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
              <span style={{ color: '#ffffff' }}>
                How ConversAI works
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light">
              Three core capabilities that transform your communication operations
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Bento Card */}
                <div className="relative h-full">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.borderGradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Card Content */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`} />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.borderGradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                            <feature.icon className="w-6 h-6 !text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {feature.description}
                      </p>

                      {/* Visual Content - Simulated Interface */}
                      <div className="relative h-40 bg-gradient-to-br from-gray-900 to-black rounded-lg mb-6 overflow-hidden border border-gray-800">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
                        
                        {/* Different content for each card */}
                        {feature.id === 'instant-response' && (
                          <div className="relative p-4 h-full flex flex-col justify-center">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <div className="h-2 bg-gray-700 rounded w-3/4" />
                              </div>
                              <div className="ml-4 h-2 bg-gray-800 rounded w-2/3" />
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <div className="h-2 bg-gray-700 rounded w-1/2" />
                              </div>
                              <div className="ml-4 h-2 bg-gray-800 rounded w-3/4" />
                            </div>
                          </div>
                        )}
                        
                        {feature.id === 'takes-action' && (
                          <div className="relative p-4 h-full flex items-center justify-center">
                            <div className="w-full max-w-[200px]">
                              <div className="border border-gray-700 rounded-lg p-3 bg-gray-900/50">
                                <div className="flex items-center justify-between mb-2">
                                  <Calendar className="w-4 h-4 text-blue-500" />
                                  <span className="text-xs text-gray-500">Booking</span>
                                </div>
                                <div className="space-y-1">
                                  <div className="h-1.5 bg-blue-600/30 rounded" />
                                  <div className="h-1.5 bg-green-600/30 rounded" />
                                  <div className="h-1.5 bg-purple-600/30 rounded" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {feature.id === 'solves-issue' && (
                          <div className="relative p-4 h-full flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-2 w-full max-w-[180px]">
                              <div className="aspect-square rounded bg-red-500/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-red-400">1</span>
                              </div>
                              <div className="aspect-square rounded bg-yellow-500/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-yellow-400">2</span>
                              </div>
                              <div className="aspect-square rounded bg-green-500/20 flex items-center justify-center">
                                <span className="text-xs font-bold text-green-400">3</span>
                              </div>
                              <div className="col-span-3 h-8 bg-gradient-to-r from-green-600/20 to-green-600/10 rounded flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <benefit.icon className="w-4 h-4 text-gray-500" />
                            <span className="text-xs text-gray-400">
                              {benefit.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}