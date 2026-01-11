'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Areas', href: '/service-areas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <img 
              src="/apexLogo.png" 
              alt="Apex Limo" 
              className="h-6 md:h-8 w-auto transition-transform group-hover:scale-105"
            />
            <div className="text-xl md:text-2xl font-bold leading-none">
              <span className="text-luxury-black">Apex</span>
              {" "}
              <span className="gradient-text">Limo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a
              href="tel:+16477207100"
              className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-gold-600 transition-colors group"
            >
              <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gold-100 transition-colors">
                <FiPhone className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">(647) 720-7100</span>
            </a>
            <Link 
              href="/book" 
              className="relative group px-6 py-3 bg-luxury-black text-white font-semibold border-2 border-gold-500 hover:bg-gold-500 hover:text-luxury-black transition-all duration-500"
            >
              <span className="relative z-10 text-sm">Book Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 pb-6 space-y-2 border-t">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive 
                      ? 'bg-gold-50 text-gray-900' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="tel:+16477207100"
              className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-gray-900 font-semibold"
            >
              <FiPhone className="w-5 h-5" />
              <span>(647) 720-7100</span>
            </a>
            <Link 
              href="/book" 
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

