'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SimpleContactForm from './SimpleContactForm'

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Contact Form</DialogTitle>
        </DialogHeader>
        <SimpleContactForm 
          industry={industry}
          title={title || "Get Started with AI CRM"}
          description="Tell us about your business and we'll get in touch"
        />
      </DialogContent>
    </Dialog>
  )
}