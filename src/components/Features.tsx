import React from 'react';
import { Phone, MessageSquare, Users, FileText, Check } from 'lucide-react';

const Features = () => {
  const featuresSectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Add id to the section for navigation
    if (featuresSectionRef.current) {
      featuresSectionRef.current.id = 'features';
    }
  }, []);
  const features = [
    {
      icon: Phone,
      title: "Conversational Voice AI",
      items: [
        "Outbound/inbound calling, fully automated by AI agent",
        "Understands spoken answers, adapts in real time",
        "Multilingual, accent-agnostic, sentiment detection",
        "Logs calls, transcribes & summarizes key points",
        "Auto-escalation for high-intent leads"
      ]
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Messaging",
      items: [
        "AI-driven conversations on WhatsApp, Email, SMS, and Web Chat",
        "Handles full qualification flows—asks, answers, nudges, schedules",
        "Personalizes follow-ups based on context & history",
        "Not just templates—true, two-way, dynamic chat"
      ]
    },
    {
      icon: Users,
      title: "LLM-Powered Lead Scoring & Data Enrichment",
      items: [
        "Analyzes all calls, chats, and emails to extract signals",
        "Automatically segments leads: hot, warm, cold",
        "Parses unstructured conversation to structured CRM fields",
        "Pulls missing data from emails, LinkedIn, company sites"
      ]
    },
    {
      icon: FileText,
      title: "CRM Sync, Smart Summarization & Analytics",
      items: [
        "Summarizes every call, chat, and email automatically",
        "Pushes all data, notes, and next steps to your CRM",
        "Detects & flags incomplete data, nudges your team for gaps",
        "Stores, indexes, and makes all transcripts searchable"
      ]
    }
  ];

  return (
    <div ref={featuresSectionRef} className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Deep Dive: Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered tools that transform how you manage leads
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
