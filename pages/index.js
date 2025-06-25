export default function ConnectiveShiftLandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("/sunrise_mountain_lake.jpg")' }}>
        <div className="absolute bottom-10 animate-bounce text-white text-xl">↓</div>
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-10 max-w-5xl mx-4 md:flex md:space-x-10">
          <div className="md:w-1/2 text-center md:text-left">
            <img src="/daniel_profile_circular.png" alt="Daniel Walter" className="mx-auto md:mx-0 rounded-full w-32 h-32 mb-4" />
            <h1 className="text-4xl font-bold">Connective Shift</h1>
            <p className="mt-4 text-lg text-gray-700">Helping organisations and individuals create clarity, alignment, and lasting change.</p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="mailto:daniel@connectiveshift.com" className="px-4 py-2" style={{ backgroundColor: '#0046c9', color: 'white', borderRadius: '9999px' }}>Email</a>
              <a href="https://www.linkedin.com/in/danwaelt/" target="_blank" className="px-4 py-2" style={{ backgroundColor: '#0A66C2', color: 'white', borderRadius: '9999px' }}>LinkedIn</a>
            </div>
          </div>
          <div className="md:w-1/2 max-h-[70vh] overflow-y-auto pr-2">
            <section className="mb-10 bg-gray-50 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Creating a Connective Shift</h2>
              <p className="text-gray-700 text-sm">
                I help organisations and individuals enhance their impact and realise their potential through a mix of strategic consulting,
                executive coaching, and collaborative interventions. From data-rich reviews and coaching engagements to large-scale workshops
                and offsites, my work blends analytical rigour with human insight to drive clarity, alignment, and lasting change.
                <br /><br />
                As a facilitator of change, I foster environments of trust, objectivity, and openness to create moments of collective
                sense-making, enabling teams to co-create transformative solutions that benefit both their people and the wider world.
              </p>
              <div className="mt-6 text-center">
                <p className="text-gray-700 text-sm mb-4">Let’s connect and explore how we might work together.</p>
                <a href="https://www.linkedin.com/in/danwaelt/" target="_blank" className="inline-block px-6 py-2 transition transform hover:scale-105 hover:shadow-md" style={{ backgroundColor: '#0A66C2', color: 'white', borderRadius: '9999px' }}>Let's Connect</a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}