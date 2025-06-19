import React from "react";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "API", "Security"],
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Documentation", "Help Center", "Webinars"],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy Policy", path: "/policy" },
        { name: "Terms and Conditions", path: "/terms" },
        { name: "Cancellation & Refund", path: "/refund" },
        { name: "Shipping & Delivery", path: "/shipping" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ConversAI Labs</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-First Lead Management Platform. Qualify, nurture, and convert across every channel.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Yt</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {typeof section.links[0] === "string"
                  ? (section.links as string[]).map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))
                  : (section.links as { name: string; path: string }[]).map((linkObj, i) => (
                      <li key={i}>
                        <Link
                          href={linkObj.path}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {linkObj.name}
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 ConversAI Labs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
              Cancellation & Refund
            </Link>
            <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors">
              Shipping & Delivery
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
