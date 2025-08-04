'use client'

import { motion } from 'framer-motion'
import { Phone, Play, Mic, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const demoScenarios = [
  {
    title: 'EMI Collection Call',
    language: 'Hindi',
    duration: '1:45',
    description: 'AI agent handles overdue payment collection'
  },
  {
    title: 'Balance Inquiry',
    language: 'Tamil',
    duration: '0:58',
    description: 'Customer checking loan balance and next EMI date'
  },
  {
    title: 'Document Verification',
    language: 'Telugu',
    duration: '2:12',
    description: 'AI agent guiding through document upload process'
  }
]

export default function VoiceAIDemo() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience Voice AI in Action
            </h2>
            <p className="text-lg text-gray-600">
              Listen to real conversations between AI agents and customers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Live Voice Demo</h3>
                    <p className="text-gray-600">Try our AI agent now</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Volume2 className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">Call in any of 12+ Indian languages</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mic className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">Natural conversation with context</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-xl"
                  asChild
                >
                  <Link href="/demo">
                    Start Voice Demo
                    <Phone className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-4">Sample Call Recordings</h3>
              {demoScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{scenario.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{scenario.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{scenario.language}</span>
                        <span className="text-xs text-gray-500">{scenario.duration}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-green-100 rounded-full flex items-center justify-center transition-colors">
                        <Play className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}