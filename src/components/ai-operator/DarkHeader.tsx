"use client";

import React, { useState } from "react";
import { MessageSquare, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToElement } from "@/utils/scrollToElement";
import { Button } from "@/components/ui/button";

const industries = [
  "Healthcare & Wellness",
  "Education",
  "Home Services",
  "Finance & Legal",
  "Real Estate & Housing",
  "Travel & Hospitality",
  "Retail",
  "Technology",
  "Fitness & Wellness",
  "Public Services",
  "Automotive & Transport",
];

const DarkHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileAISolutionsOpen, setMobileAISolutionsOpen] = useState(false);
  const pathname = usePathname();

  const handleConnectWithUs = () => {
    window.open("https://wa.me/918076018082", "_blank");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (pathname === "/" || pathname === "/smartdesk") {
      e.preventDefault();
      scrollToElement(sectionId);
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold !text-white leading-tight">
                ConversAI Labs
              </span>
              <span className="text-xs text-gray-400 -mt-1">
                AI-Powered Conversations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href={pathname === "/smartdesk" ? "#features" : "/#features"}
              onClick={(e) => handleNavClick(e, "features")}
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group px-3 py-2 rounded-md hover:bg-blue-950/50"
              style={{ cursor: 'pointer' }}
            >
              Features
              <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>


            {/* Industries Dropdown - Hidden on SmartDesk page */}
            {pathname !== "/smartdesk" && (
              <div className="relative group">
                <div 
                  className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium px-3 py-2 rounded-md hover:bg-blue-950/50"
                  style={{ cursor: 'pointer' }}
                >
                  <span>Industries</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </div>

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gray-900 rounded-lg shadow-2xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-40">
                  <div className="py-3">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-800">
                      Industries We Serve
                    </div>
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        href={`/industries/${industry
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace("&", "and")}`}
                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-950/50 hover:to-purple-950/50 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-500 transition-all"
                      >
                        {industry}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <Link
              href="/smartdesk"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group px-3 py-2 rounded-md hover:bg-green-950/50"
              style={{ cursor: 'pointer' }}
            >
              SmartDesk
              <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            <Link
              href={pathname === "/smartdesk" ? "#pricing" : "/pricing"}
              onClick={pathname === "/smartdesk" ? (e) => handleNavClick(e, "pricing") : undefined}
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group px-3 py-2 rounded-md hover:bg-blue-950/50"
              style={{ cursor: 'pointer' }}
            >
              Pricing
              <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            <Link
              href="/ai-crm"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium relative group px-3 py-2 rounded-md hover:bg-purple-950/50"
              style={{ cursor: 'pointer' }}
            >
              AI CRM
              <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            {/* AI Solutions Dropdown */}
            <div className="relative group">
              <div 
                className="flex items-center space-x-1 text-gray-300 hover:text-green-400 transition-all duration-300 font-medium px-3 py-2 rounded-md hover:bg-green-950/50"
                style={{ cursor: 'pointer' }}
              >
                <span>AI Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </div>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-900 rounded-lg shadow-2xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-40">
                <div className="py-3">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-800">
                    Our AI Products
                  </div>
                  <Link
                    href="/lead-responder"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-green-950/50 hover:to-blue-950/50 hover:text-green-400 border-l-2 border-transparent hover:border-green-500 transition-all"
                  >
                    <div className="font-medium">LeadResponder</div>
                    <div className="text-xs text-gray-500 mt-1">24/7 WhatsApp AI for Estate Agents</div>
                  </Link>
                  <Link
                    href="/ai-operator"
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-blue-950/50 hover:to-purple-950/50 hover:text-blue-400 border-l-2 border-transparent hover:border-blue-500 transition-all"
                  >
                    <div className="font-medium">AI Operator</div>
                    <div className="text-xs text-gray-500 mt-1">Frontline AI for Real Estate</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium relative group px-3 py-2 rounded-md hover:bg-blue-950/50"
              style={{ cursor: 'pointer' }}
            >
              About
              <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            <Button
              onClick={() => window.open('/schedule-demo', '_self')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 !text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ cursor: 'pointer' }}
            >
              Schedule Demo
            </Button>
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="!text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-950 border-t border-gray-800 shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-2 text-sm">
            <Link
              href={pathname === "/smartdesk" ? "#features" : "/#features"}
              onClick={(e) => handleNavClick(e, "features")}
              className="text-gray-200 hover:text-blue-400"
            >
              Features
            </Link>
            <Link
              href="/smartdesk"
              className="text-gray-200 hover:text-green-400"
              onClick={() => setMobileOpen(false)}
            >
              SmartDesk
            </Link>
            <Link
              href={pathname === "/smartdesk" ? "#pricing" : "/pricing"}
              onClick={pathname === "/smartdesk" ? (e) => handleNavClick(e, "pricing") : () => setMobileOpen(false)}
              className="text-gray-200 hover:text-blue-400"
            >
              Pricing
            </Link>
            <Link
              href="/ai-crm"
              className="text-gray-200 hover:text-purple-400"
              onClick={() => setMobileOpen(false)}
            >
              AI CRM
            </Link>

            {/* AI Solutions Expandable in Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-200 font-medium hover:text-green-400"
                onClick={() => setMobileAISolutionsOpen(!mobileAISolutionsOpen)}
              >
                <span>AI Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    mobileAISolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAISolutionsOpen && (
                <ul className="mt-2 pl-4 border-l border-gray-700 space-y-2">
                  <li>
                    <Link
                      href="/leadresponder"
                      className="block px-2 py-1 text-sm text-gray-400 
                        hover:bg-green-950/50 hover:text-green-400 
                        active:bg-green-900/50 active:text-green-300 
                        focus:bg-green-950/50 focus:text-green-400 
                        border-l-2 border-transparent 
                        hover:border-green-500 active:border-green-400 
                        transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="font-medium">LeadResponder</div>
                      <div className="text-xs text-gray-500">24/7 WhatsApp AI</div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ai-operator"
                      className="block px-2 py-1 text-sm text-gray-400 
                        hover:bg-blue-950/50 hover:text-blue-400 
                        active:bg-blue-900/50 active:text-blue-300 
                        focus:bg-blue-950/50 focus:text-blue-400 
                        border-l-2 border-transparent 
                        hover:border-blue-500 active:border-blue-400 
                        transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="font-medium">AI Operator</div>
                      <div className="text-xs text-gray-500">Frontline AI</div>
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-200 hover:text-blue-400"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            {/* Expandable Industries in Mobile - Hidden on SmartDesk page */}
            {pathname !== "/smartdesk" && (
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-200 font-medium hover:text-blue-400"
                  onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      mobileIndustryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileIndustryOpen && (
                  <ul className="mt-2 pl-4 border-l border-gray-700 space-y-2">
                    {industries.map((industry, index) => (
                      <li key={index}>
                        <Link
                          href={`/industries/${industry
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace("&", "and")}`}
                          className="block px-2 py-1 text-sm text-gray-400 
      hover:bg-blue-950/50 hover:text-blue-400 
      active:bg-blue-900/50 active:text-blue-300 
      focus:bg-blue-950/50 focus:text-blue-400 
      border-l-2 border-transparent 
      hover:border-blue-500 active:border-blue-400 
      transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          {industry}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <Button
              onClick={handleConnectWithUs}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 !text-white"
            >
              Connect with Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default DarkHeader;