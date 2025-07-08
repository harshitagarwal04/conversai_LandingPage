"use client"
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SmartDeskHero from '@/components/SmartDeskHero';
import ProblemSolution from '@/components/ProblemSolution';
import TechnicalFeatures from '@/components/TechnicalFeatures';
import AgentTemplates from '@/components/AgentTemplates';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { updateSEO } from '@/utils/seo';
import { addStructuredData, createOrganizationStructuredData, createWebsiteStructuredData } from '@/utils/structuredData';

const Index = () => {
  useEffect(() => {
    // Update SEO metadata when component mounts
    updateSEO({
      title: 'Build Custom AI Agents That Actually Convert Leads | ConversAI',
      description: 'Create intelligent voice bots in minutes. Upload your script, pick a voice, and let AI qualify leads 24/7 across voice, WhatsApp, and email. No-code agent builder with proven templates.',
      keywords: 'ai agent builder, conversational ai, voice bot, lead qualification, ai automation, no-code ai, voice ai, whatsapp ai, customer support automation',
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
      <SmartDeskHero />
      <ProblemSolution />
      <TechnicalFeatures />
      <AgentTemplates />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
