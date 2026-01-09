'use client';

import Link from 'next/link';
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block animate-fade-in">
              <div className="flex items-center gap-2 border border-gold-500/20 px-5 py-2 bg-gold-50/50">
                <FiStar className="w-4 h-4 fill-gold-500 text-gold-500" />
                <span className="text-sm font-medium tracking-wider uppercase text-luxury-black">
                  Premium Luxury Transportation
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-luxury-black">
              Arrive in <span className="gradient-text">Style</span> & Comfort
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience the finest chauffeur service in the Greater Toronto Area. 
              Professional, punctual, and luxurious transportation for every occasion.
            </p>

            <div className="space-y-4">
              {['Airport Transfers', 'Corporate Events', 'Special Occasions'].map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-center space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-1.5 h-1.5 bg-gold-500" />
                  <span className="text-luxury-black text-lg font-light tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/book" className="group btn-primary inline-flex items-center justify-center space-x-2 text-base md:text-lg">
                <span>Book Your Ride</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/fleet" className="btn-secondary inline-flex items-center justify-center text-base md:text-lg">
                View Our Fleet
              </Link>
            </div>

            <div className="flex items-center gap-8 md:gap-12 pt-8 border-t border-gold-500/20">
              {[
                { value: '24/7', label: 'Available' },
                { value: '15+', label: 'Years' },
                { value: '5.0★', label: 'Rating' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-light text-luxury-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Hidden on mobile, visible on large screens */}
          <div className={`hidden lg:block relative lg:h-[600px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1615106806531-183c31fccfdc?q=80&w=800&auto=format&fit=crop"
                alt="Luxury limousine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
              <div className="absolute inset-0 border-2 border-gold-500/20" />
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-white px-8 py-4 border-l-4 border-gold-500 animate-float">
                <div className="flex items-center gap-3">
                  <FiStar className="w-6 h-6 fill-gold-500 text-gold-500" />
                  <div>
                    <div className="text-2xl font-light text-luxury-black">5.0</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

