import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LeadData } from '@/lib/supabase'

interface UseLeadCaptureOptions {
  onSuccess?: (leadId: string) => void
  redirectTo?: string
}

export const useLeadCapture = (options: UseLeadCaptureOptions = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const submitLead = async (leadData: Partial<LeadData>) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Add current page as source if not provided
      const currentPath = window.location.pathname
      const finalLeadData = {
        ...leadData,
        source_page: leadData.source_page || currentPath,
      }

      const response = await fetch('/api/ai-crm-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalLeadData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      // Handle success
      if (options.onSuccess) {
        options.onSuccess(result.leadId)
      }

      if (options.redirectTo) {
        router.push(options.redirectTo)
      }

      return result

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      setError(errorMessage)
      throw err
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submitLead,
    isSubmitting,
    error,
    clearError: () => setError(null)
  }
}