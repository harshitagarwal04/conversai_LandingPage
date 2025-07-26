"use client";

const RefundPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>

    <p className="mb-4">
      At <strong>ConversAI Labs</strong>, we aim to ensure complete satisfaction with our AI-first lead management platform. This policy outlines our procedures regarding cancellations, refunds, and related conditions.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">1. Subscription Cancellations</h2>
    <p className="mb-4">
      You may cancel your subscription at any time from your account dashboard. Once canceled, your subscription will remain active until the end of the current billing cycle. No further charges will be made after cancellation.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. Refund Eligibility</h2>
    <p className="mb-4">
      We offer a full refund within <strong>7 days</strong> of the initial purchase if you are unsatisfied with our service. To be eligible:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>You must request the refund within 7 calendar days of your subscription start.</li>
      <li>You must not have excessively used the platform (e.g., automated abuse or mass lead exports).</li>
      <li>Refunds are only applicable to the initial payment — renewals are non-refundable.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. Non-Refundable Situations</h2>
    <p className="mb-4">
      Refunds will not be issued under the following conditions:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Requests made after 7 days of purchase.</li>
      <li>Violation of our terms of service or misuse of the platform.</li>
      <li>Customized enterprise plans, unless otherwise agreed in writing.</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. How to Request a Refund</h2>
    <p className="mb-4">
      To initiate a refund, please contact us at{" "}
      <a href="mailto:connect@conversailabs.com" className="text-blue-600 underline">
        connect@conversailabs.com
      </a>
      {" "}or WhatsApp us at{" "}
      <a href="https://wa.me/918076018082" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        +91 8076 018 082
      </a>{" "}
      with your registered email and payment details. We will review your request and respond within 3-5 business days.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">5. Payment Gateway</h2>
    <p className="mb-4">
      All payments and refunds are processed securely via our third-party payment gateway. Refunds will be credited back to your original payment method and may take 7-10 business days to reflect.
    </p>

    <p className="mt-6 italic text-sm text-gray-600">Last updated: June 18, 2025</p>
  </div>
);

export default RefundPolicy;
