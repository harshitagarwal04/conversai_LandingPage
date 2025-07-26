'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  industry?: string
  title?: string
}

export default function ContactModal({ 
  isOpen, 
  onClose, 
  industry,
  title 
}: ContactModalProps) {
  const handleWhatsApp = () => {
    const phoneNumber = '918076018082'
    const message = encodeURIComponent(`Hi, I'm interested in ${title || 'AI CRM'}${industry ? ` for ${industry}` : ''}`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    onClose()
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(`Inquiry about ${title || 'AI CRM'}${industry ? ` for ${industry}` : ''}`)
    window.location.href = `mailto:connect@conversailabs.com?subject=${subject}`
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-6 bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Contact Us</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-600">Choose your preferred way to get in touch with our team:</p>
          
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 flex items-center justify-center gap-3"
            size="lg"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </Button>
          
          <Button 
            onClick={handleEmail}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 flex items-center justify-center gap-3"
            size="lg"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </Button>
          
          <p className="text-sm text-gray-500 text-center">
            We typically respond within 24 hours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}