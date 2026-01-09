'use client';

import Link from 'next/link';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

export default function CTA() {
  return (
    <section className="section-padding bg-luxury-black text-white relative overflow-hidden">
      {/* Subtle gold accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Special offer badge */}
          <div className="inline-block mb-8">
            <div className="border border-gold-500/30 bg-gold-500/10 px-6 py-2">
              <span className="text-gold-400 font-light text-xs uppercase tracking-[0.2em]">First Ride • 10% Off</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light mb-8 px-4">
            Experience{' '}
            <span className="gradient-text font-normal">Luxury</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Book your premium transportation today. Available 24/7 throughout the Greater Toronto Area.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 px-4">
            <Link 
              href="/book" 
              className="group bg-gold-500 text-luxury-black px-10 md:px-12 py-4 md:py-5 font-semibold hover:bg-gold-400 transition-all duration-500 inline-flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <span>Book Now</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+16477207100" 
              className="border-2 border-white text-white px-10 md:px-12 py-4 md:py-5 font-semibold hover:bg-white hover:text-luxury-black transition-all duration-500 inline-flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <FiPhone className="w-5 h-5" />
              <span className="text-sm md:text-base">(647) 720-7100</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-white/10">
            {[
              { value: '24/7', label: 'Available' },
              { value: '10k+', label: 'Clients' },
              { value: '15+', label: 'Years' },
              { value: '5.0★', label: 'Rating' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

