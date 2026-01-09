import { Metadata } from 'next';
import Link from 'next/link';
import { FiMapPin, FiCheck, FiPhone } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Service Areas - Apex Executive Limo | Toronto Airport Transportation',
  description: 'We serve all major cities in the Greater Toronto Area and beyond. Premium limo service to Toronto, Mississauga, Brampton, Markham, and more.',
  keywords: 'Apex Executive Limo, GTA limo service, Toronto transportation, Mississauga limo, Brampton airport taxi, GTA service areas',
};

export default function ServiceAreasPage() {
  const serviceAreas = {
    'Greater Toronto Area': [
      { name: 'Toronto', distance: 'Downtown Core' },
      { name: 'Mississauga', distance: '30 km from Toronto' },
      { name: 'Brampton', distance: '40 km from Toronto' },
      { name: 'Markham', distance: '35 km from Toronto' },
      { name: 'Vaughan', distance: '35 km from Toronto' },
      { name: 'Richmond Hill', distance: '30 km from Toronto' },
      { name: 'Oakville', distance: '40 km from Toronto' },
      { name: 'Burlington', distance: '60 km from Toronto' },
      { name: 'Pickering', distance: '40 km from Toronto' },
      { name: 'Ajax', distance: '45 km from Toronto' },
      { name: 'Whitby', distance: '50 km from Toronto' },
      { name: 'Oshawa', distance: '60 km from Toronto' },
      { name: 'Milton', distance: '50 km from Toronto' },
      { name: 'Newmarket', distance: '50 km from Toronto' },
      { name: 'Aurora', distance: '45 km from Toronto' },
      { name: 'Scarborough', distance: 'East Toronto' },
      { name: 'Etobicoke', distance: 'West Toronto' },
      { name: 'North York', distance: 'North Toronto' },
    ],
    'Durham Region': [
      { name: 'Oshawa', distance: '60 km from Toronto' },
      { name: 'Whitby', distance: '50 km from Toronto' },
      { name: 'Ajax', distance: '45 km from Toronto' },
      { name: 'Pickering', distance: '40 km from Toronto' },
      { name: 'Bowmanville', distance: '70 km from Toronto' },
      { name: 'Brooklin', distance: '55 km from Toronto' },
    ],
    'York Region': [
      { name: 'Vaughan', distance: '35 km from Toronto' },
      { name: 'Markham', distance: '35 km from Toronto' },
      { name: 'Richmond Hill', distance: '30 km from Toronto' },
      { name: 'Aurora', distance: '45 km from Toronto' },
      { name: 'Newmarket', distance: '50 km from Toronto' },
      { name: 'King City', distance: '45 km from Toronto' },
      { name: 'Stouffville', distance: '50 km from Toronto' },
    ],
    'Halton Region': [
      { name: 'Oakville', distance: '40 km from Toronto' },
      { name: 'Burlington', distance: '60 km from Toronto' },
      { name: 'Milton', distance: '50 km from Toronto' },
      { name: 'Halton Hills', distance: '65 km from Toronto' },
      { name: 'Georgetown', distance: '60 km from Toronto' },
    ],
    'Extended Service Areas': [
      { name: 'Hamilton', distance: '70 km from Toronto' },
      { name: 'Guelph', distance: '100 km from Toronto' },
      { name: 'Kitchener', distance: '115 km from Toronto' },
      { name: 'Waterloo', distance: '120 km from Toronto' },
      { name: 'Cambridge', distance: '110 km from Toronto' },
      { name: 'Barrie', distance: '100 km from Toronto' },
      { name: 'Niagara Falls', distance: '130 km from Toronto' },
      { name: 'St. Catharines', distance: '120 km from Toronto' },
      { name: 'Welland', distance: '140 km from Toronto' },
      { name: 'Buffalo, NY', distance: '150 km from Toronto' },
    ],
  };

  const airports = [
    { name: 'Toronto Pearson International Airport', code: 'YYZ', distance: '30 km from downtown' },
    { name: 'Billy Bishop Toronto City Airport', code: 'YTZ', distance: 'Downtown Toronto' },
    { name: 'Hamilton International Airport', code: 'YHM', distance: '70 km from Toronto' },
    { name: 'Buffalo Niagara International Airport', code: 'BUF', distance: '150 km from Toronto' },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-luxury-black text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 border-t border-b border-gold-500/20 py-2">
                <span className="text-gold-500 font-light text-xs uppercase tracking-[0.2em]">Coverage</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Service <span className="gradient-text font-normal">Areas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light">
              Premium luxury transportation across the Greater Toronto Area and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-luxury-black">
            Our <span className="gradient-text">Coverage Area</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738066.0790634268!2d-80.16396365!3d43.71837235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1704900000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Coverage Map - Greater Toronto Area"
              />
            </div>
            <p className="text-center text-gray-600 mt-6 font-light">
              We provide premium luxury transportation services throughout the entire Greater Toronto Area and surrounding regions. 
              Our coverage extends from downtown Toronto to all major suburbs, airports, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Airports */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-luxury-black">
            Airport <span className="gradient-text">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {airports.map((airport, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 hover:border-gold-500 transition-all duration-500 hover:shadow-lg"
              >
                <div className="text-gold-600 font-bold text-2xl mb-2">{airport.code}</div>
                <h3 className="font-light text-luxury-black mb-2">{airport.name}</h3>
                <p className="text-sm text-gray-600 font-light">{airport.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas by Region */}
      <section className="section-padding bg-luxury-lightGray">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 text-luxury-black">
            Cities We <span className="gradient-text">Serve</span>
          </h2>

          <div className="space-y-12 max-w-6xl mx-auto">
            {Object.entries(serviceAreas).map(([region, cities]) => (
              <div key={region}>
                <h3 className="text-2xl font-light mb-6 text-luxury-black border-b border-gold-500/20 pb-3">
                  {region}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white hover:bg-gold-50 transition-colors border border-transparent hover:border-gold-500"
                    >
                      <FiCheck className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-light text-luxury-black">{city.name}</div>
                        <div className="text-xs text-gray-500 font-light">{city.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-luxury-black text-white p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <FiMapPin className="w-8 h-8 text-gold-500" />
                  <h2 className="text-3xl font-light">
                    Can&apos;t Find Your <span className="text-gold-500">Location?</span>
                  </h2>
                </div>
                
                <p className="text-lg text-gray-300 font-light mb-8">
                  We service locations beyond those listed. If you don&apos;t see your city, please contact us. 
                  We regularly accommodate special requests throughout Southern Ontario and even into the United States.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+16477207100"
                    className="inline-flex items-center justify-center gap-3 bg-gold-500 text-luxury-black px-8 py-4 font-semibold hover:bg-gold-400 transition-colors"
                  >
                    <FiPhone className="w-5 h-5" />
                    <span>(647) 720-7100</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-luxury-black transition-all duration-500"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section-padding bg-luxury-lightGray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-luxury-black">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Local Knowledge',
                  description: 'Our drivers know every route, shortcut, and traffic pattern across the GTA.'
                },
                {
                  title: 'Flat-Rate Pricing',
                  description: 'No surprises. You know the cost before you book, regardless of traffic.'
                },
                {
                  title: '24/7 Availability',
                  description: 'Day or night, we\'re ready to serve you across all our service areas.'
                },
                {
                  title: 'Meet & Greet',
                  description: 'Complimentary meet and greet service at all major airports.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 border-l-4 border-gold-500">
                  <h3 className="text-xl font-light mb-3 text-luxury-black">{feature.title}</h3>
                  <p className="text-gray-600 font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

