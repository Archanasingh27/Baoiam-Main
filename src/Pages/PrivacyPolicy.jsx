import React from 'react';
import { IoClose } from "react-icons/io5";

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className=" bg-gray-100 py-10 px-4 relative">
      <div className="w-full max-w-[1200px] mx-auto bg-white border border-gray-200 shadow-md rounded-md p-6 relative">

        

        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-center mb-10 text-black">
          Privacy Policy – Baoiam Innovations Pvt. Ltd.
        </h2>
        <hr></hr> 

        
        {/* Scrollable section with hidden scrollbar */}
      
     <div className="space-y-6 text-base no-scrollbar pr-4 mx-auto max-w-[1000px] mt-10">
          <section>
            <h3 className="font-bold text-xl">Introduction</h3>
            <p>
              Baoiam respects your privacy and is committed to protecting your personal data.
              This policy explains how we collect, use, store, and disclose information when you:
            </p>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Visit baoiam.com</li>
              <li>Register or enroll in courses, webinars, or newsletters</li>
              <li>Interact with us via forms, chat, or communication channels</li>
            </ul>
            <p className="mt-2">
              By accessing our services, you consent to the practices described here.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-xl"> What We Collect</h3>
            <p className="font-semibold">Non-Personal Data:</p>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Device info, browser type, IP address, usage analytics</li>
            </ul>
            <p className="font-bold mt-3">Personal Data:</p>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Name, email, phone number, educational/professional details</li>
              <li>Course preferences, payment info (via secure partners)</li>
            </ul>
            <p className="mt-2">Optional fields are not mandatory.</p>
          </section>

          <section>
            <h3 className="font-bold text-xl">How We Use It</h3>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Process registrations, payments, and course access</li>
              <li>Send program updates, support messages, offers</li>
              <li>Improve services and user experience</li>
              <li>Monitor performance anonymously</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-xl">Cookies & Tracking</h3>
            <p>We use cookies and similar tech to:</p>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Remember preferences and sessions</li>
              <li>Analyze traffic anonymously</li>
            </ul>
            <p className="mt-2">Disabling cookies may limit some site functions.</p>
          </section>

          <section>
            <h3 className="font-bold text-xl">Data Sharing</h3>
            <p>We may share personal data with:</p>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Payment processors (Stripe, Razorpay)</li>
              <li>Email/marketing tools (Mailchimp, Google Analytics)</li>
              <li>Support tools (CRM, chat)</li>
            </ul>
            <p className="mt-2">
              Data is used only to enable services, never sold or resold.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-xl">Security Measures</h3>
            <p>
              We use SSL, secure databases, and access restrictions.
              Users should follow strong password practices.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-xl">Your Rights</h3>
            <ul className="list-disc list-outside pl-6 mt-1">
              <li>Access, correct, or delete your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-2">
              Contact us at&nbsp;
              <a href="mailto:privacy@baoiam.in" className="text-blue-600 underline">
                privacy@baoiam.in
              </a>
            </p>
          </section>

          <section>
            <h3 className="font-bold text-xl">Legal Compliance</h3>
            <p>
              We may share data to comply with legal obligations.
              In the event of acquisition or merger, data may be transferred with prior notice.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-xl">Policy Updates</h3>
            <p>
              This policy may be updated periodically. Major changes will be communicated via email or platform notifications.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-xl">Contact Us</h3>
            <p>For questions:</p>
            <ul className="mt-2">
              <li>
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:support@baoiam.com" className="text-blue-600 underline">
                  support@baoiam.com
                </a>
              </li>
              <li>🏢 <strong>Address:</strong> Noida, India</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;