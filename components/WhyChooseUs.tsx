'use client';

import { FiShield, FiAward, FiUsers, FiDollarSign } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

export default function WhyChooseUs() {
  const [counters, setCounters] = useState({ clients: 0, vehicles: 0, cities: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounters({
              clients: Math.floor(10000 * progress),
              vehicles: Math.floor(50 * progress),
              cities: Math.floor(25 * progress),
            });
            
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
            }, index * 150); // Stagger the animations
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const benefits = [
    {
      icon: FiShield,
      title: 'Licensed & Insured',
      description: 'All our drivers are fully licensed, insured, and background-checked for your safety.'
    },
    {
      icon: FiAward,
      title: 'Premium Fleet',
      description: 'Latest model luxury vehicles maintained to the highest standards of excellence.'
    },
    {
      icon: FiUsers,
      title: 'Professional Chauffeurs',
      description: 'Experienced, courteous drivers who prioritize your comfort and schedule.'
    },
    {
      icon: FiDollarSign,
      title: 'Transparent Pricing',
      description: 'Flat-rate pricing with no hidden fees. Know your cost upfront.'
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-luxury-lightGray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 px-4">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 border-t border-b border-gold-500/20 py-2">
              <span className="text-gold-600 font-light text-xs uppercase tracking-[0.2em]">Excellence</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-luxury-black">
            Why Choose <span className="gradient-text font-normal">Us</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-light">
            Uncompromising quality in every detail
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isVisible = visibleCards.has(index);
            return (
              <div
                key={index}
                ref={el => { cardRefs.current[index] = el; }}
                className={`group relative bg-white p-8 md:p-10 transition-all duration-500 border overflow-hidden ${
                  isVisible ? 'border-gold-500 shadow-xl' : 'border-gray-200'
                } hover:border-gold-500 hover:shadow-xl`}
              >
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-gold-500 border-l-[40px] border-l-transparent transition-opacity duration-500 ${
                  isVisible ? 'opacity-20' : 'opacity-0'
                } group-hover:opacity-20`} />
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gold-500 blur-xl transition-opacity duration-500 ${
                    isVisible ? 'opacity-10' : 'opacity-0'
                  } group-hover:opacity-10`} />
                  <div className={`relative w-20 h-20 mx-auto border-2 transition-all duration-500 flex items-center justify-center ${
                    isVisible ? 'border-gold-500 rotate-6' : 'border-gray-200 rotate-0'
                  } group-hover:border-gold-500 group-hover:rotate-6`}>
                    <Icon className={`w-10 h-10 transition-all duration-500 ${
                      isVisible ? 'text-gold-500 scale-110' : 'text-luxury-black scale-100'
                    } group-hover:text-gold-500 group-hover:scale-110`} />
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-light mb-3 text-luxury-black text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light text-center">{benefit.description}</p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gold-500 transition-all duration-500 ${
                  isVisible ? 'w-3/4' : 'w-0'
                } group-hover:w-3/4`} />
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-20 text-center border-t border-b border-gold-500/20 py-12 md:py-16">
          {[
            { value: counters.clients.toLocaleString(), label: 'Happy Clients', suffix: '+' },
            { value: counters.vehicles, label: 'Luxury Vehicles', suffix: '+' },
            { value: counters.cities, label: 'Cities Served', suffix: '+' }
          ].map((stat, index) => (
            <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Vertical separator on desktop, except for last item */}
              {index < 2 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gold-500/20" />
              )}
              <div className="text-5xl md:text-6xl font-light text-luxury-black mb-2 group-hover:text-gold-600 transition-colors duration-500">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-600 font-light text-xs uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-luxury-black p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-light mb-4">Available <span className="gradient-text">24/7</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Day or night, we&apos;re here when you need us. Experience luxury transportation at any hour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+16477207100" className="bg-gold-500 text-luxury-black px-8 py-4 font-semibold hover:bg-gold-400 transition-all text-center">
                Call Now
              </a>
              <a href="/book" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-luxury-black transition-all text-center">
                Book Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

