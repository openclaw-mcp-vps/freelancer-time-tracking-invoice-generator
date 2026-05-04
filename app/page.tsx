export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track Time. Verify Work.<br />
          <span className="text-[#58a6ff]">Invoice Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Log hours across projects with screenshot verification, then let TimeTrack Pro generate branded invoices with full time breakdowns and send them straight to your clients.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Free Trial — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⏱</div>
            <h3 className="text-white font-semibold mb-2">One-Click Time Tracking</h3>
            <p className="text-[#8b949e] text-sm">Start and stop timers per project. Every session is logged with timestamps and optional screenshot proof.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📸</div>
            <h3 className="text-white font-semibold mb-2">Screenshot Verification</h3>
            <p className="text-[#8b949e] text-sm">Capture periodic screenshots during work sessions to provide transparent proof of work to clients.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🧾</div>
            <h3 className="text-white font-semibold mb-2">Auto-Generated Invoices</h3>
            <p className="text-[#8b949e] text-sm">Branded PDF invoices with itemized time breakdowns are generated and emailed to clients automatically.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to bill clients professionally</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited projects & clients",
              "Screenshot verification",
              "Branded PDF invoices",
              "Auto email delivery",
              "Time reports & exports",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does screenshot verification work?</h3>
            <p className="text-[#8b949e] text-sm">While a timer is running, the app captures periodic screenshots of your screen. These are stored securely and can be shared with clients as proof of work alongside the invoice.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I customize the invoice branding?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can upload your logo, set your business name, address, and payment terms. Every invoice sent to clients will reflect your brand.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. You get a 7-day free trial with full access to all features. No credit card required to start.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} TimeTrack Pro. All rights reserved.
      </footer>
    </main>
  );
}
