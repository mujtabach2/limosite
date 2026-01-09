import { Metadata } from 'next';
import { FiUsers, FiPackage, FiStar, FiCheck } from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Luxury Fleet | Premium Vehicles - Apex Executive Limo',
  description: 'View our fleet of luxury vehicles including executive sedans, SUVs, stretch limousines, and vans. Latest models, immaculately maintained.',
  keywords: 'luxury vehicles GTA, executive sedan, stretch limousine, luxury SUV, Toronto limo fleet, Apex Executive Limo',
};

export default function FleetPage() {
  const vehicles = [
    {
      name: 'Executive Sedan',
      capacity: '1-3 passengers',
      luggage: '3 bags',
      image: 'https://images.unsplash.com/photo-1615106806531-183c31fccfdc?q=80&w=800&auto=format&fit=crop',
      description: 'Perfect for business travel and airport transfers. Sleek, professional, and comfortable.',
      features: [
        'Premium leather interior',
        'Climate control',
        'Premium sound system',
        'Tinted windows',
        'WiFi available',
        'Phone chargers'
      ],
      idealFor: ['Airport transfers', 'Business meetings', 'Executive travel']
    },
    {
      name: 'Luxury SUV',
      capacity: '1-6 passengers',
      luggage: '6 bags',
      image: 'https://images.unsplash.com/photo-1684208551877-6595c34bf759?q=80&w=800&auto=format&fit=crop',
      description: 'Spacious luxury with extra room for passengers and luggage. All-weather capability.',
      features: [
        'Spacious leather interior',
        'Climate zones',
        'Entertainment system',
        'All-weather capability',
        'Extra luggage space',
        'WiFi available'
      ],
      idealFor: ['Group travel', 'Family trips', 'Airport groups', 'Corporate teams']
    },
    {
      name: 'Stretch Limousine',
      capacity: '6-10 passengers',
      luggage: '4 bags',
      image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800&q=80',
      description: 'The ultimate luxury experience for special occasions and celebrations.',
      features: [
        'Bar service area',
        'Premium entertainment',
        'Mood lighting',
        'Privacy partition',
        'Champagne service',
        'Red carpet available'
      ],
      idealFor: ['Weddings', 'Proms', 'Anniversaries', 'Special events', 'Night out']
    },
    {
      name: 'Mercedes Sprinter Van',
      capacity: '10-14 passengers',
      luggage: '12 bags',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
      description: 'Perfect for larger groups needing comfortable, luxury transportation.',
      features: [
        'Luxury seating',
        'Climate control',
        'Entertainment system',
        'WiFi equipped',
        'USB charging ports',
        'Ample luggage space'
      ],
      idealFor: ['Corporate groups', 'Airport groups', 'Wine tours', 'Events']
    },
    {
      name: 'Executive Van',
      capacity: '6-8 passengers',
      luggage: '8 bags',
      image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
      description: 'Comfortable group travel with a touch of luxury and plenty of space.',
      features: [
        'Captain seats',
        'Individual climate',
        'Entertainment options',
        'Privacy glass',
        'USB charging',
        'Rear storage'
      ],
      idealFor: ['Small groups', 'Family travel', 'Corporate outings']
    },
    {
      name: 'Luxury Coach',
      capacity: '20-40 passengers',
      luggage: '30 bags',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
      description: 'Full-size luxury coach for large corporate events and group transportation.',
      features: [
        'Reclining seats',
        'Restroom facilities',
        'Entertainment system',
        'WiFi throughout',
        'Climate control',
        'Large luggage bays'
      ],
      idealFor: ['Corporate events', 'Conferences', 'Large weddings', 'Tours']
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Luxury Fleet</h1>
            <p className="text-xl text-gray-300">
              Immaculately maintained, latest model vehicles to provide you with 
              the ultimate in comfort, style, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {vehicles.map((vehicle, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiUsers className="w-5 h-5" />
                        <span className="font-medium">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FiPackage className="w-5 h-5" />
                        <span className="font-medium">{vehicle.luggage}</span>
                      </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-4">{vehicle.name}</h2>
                    <p className="text-xl text-gray-600 mb-6">{vehicle.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3">Features:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {vehicle.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <FiCheck className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-lg mb-3">Ideal For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.idealFor.map((use, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/book" className="btn-primary">
                      Book This Vehicle
                    </Link>
                  </div>

                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-1">
                          <FiStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">Premium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Fleet Standards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Latest Models</h3>
                <p className="text-gray-600">
                  All vehicles are current or recent model years, ensuring modern features and reliability.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Immaculate Condition</h3>
                <p className="text-gray-600">
                  Regular maintenance and detailing ensure every vehicle is in pristine condition.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
                <p className="text-gray-600">
                  All vehicles carry comprehensive insurance for your peace of mind and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Book Your Luxury Ride</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our premium fleet and experience the difference of true luxury transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Now
              </Link>
              <a href="tel:+16477207100" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

