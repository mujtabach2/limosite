'use client';

import { FiMapPin, FiBriefcase, FiStar, FiClock, FiArrowRight } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        },
        { threshold: 0.2 }
      );
      
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const services = [
    {
      icon: FiMapPin,
      title: 'Airport Transfers',
      description: 'Seamless transportation to and from Pearson, Billy Bishop, and Buffalo airports. Flight tracking included.',
      features: ['Flight tracking', 'Meet & greet', 'Luggage assistance']
    },
    {
      icon: FiBriefcase,
      title: 'Corporate Transportation',
      description: 'Professional chauffeur service for executives and business travelers. Impress clients and arrive on time.',
      features: ['Executive vehicles', 'Professional drivers', 'Flexible scheduling']
    },
    {
      icon: FiStar,
      title: 'Special Events',
      description: 'Make your special occasion unforgettable with our luxury vehicles. Weddings, proms, and celebrations.',
      features: ['Premium vehicles', 'Red carpet service', 'Hourly packages']
    },
    {
      icon: FiClock,
      title: 'Hourly Charter',
      description: 'Book our services by the hour for multiple stops, city tours, or extended transportation needs.',
      features: ['Flexible hours', 'Multiple stops', 'Dedicated driver']
    },
  ];

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 border-t border-b border-gold-500/20 py-2">
              <span className="text-gold-600 font-light text-xs uppercase tracking-[0.2em]">Services</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-luxury-black">
            Luxury <span className="gradient-text font-normal">Transportation</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light">
            Tailored solutions for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            const isVisible = visibleCards.has(index);
            const isActive = isHovered || isVisible; // Trigger on hover (desktop) or scroll (mobile)
            
            return (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white border transition-all duration-500 overflow-hidden ${
                  isActive ? 'border-gold-500 shadow-xl' : 'border-gray-200'
                }`}
              >
                {/* Animated gold accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500 transform origin-top transition-transform duration-700 ${
                  isActive ? 'scale-y-100' : 'scale-y-0'
                }`} />
                
                {/* Top gold line that expands on hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gold-500 transform origin-left transition-transform duration-700 delay-100 ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`} />
                
                <div className="p-8 md:p-10">
                  {/* Icon with background */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 border-2 transition-all duration-500 ${
                      isActive ? 'border-gold-500 bg-gold-50' : 'border-gray-200'
                    }`}>
                      <Icon className={`w-8 h-8 transition-all duration-500 ${
                        isActive ? 'text-gold-600 scale-110' : 'text-luxury-black'
                      }`} />
                    </div>
                    <div className={`text-6xl md:text-7xl font-light transition-colors duration-500 ${
                      isActive ? 'text-gold-100' : 'text-gray-100'
                    }`}>
                      0{index + 1}
                    </div>
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-light mb-4 transition-colors duration-500 ${
                    isActive ? 'text-gold-600' : 'text-luxury-black'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed font-light text-base">{service.description}</p>
                  
                  <ul className="space-y-3 border-t border-gray-100 pt-6">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-center space-x-4 text-gray-700 transition-all duration-300 ${
                          isActive ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={`w-1.5 h-1.5 transition-all duration-300 ${
                          isActive ? 'bg-gold-500 scale-125' : 'bg-gray-400'
                        }`} />
                        <span className="font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

