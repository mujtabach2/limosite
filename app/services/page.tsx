import { Metadata } from 'next';
import { FiMapPin, FiBriefcase, FiStar, FiClock, FiCheck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luxury Limo Services GTA | Airport, Corporate & Events',
  description: 'Premium limousine services in Toronto and GTA. Airport transfers, corporate transportation, special events, and hourly charter. Available 24/7.',
  keywords: 'limo services GTA, airport transfer Toronto, corporate transportation, wedding limo, special events',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'airport',
      icon: FiMapPin,
      title: 'Airport Transfers',
      description: 'Seamless, stress-free transportation to and from all major airports in the region.',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
      features: [
        'Flight tracking and monitoring',
        'Complimentary meet & greet service',
        'Professional luggage assistance',
        'Fixed flat-rate pricing',
        'Flight delay accommodation',
        'Available for all major airports'
      ],
      airports: ['Toronto Pearson (YYZ)', 'Billy Bishop (YTZ)', 'Hamilton (YHM)', 'Buffalo Niagara (BUF)']
    },
    {
      id: 'corporate',
      icon: FiBriefcase,
      title: 'Corporate Transportation',
      description: 'Professional chauffeur service for business executives and corporate clients.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      features: [
        'Executive luxury vehicles',
        'Professional, discrete drivers',
        'Flexible scheduling and routing',
        'Corporate billing available',
        'Multi-stop capabilities',
        'Conference and meeting transportation'
      ],
      benefits: ['Impress clients', 'Maximize productivity', 'Reliable service', 'Premium comfort']
    },
    {
      id: 'events',
      icon: FiStar,
      title: 'Special Events',
      description: 'Make your memorable moments even more special with our luxury transportation.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      features: [
        'Weddings and anniversaries',
        'Proms and graduations',
        'Bachelor/bachelorette parties',
        'Casino trips and nights out',
        'Concert and sporting events',
        'Custom red carpet service'
      ],
      occasions: ['Weddings', 'Proms', 'Anniversaries', 'Birthdays', 'Casino Trips', 'Concerts']
    },
    {
      id: 'charter',
      icon: FiClock,
      title: 'Hourly Charter',
      description: 'Book our premium services by the hour for maximum flexibility and convenience.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
      features: [
        'Minimum 3-hour booking',
        'Multiple stops included',
        'Dedicated driver and vehicle',
        'Perfect for city tours',
        'Flexible itinerary',
        'Ideal for business meetings'
      ],
      useCases: ['City tours', 'Multiple meetings', 'Shopping trips', 'Wine tours', 'Custom itineraries']
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Premium luxury transportation solutions tailored to your needs. 
              Professional, reliable, and available 24/7 throughout the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={service.id} 
            id={service.id}
            className={`section-padding ${isEven ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FiCheck className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.airports && (
                    <div className="mb-8">
                      <h4 className="font-semibold text-lg mb-3">Airports We Serve:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.airports.map((airport, idx) => (
                          <div key={idx} className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
                            {airport}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href="/book" className="btn-primary inline-flex items-center space-x-2">
                    <span>Book This Service</span>
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the difference of premium luxury transportation. 
              Book online or speak with our team 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Online
              </Link>
              <a href="tel:+16477207100" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Call (647) 720-7100
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

