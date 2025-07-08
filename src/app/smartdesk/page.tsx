'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, MessageSquare, TrendingUp, Users, Zap, Bot, Shield, ChevronRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmartDeskPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'scale'>('growth');

  const handleGetStarted = () => {
    window.open('https://wa.me/918076018082?text=Hi%2C%20I%27m%20interested%20in%20SmartDesk%20for%20WhatsApp', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered WhatsApp Assistant
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              SmartDesk
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Reply to 70% of WhatsApp queries instantly
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your AI side-kick that drafts perfect responses in WhatsApp Web, helping small merchants respond 10x faster and never miss a sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-6 text-lg"
              >
                Get Early Access
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            WhatsApp is overwhelming your small team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Slow Responses</h3>
              <p className="text-sm text-gray-600">Customers expect replies in minutes, not hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Repetitive Questions</h3>
              <p className="text-sm text-gray-600">Same queries asked 100 times a day</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Inconsistent Answers</h3>
              <p className="text-sm text-gray-600">Different team members, different responses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Lost Sales</h3>
              <p className="text-sm text-gray-600">Every delayed response is money lost</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get started in 3 simple steps
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            SmartDesk learns from your past conversations and creates an AI assistant that responds just like you would
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Upload Your Data</h3>
              <p className="text-gray-600 mb-4">
                Connect your WhatsApp Business and upload past chats, call transcripts, and pricing documents. Takes just 5 minutes.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Check className="w-5 h-5" />
                One-time setup
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">AI Learns Your Style</h3>
              <p className="text-gray-600 mb-4">
                SmartDesk analyzes your top customer questions and creates instant responses in your brand voice - Friendly or Formal.
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Bot className="w-5 h-5" />
                Auto-generated FAQs
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Start Responding Instantly</h3>
              <p className="text-gray-600 mb-4">
                Open WhatsApp Web, and SmartDesk suggests perfect responses. One click to insert and send. That&apos;s it!
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Zap className="w-5 h-5" />
                10x faster replies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to scale customer support
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant FAQ Matching</h3>
              <p className="text-gray-600">
                70% of customer queries get instant, accurate responses from your FAQ database
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Context-Aware AI</h3>
              <p className="text-gray-600">
                For complex queries, AI analyzes conversation history and generates perfect responses
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">One-Click Response</h3>
              <p className="text-gray-600">
                Review AI suggestions and insert them into WhatsApp with a single click
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tone Customization</h3>
              <p className="text-gray-600">
                Choose between Friendly or Formal tone to match your brand personality
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Escalation</h3>
              <p className="text-gray-600">
                Complex queries automatically escalate to your team via Slack with full context
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Response Analytics</h3>
              <p className="text-gray-600">
                Track response times, customer satisfaction, and revenue impact in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-12">
            The ROI is immediate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl font-bold mb-2">10x</p>
              <p className="text-green-100">Faster response time</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">70%</p>
              <p className="text-green-100">Queries auto-resolved</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">₹50K+</p>
              <p className="text-green-100">Revenue saved monthly</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-green-100">Message consistency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose the plan that fits your team size
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div 
              className={`rounded-2xl p-8 cursor-pointer transition-all ${
                selectedPlan === 'starter' 
                  ? 'bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-500 scale-105' 
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
              onClick={() => setSelectedPlan('starter')}
            >
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-4xl font-bold mb-4">₹4,999<span className="text-lg font-normal">/month</span></p>
              <p className="text-gray-600 mb-6">For solo entrepreneurs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1 WhatsApp number</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 1,000 messages/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">15 FAQ templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic analytics</span>
                </li>
              </ul>
              <Button 
                className="w-full"
                variant={selectedPlan === 'starter' ? 'default' : 'outline'}
                onClick={(e) => {
                  e.stopPropagation();
                  handleGetStarted();
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Growth Plan */}
            <div 
              className={`rounded-2xl p-8 cursor-pointer transition-all relative ${
                selectedPlan === 'growth' 
                  ? 'bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-500 scale-105' 
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
              onClick={() => setSelectedPlan('growth')}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-4xl font-bold mb-4">₹9,999<span className="text-lg font-normal">/month</span></p>
              <p className="text-gray-600 mb-6">For small teams (4-5 people)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3 WhatsApp numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 5,000 messages/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">50 FAQ templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Slack integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGetStarted();
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Scale Plan */}
            <div 
              className={`rounded-2xl p-8 cursor-pointer transition-all ${
                selectedPlan === 'scale' 
                  ? 'bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-500 scale-105' 
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
              onClick={() => setSelectedPlan('scale')}
            >
              <h3 className="text-2xl font-bold mb-2">Scale</h3>
              <p className="text-4xl font-bold mb-4">₹19,999<span className="text-lg font-normal">/month</span></p>
              <p className="text-gray-600 mb-6">For growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited WhatsApp numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 20,000 messages/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited FAQ templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom integrations</span>
                </li>
              </ul>
              <Button 
                className="w-full"
                variant={selectedPlan === 'scale' ? 'default' : 'outline'}
                onClick={(e) => {
                  e.stopPropagation();
                  handleGetStarted();
                }}
              >
                Contact Sales
              </Button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            All plans include 14-day free trial • No credit card required
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">How does SmartDesk work with WhatsApp Web?</h3>
              <p className="text-gray-600">
                SmartDesk works through a lightweight browser extension that integrates seamlessly with WhatsApp Web. It reads incoming messages and suggests responses in a sidebar without interfering with your WhatsApp interface.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes, absolutely. All your data is encrypted and stored securely. We never share your customer data with third parties, and you maintain complete control over your information.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Can I customize the AI responses?</h3>
              <p className="text-gray-600">
                Yes! SmartDesk learns from your communication style and allows you to choose between different tones (Friendly or Formal). You can also edit any suggested response before sending.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">What happens to complex queries?</h3>
              <p className="text-gray-600">
                For queries that require human attention, SmartDesk automatically escalates them to your team via Slack with full conversation context, ensuring nothing falls through the cracks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Do I need technical knowledge to set it up?</h3>
              <p className="text-gray-600">
                Not at all! SmartDesk is designed for non-technical users. The setup takes just 5 minutes - upload your past chats and documents, and you&apos;re ready to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to 10x your WhatsApp response speed?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join 100+ small merchants already using SmartDesk to delight customers
          </p>
          <Button 
            size="lg"
            onClick={handleGetStarted}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
          >
            Start Your 14-Day Free Trial
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-green-100 mt-4">
            No credit card required • Setup in 5 minutes
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartDeskPage;