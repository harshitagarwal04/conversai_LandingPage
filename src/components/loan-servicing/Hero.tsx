'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LoanServicingHero() {
  return (
    <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-gray-100/[0.04] bg-[size:50px_50px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-center"
          >
            Loan Servicing Platform for Modern Financial Institutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-center"
          >
            End-to-end automation for loan origination, underwriting, collections, and compliance. 
            Built specifically for Indian NBFCs and banks.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
              asChild
            >
              <Link href="/schedule-demo">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
              asChild
            >
              <Link href="/contact">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}