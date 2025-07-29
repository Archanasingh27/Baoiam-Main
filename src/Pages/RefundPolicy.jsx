import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 relative">
  <div className="w-full max-w-[1200px] mx-auto bg-white border border-gray-200 shadow-md rounded-md p-6 relative">
    <h2 className="text-3xl font-bold text-center mb-10 text-black">
      Baoiam Payments, Refunds, and Rescheduling Policy 
    </h2>
    <hr />

    <div className="space-y-6 text-base overflow-y-auto no-scrollbar pr-4 mx-auto max-w-[1000px] mt-10">
      <section>
        <p className="text-[16px]">
          Baoiam is committed to delivering accessible, affordable, and high-quality online education. 
          By enrolling in any of our programs, you agree to the following terms and conditions that govern 
          payments, refunds, and course rescheduling.
        </p>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Course Categories</h3>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>
            <strong>Kickstarter Bootcamps</strong><br />
            Short-term, intensive programs (1 to 3 months)<br />
            Example: Introduction to Digital Marketing, Basic Data Analysis
          </li>
          <li className="mt-2">
            <strong>Professional Certification Programs (Pro Courses)</strong><br />
            Long-term structured programs (6 to 12 months)<br />
            Example: Data Science Mastery, Software Development Full Stack, Digital Marketing with AI
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Payment Terms</h3>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>All course fees must be paid in full before access unless EMI/installment is selected.</li>
          <li>Payments are processed via authorized third-party gateways officially provided by Baoiam.</li>
          <li>If token amount is paid, full payment must be completed within 7 days or token is forfeited.</li>
          <li>Taxes like GST will be applicable on course fees.</li>
          <li>Offers/discounts are valid only if directly communicated by Baoiam.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Refund Policy</h3>

        <p className="text-[16px] font-semibold">Kickstarter Bootcamps (Fee ≤ ₹999)</p>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>All payments are non-refundable.</li>
          <li>Token amounts are non-refundable and non-adjustable.</li>
          <li>Rescheduling allowed only before course start or within 3 days of payment.</li>
        </ul>

        <p className="text-[16px] font-semibold mt-4">Pro Courses (6 to 12 months)</p>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>Refund request must be made within 2 calendar days of payment.</li>
          <li>No refunds after the 2-day window, regardless of attendance.</li>
          <li>Approved refunds processed in 30–45 working days to original method.</li>
          <li>Access to course will be revoked post refund.</li>
          <li>No refunds for dissatisfaction or non-usage.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Rescheduling & Transfer</h3>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>Rescheduling allowed before course starts or if less than 10% completed.</li>
          <li>Course pause up to 1 month allowed in special cases (e.g. health).</li>
          <li>Seat transfer allowed to friend/family; personal transfer issues not Baoiam's responsibility.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Delivery Issues (Pro Courses Only)</h3>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>No onboarding or access despite written support communication.</li>
          <li>Recordings unavailable for 7+ days after escalation.</li>
          <li>Persistent platform issues despite multiple tickets.</li>
          <li><strong>Note:</strong> Non-response from learner doesn’t qualify as delivery failure.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Dispute Redressal</h3>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>Raise refund/rescheduling concerns to <a href="mailto:support@baoiam.com" className="text-blue-600 underline">support@baoiam.com</a>.</li>
          <li>If unresolved, escalate to <a href="mailto:grievance@baoiam.com" className="text-blue-600 underline">grievance@baoiam.com</a>.</li>
          <li>Committee’s decision will be final and binding.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Additional Clauses</h3>
        <ul className="list-disc list-inside text-[16px] pl-2 mt-1">
          <li>Refunds void in case of fraud/misrepresentation.</li>
          <li>EMI timelines continue even if course is paused.</li>
          <li>Offers from unauthorized vendors are not valid.</li>
          <li>Partial/advance payments are non-refundable if balance not paid within 7 days.</li>
        </ul>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Support Contact</h3>
        <p className="text-[16px]">For any concerns or complaints, contact us at:</p>
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
        </ul>
        <p className="mt-2 text-[16px]">
          Note: All refund, transfer, or rescheduling requests will be evaluated on a case-by-case basis. Final decision lies with Baoiam's internal Refund & Reschedule Committee.
        </p>
      </section>

      <section>
        <h3 className="font-bold text-[18px]">Policy Updates</h3>
        <p className="text-[16px]">
          Baoiam reserves the right to modify this policy at any time without prior notice. Please review it periodically for updates.
        </p>
      </section>
    </div>
  </div>
</div>

  )
}

export default RefundPolicy