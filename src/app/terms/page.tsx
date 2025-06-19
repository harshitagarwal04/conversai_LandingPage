import React from "react";

const Terms: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

    <p className="mb-4">
      Welcome to <strong>ConversAI Labs</strong>. By accessing or using our AI-first lead management platform, you agree to be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Services</h2>
    <p className="mb-4">
      Our platform helps businesses automate lead qualification, engagement, and conversion across various communication channels. You agree to use our services only for lawful purposes and in accordance with all applicable laws and regulations.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. Account Registration</h2>
    <p className="mb-4">
      You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate and up-to-date information during registration. We reserve the right to suspend or terminate accounts for any misuse or violation of these terms.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. Payments & Subscriptions</h2>
    <p className="mb-4">
      Our services are offered on a subscription basis. All payments are processed via a secure third-party gateway. By subscribing, you agree to pay the applicable fees as per your selected plan. Failure to pay may result in suspension of service.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
    <p className="mb-4">
      All content, branding, and software associated with ConversAI Labs are the intellectual property of our company. You may not copy, reproduce, or distribute any part of our platform without prior written permission.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Collection & Privacy</h2>
    <p className="mb-4">
      We collect and process personal data, including email addresses and phone numbers, in accordance with our{" "}
      <a href="/policy" className="text-blue-600 underline">Privacy Policy</a>. By using our services, you consent to this data collection.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
    <p className="mb-4">
      We reserve the right to terminate your access to our platform for any violation of these terms, including unauthorized use or fraudulent activity. Upon termination, any rights granted to you under these terms will cease immediately.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
    <p className="mb-4">
      ConversAI Labs shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the platform. We do not guarantee uninterrupted access to our services at all times.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
    <p className="mb-4">
      We may modify these terms at any time. Any changes will be posted on this page with an updated effective date. Continued use of the platform after such changes implies acceptance of the revised terms.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
    <p className="mb-4">
      If you have any questions about these Terms & Conditions, please email us at{" "}
      <a href="mailto:connect@conversailabs.com" className="text-blue-600 underline">
        connect@conversailabs.com
      </a>.
    </p>

    <p className="mt-6 italic text-sm text-gray-600">Last updated: June 18, 2025</p>
  </div>
);

export default Terms;
