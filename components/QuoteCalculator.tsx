'use client';

import { useState } from 'react';
import { FiUsers, FiArrowRight } from 'react-icons/fi';
import AddressAutocomplete from './AddressAutocomplete';

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    vehicleType: 'sedan',
    passengers: '1'
  });
  const [quote, setQuote] = useState<number | null>(null);

  // Rate structure based on typical GTA limo pricing
  const rates = {
    // Airport transfers (flat rates)
    airport: {
      sedan: 85,
      suv: 120,
      stretch: 200,
      van: 150
    },
    // Downtown/City trips (base rates)
    city: {
      sedan: 65,
      suv: 95,
      stretch: 175,
      van: 130
    },
    // Hourly rates
    hourly: {
      sedan: 75,
      suv: 95,
      stretch: 150,
      van: 110
    }
  };

  const calculateQuote = () => {
    const from = formData.from.toLowerCase();
    const to = formData.to.toLowerCase();
    const vehicle = formData.vehicleType;

    // Check if it's an airport trip
    const isAirport = 
      from.includes('airport') || from.includes('yyz') || from.includes('pearson') ||
      to.includes('airport') || to.includes('yyz') || to.includes('pearson');

    let baseRate = 0;
    
    if (isAirport) {
      baseRate = rates.airport[vehicle as keyof typeof rates.airport];
    } else {
      baseRate = rates.city[vehicle as keyof typeof rates.city];
    }

    // Add distance multiplier for longer trips
    if (from.includes('hamilton') || to.includes('hamilton')) {
      baseRate *= 1.3;
    } else if (from.includes('niagara') || to.includes('niagara')) {
      baseRate *= 1.8;
    } else if (from.includes('buffalo') || to.includes('buffalo')) {
      baseRate *= 2.2;
    }

    setQuote(Math.round(baseRate));
  };

  return (
    <section className="section-padding bg-luxury-lightGray">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 border-t border-b border-gold-500/20 py-2">
                <span className="text-gold-600 font-light text-xs uppercase tracking-[0.2em]">Quick Quote</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-luxury-black">
              Get an Instant <span className="gradient-text font-normal">Estimate</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light">
              See your estimated fare in seconds
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Pickup Location */}
              <AddressAutocomplete
                value={formData.from}
                onChange={(value) => setFormData({ ...formData, from: value })}
                placeholder="e.g., Downtown Toronto"
                label="Pickup Location"
              />

              {/* Dropoff Location */}
              <AddressAutocomplete
                value={formData.to}
                onChange={(value) => setFormData({ ...formData, to: value })}
                placeholder="e.g., Pearson Airport"
                label="Dropoff Location"
              />

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2 uppercase tracking-wider">
                  Vehicle Type
                </label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition-colors font-light"
                >
                  <option value="sedan">Executive Sedan (1-3 pax)</option>
                  <option value="suv">Luxury SUV (1-6 pax)</option>
                  <option value="stretch">Stretch Limousine (6-10 pax)</option>
                  <option value="van">Sprinter Van (10-14 pax)</option>
                </select>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2 uppercase tracking-wider">
                  <FiUsers className="inline w-4 h-4 mr-2" />
                  Passengers
                </label>
                <input
                  type="number"
                  min="1"
                  max="14"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold-500 focus:outline-none transition-colors font-light"
                />
              </div>
            </div>

            <button
              onClick={calculateQuote}
              disabled={!formData.from || !formData.to}
              className="w-full bg-luxury-black text-white py-4 font-semibold border-2 border-gold-500 hover:bg-gold-500 hover:text-luxury-black transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <span>Calculate Estimate</span>
              <FiArrowRight className="w-5 h-5" />
            </button>

            {/* Quote Result */}
            {quote !== null && (
              <div className="mt-8 p-6 bg-luxury-lightGray border-l-4 border-gold-500 animate-fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-light uppercase tracking-wider mb-2">
                      Estimated Fare
                    </p>
                    <p className="text-4xl font-light text-luxury-black">
                      ${quote}
                      <span className="text-xl text-gray-600"> CAD</span>
                    </p>
                  </div>
                  <a
                    href="/book"
                    className="bg-gold-500 text-luxury-black px-6 py-3 font-semibold hover:bg-gold-400 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-4 font-light">
                  * This is an estimate. Final price may vary based on traffic, waiting time, and additional stops. 
                  Gratuity not included.
                </p>
              </div>
            )}
          </div>

          {/* Popular Routes */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white border border-gray-200 hover:border-gold-500 transition-colors">
              <p className="text-sm text-gray-600 font-light mb-2">Downtown → YYZ</p>
              <p className="text-2xl font-light text-luxury-black">from $85</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 hover:border-gold-500 transition-colors">
              <p className="text-sm text-gray-600 font-light mb-2">Mississauga → YYZ</p>
              <p className="text-2xl font-light text-luxury-black">from $75</p>
            </div>
            <div className="text-center p-6 bg-white border border-gray-200 hover:border-gold-500 transition-colors">
              <p className="text-sm text-gray-600 font-light mb-2">Hourly Charter</p>
              <p className="text-2xl font-light text-luxury-black">from $75/hr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

