"use client";
import React from 'react';
import { MessageSquare } from 'lucide-react';
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

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ConversAI Labs</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#features" 
              onClick={(e) => handleNavClick(e, 'features')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/#how-it-works" 
              onClick={(e) => handleNavClick(e, 'how-it-works')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#why-conversai" 
              onClick={(e) => handleNavClick(e, 'why-conversai')} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Why ConversAI
            </Link>
            <Button 
              onClick={handleConnectWithUs}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Connect with Us
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button 
              onClick={handleConnectWithUs}
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Connect with Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
