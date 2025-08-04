'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Users } from 'lucide-react'

export default function ROICalculator() {
  const [monthlyCollections, setMonthlyCollections] = useState(1000000)
  const [currentRate, setCurrentRate] = useState(65)
  const [callCenterCost, setCallCenterCost] = useState(500000)

  // Calculations
  const improvedRate = Math.min(currentRate + 25, 95) // Max 95% collection rate
  const additionalCollections = (monthlyCollections * (improvedRate - currentRate)) / 100
  const monthlySavings = callCenterCost * 0.6 // 60% reduction in call center costs
  const totalMonthlySavings = additionalCollections + monthlySavings
  const annualSavings = totalMonthlySavings * 12

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how much your NBFC or bank can save with AI-powered loan collection automation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Calculator Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold" style={{ color: '#ffffff' }}>
                  Your Current Metrics
                </h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#ffffff' }}>
                    Monthly Collections Target
                  </label>
                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="100000"
                    value={monthlyCollections}
                    onChange={(e) => setMonthlyCollections(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-gray-400 mt-2">
                    {formatCurrency(monthlyCollections)}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#ffffff' }}>
                    Current Collection Rate
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="85"
                    step="5"
                    value={currentRate}
                    onChange={(e) => setCurrentRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-gray-400 mt-2">
                    {currentRate}%
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3" style={{ color: '#ffffff' }}>
                    Monthly Call Center Costs
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="2000000"
                    step="50000"
                    value={callCenterCost}
                    onChange={(e) => setCallCenterCost(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-gray-400 mt-2">
                    {formatCurrency(callCenterCost)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-black rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>
                    Improved Collection Rate
                  </h3>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {improvedRate}%
                </div>
                <div className="text-gray-400">
                  +{improvedRate - currentRate}% improvement
                </div>
              </div>

              <div className="bg-black rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>
                    Additional Monthly Collections
                  </h3>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {formatCurrency(additionalCollections)}
                </div>
                <div className="text-gray-400">
                  From improved collection rates
                </div>
              </div>

              <div className="bg-black rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>
                    Operational Savings
                  </h3>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {formatCurrency(monthlySavings)}
                </div>
                <div className="text-gray-400">
                  Monthly call center cost reduction
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-8 h-8 text-black" />
                  <h3 className="text-xl font-bold text-black">
                    Total Annual Savings
                  </h3>
                </div>
                <div className="text-4xl font-bold text-black mb-2">
                  {formatCurrency(annualSavings)}
                </div>
                <div className="text-gray-600">
                  Combined collections + cost savings
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}