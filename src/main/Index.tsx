"use client"
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhyConversAI from '@/components/WhyConversAI';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { updateSEO } from '@/utils/seo';
import { addStructuredData, createOrganizationStructuredData, createWebsiteStructuredData } from '@/utils/structuredData';

const Index = () => {
  useEffect(() => {
    // Update SEO metadata when component mounts
    updateSEO({
      title: 'Accelerating AI-Powered Conversations',
      description: 'ConversAI Labs helps businesses automate conversations with AI across voice, WhatsApp, email and more, increasing customer satisfaction and reducing response times.',
      keywords: 'conversational ai, ai assistant, voice ai, whatsapp ai, customer support automation, ai conversations, business automation',
      url: window.location.href,
    });
    
    // Add structured data for better search engine understanding
    addStructuredData(createOrganizationStructuredData());
    addStructuredData(createWebsiteStructuredData());
  }, []);
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <WhyConversAI />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
