import React from "react";
import { IoClose } from "react-icons/io5";

const TermsAndConditions = ({ onClose }) => {
  return (
    <div className="bg-gray-100 py-10 px-4 relative">
      <div className="w-full max-w-[1200px] mx-auto bg-white border border-gray-200 shadow-md rounded-md p-6 relative">
        {/* CLOSE BUTTON */}
        
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Terms and Conditions – Baoiam Innovations Pvt. Ltd.        </h2>

        {/* <p className="text-[20px] font-semibold mb-2 xl:ml-20">
          Effective Date: <span className="text-black"> 15 July 2025</span>
        </p>
        <p className="text-[20px] font-semibold mb-10 xl:ml-20">
          Company Name:{" "}
          <span className="text-black">
            {" "}
            Baoiam Innovations Pvt. Ltd.
          </span>
        </p> */}
        <hr></hr>

        <div className="space-y-6 text-base overflow-y-auto no-scrollbar pr-4 mx-auto max-w-[1000px] mt-10">
          <section>
            <h3 className="font-bold text-[18px]">
              Acceptance of Terms
            </h3>
            <p className="text-[16px]">
              By accessing or using Baoiam’s services, website, or enrolling in
              any of our courses, users agree to be legally bound by these
              terms...
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Eligibility</h3>
            <p className="text-[16px]">
              You must be 18 years or older to register for any course...
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">User Obligations</h3>
            <ul className="list-disc text-[16px] list-inside pl-2 mt-1">
              <li>Maintain confidentiality of login credentials</li>
              <li>Not share or redistribute course materials</li>
              <li>Respect other participants, instructors, and Baoiam staff</li>
              <li>
                Not misuse the platform for unlawful or prohibited activities
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Enrollment & Fees</h3>
            <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
              <li>
                Course fees must be paid as per the selected plan (e.g., upfront
                or Pay After Placement)
              </li>
              <li>
                In case of promotional offers or scholarships, eligibility
                criteria must be fulfilled
              </li>
              <li>Respect other participants, instructors, and Baoiam staff</li>
              <li>
                Baoiam reserves the right to cancel or modify course schedules
                or mentors in unforeseen situations
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Refund Policy</h3>
            <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
              <li>
                No refund after 2 days of course start unless otherwise
                specified
              </li>
              <li>Refunds (if any) are processed within 7–14 working days</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">
              Intellectual Property
            </h3>
            <p className="text-[16px]">
              All content, course materials, visuals, and software on Baoiam’s
              platform are protected by copyright...
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Code of Conduct</h3>
            <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
              Users must
              <li>
                No refund after 2 days of course start unless otherwise
                specified
              </li>
              <li>Refunds (if any) are processed within 7–14 working days</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-[18px]">
              7. Placement &Carrer Support
            </h3>
            <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
              <li>Placement assistance is provided but not guaranteed</li>
              <li>
                Success in placements depends on student effort, performance,
                and participation
              </li>
              <li>
                Baoiam may connect users with hiring partners but final hiring
                is at employer discretion.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">
              Limitation of Liability
            </h3>
            <p className="text-[16px]">
              Baoiam is not liable for any indirect damages, loss of
              opportunity, or technical failure of platforms or third-party
              tools. We strive for uninterrupted services but cannot guarantee
              100% uptime.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Code of Conduct</h3>
            <p className="text-[16px]">
              Baoiam may link to or integrate tools such as Zoom, Google Meet,
              or third-party payment gateways. Use of these services is subject
              to their individual terms and privacy policies.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Termination</h3>
            <p className="text-[16px]">
              Baoiam reserves the right to suspend or terminate your account for
              breach of terms, misuse, or inactivity without prior notice.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Changes to Terms</h3>
            <p className="text-[16px]">
              We may revise these terms from time to time. Continued use of the
              services constitutes acceptance of the latest version.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Governing Law</h3>
            <p className="text-[16px]">
              These terms shall be governed by and interpreted in accordance
              with the laws of India. Disputes, if any, shall be subject to the
              jurisdiction of courts in Noida, India.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[18px]">Contact Us</h3>
            <p className="text-[16px]">For any questions or concerns:</p>
            <ul className="list-none mt-2 space-y-1 text-[16px]">
              <li>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@baoiam.com"
                  className="text-blue-600 underline"
                >
                  support@baoiam.com
                </a>
              </li>
              <li>
                🏢 <strong>Address:</strong> Noida, India
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
