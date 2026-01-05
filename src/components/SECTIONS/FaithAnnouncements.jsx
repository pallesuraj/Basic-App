"use client";

export default function FaithAnnouncements() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 mb-3">
            Announcements & Outreach
          </p>

          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-600 mb-4">
            Faith-aligned messages, shared with care
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto">
            We provide a respectful space for churches, ministries, and faith-based
            organizations to share announcements, events, and services with
            trusted Christian communities. All submissions are reviewed to
            reflect Christian values, safety, and community well-being.
          </p>
        </div>

        {/* Step indicator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <Step active label="Details added" sub="Contact & organization" />
          <Step label="Choose announcement plan" sub="Select what fits your outreach" />
          <Step label="Review & submit" sub="Policy confirmed, sent for review" />
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Column 1 – Request details */}
          <Card>
            <h3 className="font-semibold text-slate-900 mb-1">
              1. Request details
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Example of how your filled request will look before submission.
            </p>

            <Field label="Your name" value="Sarah Thomas" />
            <Field
              label="Organization / Ministry / Business"
              value="Grace Community Church, Bangalore"
            />
            <Field label="Email address" value="sarah.thomas@example.com" />

            <div className="mb-4">
              <label className="text-sm text-slate-500 block mb-2">
                Type of announcement
              </label>
              <div className="flex gap-2">
                <Chip active>Church event or gathering</Chip>
                <Chip>Ministry initiative</Chip>
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-500 block mb-2">
                Message details
              </label>
              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700">
                Evening prayer service for families and elders, open to nearby
                church communities.
              </div>
            </div>
          </Card>

          {/* Column 2 – Plans */}
          <Card>
            <h3 className="font-semibold text-slate-900 mb-1">
              2. Select a plan
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Choose the option that best matches your announcement.
            </p>

            <Plan
              title="Starter (Free)"
              desc="Limited early-access placement"
              price="₹0 / $0"
            />

            <Plan
              title="Community Announcement"
              desc="Short, gentle community notice"
              price="₹1,500 – ₹3,000 / $20 – $40"
              active
            />

            <Plan
              title="Ministry / Church Event Highlight"
              desc="For conferences & initiatives"
              price="₹5,000 – ₹8,000 / $60 – $100"
            />

            <Plan
              title="Faith-based Business / Service"
              desc="Carefully limited placement"
              price="₹10,000 – ₹15,000 / $120 – $180"
            />
          </Card>

          {/* Column 3 – Policy */}
          <Card>
            <h3 className="font-semibold text-slate-900 mb-4">
              3. Confirm policy & submit
            </h3>

            <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 mb-4">
              <p className="font-medium mb-2">Legal-safe announcement policy</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Serve Christian communities</li>
                <li>Be respectful, truthful, and value-aligned</li>
                <li>No political or misleading content</li>
                <li>All placements subject to moderation</li>
              </ul>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600 mb-6">
              <input type="checkbox" defaultChecked />
              I have read and agree to the legal-safe announcement policy.
            </label>

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Submit for review
            </button>

            <p className="text-xs text-slate-400 mt-4">
              Every request is carefully reviewed. Submission does not guarantee
              approval.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ------------------ helpers ------------------ */

function Step({ label, sub, active }) {
  return (
    <div
      className={`rounded-xl p-4 text-sm ${
        active ? "bg-green-50 text-green-700" : "bg-slate-50 text-slate-500"
      }`}
    >
      <p className="font-medium">{label}</p>
      <p className="text-xs">{sub}</p>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      {children}
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="mb-4">
      <label className="text-sm text-slate-500 block mb-1">{label}</label>
      <div className="bg-slate-50 rounded-xl px-4 py-2 text-sm text-slate-700">
        {value}
      </div>
    </div>
  );
}

function Chip({ children, active }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm cursor-default ${
        active
          ? "bg-blue-600 text-white"
          : "bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}

function Plan({ title, desc, price, active }) {
  return (
    <div
      className={`rounded-2xl p-4 mb-3 border ${
        active
          ? "border-blue-500 bg-blue-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <p className="font-medium text-slate-900">{title}</p>
      <p className="text-xs text-slate-500 mb-2">{desc}</p>
      <p className="text-sm font-semibold text-blue-600">{price}</p>
    </div>
  );
}
