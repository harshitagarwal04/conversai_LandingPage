'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LoanServicingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white font-medium">
              For NBFCs & Banks
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{ color: '#ffffff' }}
          >
            Automate Your Loan Collections
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            AI agents handle overdue payments, customer queries, and loan servicing operations 
            24/7 across voice, WhatsApp, email, and web chat. Increase collection rates by 40% 
            while staying RBI compliant.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-medium rounded-full"
              asChild
            >
              <Link href="mailto:connect@conversailabs.com">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}