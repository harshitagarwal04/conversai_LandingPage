'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to modernize your loan servicing?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Get started with a personalized demo and see how our platform can transform your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
              asChild
            >
              <Link href="/schedule-demo">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
              asChild
            >
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}