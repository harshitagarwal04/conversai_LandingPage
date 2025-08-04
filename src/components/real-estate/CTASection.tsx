'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#ffffff' }}>
            Ready to transform your property operations?
          </h2>
          
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Join 25+ UK property companies using our AI agents to automate tenant interactions and boost occupancy rates. 
            See results within 30 days.
          </p>

          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-black px-12 py-6 text-xl font-medium rounded-full mb-8"
            asChild
          >
            <Link href="mailto:connect@conversailabs.com">
              Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>

        </motion.div>
      </div>
    </section>
  )
}