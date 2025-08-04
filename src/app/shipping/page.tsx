

const Shipping: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">Shipping & Delivery Policy</h1>

    <p className="mb-4">
      <strong>ConversAI Labs</strong> is a software-as-a-service (SaaS) platform offering AI-powered lead management tools. As our services are entirely digital, no physical shipping is involved.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">1. Service Delivery</h2>
    <p className="mb-4">
      Upon successful registration and payment, access to our platform is granted instantly. You will receive a confirmation email along with login instructions. No physical product will be shipped.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. Account Activation</h2>
    <p className="mb-4">
      Your account will be activated automatically once the payment is confirmed by our payment gateway. If you encounter delays or issues, please contact our support team.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. Subscription Access</h2>
    <p className="mb-4">
      Depending on your selected subscription plan, you will gain access to specific features and service tiers. These remain active for the duration of your subscription cycle.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. Global Access</h2>
    <p className="mb-4">
      Our services are accessible from anywhere in the world with a stable internet connection. However, performance may vary depending on local infrastructure and regulations.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
    <p className="mb-4">
      For any delivery-related concerns or queries regarding account access, please reach out to us at{" "}
      <a href="mailto:contact@conversailabs.com" className="text-blue-600 underline">
        contact@conversailabs.com
      </a>
      {" "}or WhatsApp us at{" "}
      <a href="https://wa.me/918076018082" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        +91 8076 018 082
      </a>.
    </p>

    <p className="mt-6 italic text-sm text-gray-600">Last updated: June 18, 2025</p>
  </div>
);

export default Shipping;
