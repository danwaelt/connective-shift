
export default function ConnectiveShiftLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Connective Shift</h1>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          Helping organisations and individuals create clarity, alignment, and lasting change. Strategy. Facilitation. Coaching.
        </p>
      </header>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-md leading-relaxed">
            I’m Daniel Walter, an experienced executive and former top-tier strategy consultant (BCG).
            Over the past decade, I’ve helped organisations from global insurers to retail giants navigate digital transformation,
            product strategy, and customer-centred growth. At Woolworths, I led group-wide strategy across Digital, eCommerce,
            Loyalty and General Merchandise — shaping the future of Australia’s largest retail business.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Brand Positioning</h2>
          <p className="text-md leading-relaxed">
            I help organisations and individuals enhance their impact and realise their potential through a mix of strategic consulting,
            executive coaching, and collaborative interventions. From data-rich reviews and coaching engagements to large-scale workshops
            and offsites, my work blends analytical rigour with human insight to drive clarity, alignment, and lasting change.
            <br /><br />
            As a facilitator of change, I foster environments of trust, objectivity, and openness to create moments of collective
            sense-making, enabling teams to co-create transformative solutions that benefit both their people and the wider world.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">What I Offer</h2>
          <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
            <li><strong>Strategy & Transformation:</strong> Full-potential strategy, product & pricing, operating model design</li>
            <li><strong>Facilitation & Offsites:</strong> High-impact workshops, alignment sessions, stakeholder processes</li>
            <li><strong>Executive Coaching:</strong> 1:1 and team coaching to deepen impact and unlock leadership potential</li>
            <li><strong>Digital & Retail Expertise:</strong> eCommerce, loyalty ecosystems, subscription models, retail reinvention</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-md leading-relaxed mb-6">
          Ready to work together? Let’s talk about how Connective Shift can support your goals.
        </p>
        <a href="mailto:your-email@example.com" className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
          Email Me
        </a>
      </section>
    </div>
  );
}
