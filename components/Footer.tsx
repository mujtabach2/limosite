import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const services = [
    { name: 'Airport Transfers', href: '/services#airport' },
    { name: 'Corporate Transportation', href: '/services#corporate' },
    { name: 'Special Events', href: '/services#events' },
    { name: 'Hourly Charter', href: '/services#charter' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/apexLogo.png" 
                alt="Apex Limo" 
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-bold leading-none">
                <span className="text-white">Apex</span>
                {" "}
                <span className="gradient-text">Limo</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Premium luxury transportation service in the Greater Toronto Area. Available 24/7 for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiPhone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+16477207100" className="text-gray-400 hover:text-white transition-colors">
                  (647) 720-7100
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@gtalimo.com" className="text-gray-400 hover:text-white transition-colors">
                  info@gtalimo.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Toronto, ON<br />Greater Toronto Area
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Apex Executive Limo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

