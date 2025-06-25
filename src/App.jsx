export default function ConnectiveShiftLandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Hero Section with Background */}
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80")' }}>
        <div className="absolute bottom-10 animate-bounce text-white text-xl">↓</div>
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-10 max-w-5xl mx-4 md:flex md:space-x-10">
          {/* Left Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <img src="/daniel_profile_circular.png" alt="Daniel Walter" className="mx-auto md:mx-0 rounded-full w-32 h-32 mb-4" />
            <h1 className="text-4xl font-bold">Connective Shift</h1>
            <p className="mt-4 text-lg text-gray-700">Helping organisations and individuals create clarity, alignment, and lasting change.</p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="mailto:your-email@example.com" className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">Email</a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="px-4 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white">LinkedIn</a>
            </div>
          </div>

          {/* Right Column - Scrollable */}
          <div className="md:w-1/2 max-h-[70vh] overflow-y-auto pr-2">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-3">About Me</h2>
              <p className="text-gray-700 text-sm">
                I’m Daniel Walter, an experienced executive and former top-tier strategy consultant (BCG).
                Over the past decade, I’ve helped organisations from global insurers to retail giants navigate digital transformation,
                product strategy, and customer-centred growth. At Woolworths, I led group-wide strategy across Digital, eCommerce,
                Loyalty and General Merchandise — shaping the future of Australia’s largest retail business.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-3">Brand Positioning</h2>
              <p className="text-gray-700 text-sm">
                I help organisations and individuals enhance their impact and realise their potential through a mix of strategic consulting,
                executive coaching, and collaborative interventions. From data-rich reviews and coaching engagements to large-scale workshops
                and offsites, my work blends analytical rigour with human insight to drive clarity, alignment, and lasting change.
                <br /><br />
                As a facilitator of change, I foster environments of trust, objectivity, and openness to create moments of collective
                sense-making, enabling teams to co-create transformative solutions that benefit both their people and the wider world.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-3">What I Offer</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                <li><strong>Strategy & Transformation:</strong> Full-potential strategy, product & pricing, operating model design</li>
                <li><strong>Facilitation & Offsites:</strong> High-impact workshops, alignment sessions, stakeholder processes</li>
                <li><strong>Executive Coaching:</strong> 1:1 and team coaching to deepen impact and unlock leadership potential</li>
                <li><strong>Digital & Retail Expertise:</strong> eCommerce, loyalty ecosystems, subscription models, retail reinvention</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Let’s Connect</h2>
              <p className="text-gray-700 text-sm mb-4">
                Ready to work together? Let’s talk about how Connective Shift can support your goals.
              </p>
              <a href="mailto:your-email@example.com" className="inline-block px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">Get in Touch</a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
