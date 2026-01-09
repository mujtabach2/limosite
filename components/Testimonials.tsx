'use client';

import { FiStar, FiMessageCircle } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]));
            }, index * 150);
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

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'Business Executive',
      content: 'Exceptional service! The driver was professional, the vehicle was immaculate, and I arrived at my meeting on time and stress-free.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      content: 'They made our wedding day perfect. The limousine was stunning and the chauffeur went above and beyond to make us feel special.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'David Martinez',
      role: 'Frequent Traveler',
      content: 'I use Apex Executive Limo for all my airport transfers. Reliable, affordable, and always a comfortable ride. Highly recommended!',
      rating: 5,
      avatar: 'DM'
    },
  ];

  return (
    <section className="section-padding bg-luxury-lightGray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 border-t border-b border-gold-500/20 py-2">
              <span className="text-gold-600 font-light text-xs uppercase tracking-[0.2em]">Testimonials</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-luxury-black">
            Client <span className="gradient-text font-normal">Experiences</span>
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Trusted by discerning clients across the GTA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.has(index);
            const isActive = activeIndex === index || isVisible;
            
            return (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`group relative bg-white p-8 md:p-10 transition-all duration-500 border ${
                isActive ? 'border-gold-500 shadow-xl' : 'border-gray-200'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Gold accent bar */}
              <div className="absolute left-0 top-0 w-1 h-16 bg-gold-500" />
              
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className="w-5 h-5 fill-gold-500 text-gold-500" 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed font-light text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-luxury-black flex items-center justify-center text-white font-light text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-light text-luxury-black">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border-t border-gold-500/20 pt-12 md:pt-16">
          {[
            { value: '5.0', label: 'Google Rating' },
            { value: '10k+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction' },
            { value: '24/7', label: 'Available' }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-light text-luxury-black mb-2">{stat.value}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

