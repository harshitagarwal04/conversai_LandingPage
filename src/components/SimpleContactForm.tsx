'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, ArrowRight } from 'lucide-react'
import { useLeadCapture } from '@/hooks/use-lead-capture'
import { useToast } from '@/hooks/use-toast'

interface SimpleContactFormProps {
  industry?: string
  title?: string
  description?: string
}

export default function SimpleContactForm({ 
  industry, 
  title = "Get Started with AI CRM",
  description = "Tell us about your business and we'll get in touch"
}: SimpleContactFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    company: '',
    industry: industry || '',
    notes: ''
  })

  const { submitLead, isSubmitting, error } = useLeadCapture({
    onSuccess: () => {
      toast({
        title: "Thank you!",
        description: "We'll get in touch with you within 24 hours.",
      })
      // Reset form
      setFormData({
        email: '',
        name: '',
        phone: '',
        company: '',
        industry: industry || '',
        notes: ''
      })
    }
  })
  
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await submitLead({
        ...formData,
        form_type: 'contact_form',
        interest_level: 'medium',
        notes: formData.notes || `Contact form submission for ${industry || 'AI CRM'}`
      })
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <Card className="max-w-md mx-auto border-2 border-blue-200 bg-white shadow-lg">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Mail className="w-6 h-6 text-blue-600" />
          <CardTitle className="text-xl font-bold text-gray-900">
            {title}
          </CardTitle>
        </div>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="contact_email">Business Email *</Label>
            <Input
              id="contact_email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              placeholder="you@company.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="contact_name">Name *</Label>
              <Input
                id="contact_name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="contact_phone">Phone</Label>
              <Input
                id="contact_phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="Your phone"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="contact_company">Company Name</Label>
            <Input
              id="contact_company"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Your company"
            />
          </div>

          {!industry && (
            <div>
              <Label htmlFor="contact_industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="insurance">Insurance</SelectItem>
                  <SelectItem value="home-services">Home Services</SelectItem>
                  <SelectItem value="saas-technology">SaaS & Technology</SelectItem>
                  <SelectItem value="healthcare-wellness">Healthcare & Wellness</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="contact_notes">Tell us about your needs</Label>
            <Textarea
              id="contact_notes"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              placeholder="What are you looking to automate?"
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Get In Touch'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}