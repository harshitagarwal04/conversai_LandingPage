import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for API routes
export const createServerSupabaseClient = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Types for our lead data
export interface LeadData {
  email: string
  name?: string
  phone?: string
  company?: string
  industry?: string
  business_size?: 'small' | 'medium' | 'large'
  current_crm?: string
  monthly_leads?: number
  voice_minutes_needed?: number
  whatsapp_messages_needed?: number
  source_page: string
  form_type: 'quote_calculator' | 'demo_request' | 'pricing_inquiry' | 'contact_form'
  interest_level?: 'high' | 'medium' | 'low'
  utm_source?: string
  utm_campaign?: string
  utm_medium?: string
  notes?: string
}