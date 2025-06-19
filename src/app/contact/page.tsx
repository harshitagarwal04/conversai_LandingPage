import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4">
        We'd love to hear from you! For questions, support, or business inquiries, feel free to reach out to us using the details below.
      </p>

      <div className="space-y-4 text-lg">
        <div>
          <strong>Email:</strong>{" "}
          <a href="mailto:connect@conversailabs.com" className="text-blue-600 underline">
            connect@conversailabs.com
          </a>
        </div>

        <div>
          <strong>Phone:</strong> +91-8076018082
        </div>

        <div>
          <strong>Address:</strong> <br />
          ConversAI Labs, <br />
          Sector 62, Noida, <br />
          Uttar Pradesh, India
        </div>

        <div>
          <strong>Support Hours:</strong> <br />
          Monday – Friday, 10:00 AM – 6:00 PM IST
        </div>
      </div>

      <p className="mt-8 text-sm text-gray-500 italic">
        We're committed to responding to all queries within 24–48 hours.
      </p>
    </div>
  );
};

export default Contact;
