"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Brain, TrendingUp, Users, BarChart3, Shield, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const CallIQPage = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      title: "AI-Powered Analytics",
      description: "Deep insights from every conversation with sentiment analysis and intent detection"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Performance Metrics",
      description: "Track agent performance, call outcomes, and conversion rates in real-time"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Team Coaching",
      description: "Automated coaching recommendations based on call analysis and best practices"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
      title: "Custom Reports",
      description: "Build custom dashboards and reports tailored to your business needs"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: "Compliance Monitoring",
      description: "Ensure regulatory compliance with automated script adherence checking"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-600" />,
      title: "Real-Time Alerts",
      description: "Instant notifications for important events and escalation triggers"
    }
  ];

  const benefits = [
    "Increase conversion rates by 40%",
    "Reduce training time by 60%",
    "Improve customer satisfaction scores",
    "Identify upsell opportunities automatically",
    "Ensure 100% compliance adherence",
    "Scale quality assurance effortlessly"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Phone className="w-4 h-4" />
              Intelligent Call Analytics Platform
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Transform Every Call into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Actionable Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Call IQ analyzes 100% of your calls using advanced AI to uncover insights, 
              improve agent performance, and drive revenue growth automatically.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/schedule-demo">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started with Call IQ
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-6 text-lg border-2 border-gray-300 hover:border-blue-600 transition-all duration-300">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Call Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to optimize your call operations and boost performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Call IQ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Call IQ goes beyond basic call recording and transcription. 
                Our AI-powered platform delivers actionable insights that drive real business results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                See the Impact
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Call Quality Score</span>
                    <span className="font-bold text-blue-600">+45%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Average Handle Time</span>
                    <span className="font-bold text-green-600">-32%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-bold text-purple-600">+28%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Call Intelligence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies using Call IQ to transform their call operations
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/schedule-demo">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg rounded-lg transition-all duration-300">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallIQPage;