import { Metadata } from 'next'
import LoanServicingHero from '@/components/loan-servicing/Hero'
import CoreFeatures from '@/components/loan-servicing/CoreFeatures'
import TechnicalCapabilities from '@/components/loan-servicing/TechnicalCapabilities'
import Integrations from '@/components/loan-servicing/Integrations'
import Compliance from '@/components/loan-servicing/Compliance'
import CTASection from '@/components/loan-servicing/CTASection'

export const metadata: Metadata = {
  title: 'Loan Servicing Platform | ConversAI Labs',
  description: 'Modern loan servicing platform with AI-powered automation for NBFCs and banks. End-to-end loan lifecycle management with compliance and multi-language support.',
  keywords: 'loan servicing, NBFC software, banking automation, loan management system, India',
}

export default function LoanServicingPage() {
  return (
    <main className="min-h-screen bg-white">
      <LoanServicingHero />
      <CoreFeatures />
      <TechnicalCapabilities />
      <Integrations />
      <Compliance />
      <CTASection />
    </main>
  )
}