"use client"

import React from 'react'
import AIOperatorHero from '@/components/ai-operator/Hero'
import HowItWorks from '@/components/ai-operator/HowItWorks'
import Integrations from '@/components/ai-operator/Integrations'
import InteractiveCards from '@/components/ai-operator/InteractiveCards'
import FeatureCards from '@/components/ai-operator/FeatureCards'
import ResultsMetrics from '@/components/ai-operator/ResultsMetrics'
import CTASection from '@/components/ai-operator/CTASection'
import DarkHeader from '@/components/ai-operator/DarkHeader'
import Footer from '@/components/Footer'

export default function AIOperatorPage() {
  
  return (
    <div className="min-h-screen bg-black !text-white">
      <DarkHeader />
      <AIOperatorHero />
      <InteractiveCards />
      <FeatureCards />
      <HowItWorks />
      <Integrations />
      <ResultsMetrics />
      <CTASection />
      <Footer />
    </div>
  )
}