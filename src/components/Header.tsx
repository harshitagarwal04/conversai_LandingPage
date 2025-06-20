"use client";
import React from 'react';
import { MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/utils/scrollToElement';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const handleConnectWithUs = () => {
    window.open('https://wa.me/919953053281', '_blank');
  };
  
  const pathname = usePathname();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      scrollToElement(sectionId);
    }
  };

  const industries = [
    'Healthcare & Wellness',
    'Education',
    'Home Services',
    'Finance & Legal',
    'Real Estate & Housing',
    'Travel & Hospitality',
    'Retail',
    'Technology',
    // 'Events & Entertainment',
    // 'Social Impact',
    'Fitness & Wellness',
    'Public Services',
    'Automotive & Transport'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="relative">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 leading-tight">ConversAI Labs</span>
              <span className="text-xs text-gray-500 -mt-1">AI-Powered Conversations</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/#features"
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <Link 
              href="/#how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            
            {/* Industries Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-3">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    Industries We Serve
                  </div>
                  {industries.map((industry, index) => (
                    <Link
                      key={index}
                      href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 border-l-2 border-transparent hover:border-blue-400"
                    >
                      <div className="flex items-center justify-between">
                        <span>{industry}</span>
                        <span className="text-xs text-gray-400">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              href="/#why-conversai" 
              onClick={(e) => handleNavClick(e, 'why-conversai')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Why ConversAI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            
            <Button 
              onClick={handleConnectWithUs}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Connect with Us
            </Button>
          </nav>
          
          {/* Tablet Navigation (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-6">
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-sm">
                <span>Menu</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>
              
              {/* Tablet Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link 
                    href="/#features"
                    onClick={(e) => handleNavClick(e, 'features')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Features
                  </Link>
                  <Link 
                    href="/#how-it-works"
                    onClick={(e) => handleNavClick(e, 'how-it-works')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/#why-conversai" 
                    onClick={(e) => handleNavClick(e, 'why-conversai')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Why ConversAI
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <div className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider">Industries</div>
                    {industries.slice(0, 6).map((industry, index) => (
                      <Link
                        key={index}
                        href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {industry}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleConnectWithUs}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Connect
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-3">
            <Button 
              onClick={handleConnectWithUs}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs px-3 py-2"
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;