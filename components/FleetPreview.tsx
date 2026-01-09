'use client';

import Link from 'next/link';
import { FiUsers, FiArrowRight, FiCheck } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

export default function FleetPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
            }, index * 200);
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

  const vehicles = [
    {
      name: 'Executive Sedan',
      capacity: '1-3 passengers',
      image: 'https://images.unsplash.com/photo-1615106806531-183c31fccfdc?q=80&w=800&auto=format&fit=crop',
      features: ['Leather interior', 'Climate control', 'Premium sound'],
      badge: 'Popular'
    },
    {
      name: 'Luxury SUV',
      capacity: '1-6 passengers',
      image: 'https://images.unsplash.com/photo-1684208551877-6595c34bf759?q=80&w=800&auto=format&fit=crop',
      features: ['Spacious interior', 'Extra luggage', 'All-weather'],
      badge: 'Best Value'
    },
    {
      name: 'Stretch Limousine',
      capacity: '6-10 passengers',
      image: 'https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=600&q=80',
      features: ['Bar service', 'Entertainment', 'Special events'],
      badge: 'Premium'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4 px-4">
          <div>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 border-t border-b border-gold-500/20 py-2">
                <span className="text-gold-600 font-light text-xs uppercase tracking-[0.2em]">Fleet</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-luxury-black">
              Our <span className="gradient-text font-normal">Vehicles</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-light">
              Impeccable vehicles for every occasion
            </p>
          </div>
          <Link href="/fleet" className="hidden md:inline-block border-2 border-luxury-black px-8 py-3 font-semibold hover:bg-luxury-black hover:text-white transition-all duration-500 group">
            <span className="flex items-center gap-2">
              View All
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => {
            const isVisible = visibleCards.has(index);
            const isActive = hoveredIndex === index || isVisible;
            
            return (
            <div 
              key={index} 
              ref={el => { cardRefs.current[index] = el; }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-72 md:h-80 overflow-hidden mb-6 border transition-all duration-500 ${
                isActive ? 'border-gold-500' : 'border-gray-200'
              }`}>
                {/* Badge */}
                <div className="absolute top-6 right-6 z-10 bg-white px-4 py-2 text-xs font-light uppercase tracking-wider border-l-2 border-gold-500">
                  {vehicle.badge}
                </div>

                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 text-white mb-4">
                    <FiUsers className="w-5 h-5" />
                    <span className="font-light text-sm">{vehicle.capacity}</span>
                  </div>
                  
                  {/* Features on hover/visible */}
                  <div className={`transition-all duration-500 ${isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'}`}>
                    <div className="space-y-2 bg-white/10 backdrop-blur-sm p-4">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-white text-sm font-light">
                          <div className="w-1 h-1 bg-gold-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-light text-luxury-black">
                  {vehicle.name}
                </h3>
                <Link 
                  href="/fleet" 
                  className="inline-flex items-center text-gray-600 hover:text-luxury-black font-light text-sm uppercase tracking-wider group/link"
                >
                  <span>View Details</span>
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            );
          })}
        </div>

        <div className="text-center mt-16 md:hidden">
          <Link href="/fleet" className="inline-block border-2 border-luxury-black px-8 py-4 font-semibold hover:bg-luxury-black hover:text-white transition-all duration-500">
            View Full Fleet
          </Link>
        </div>
      </div>
    </section>
  );
}

