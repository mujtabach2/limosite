'use client';

import { useState } from 'react';
import { FiCheck, FiClock, FiDollarSign, FiShield, FiPhone, FiMail } from 'react-icons/fi';

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    vehicleType: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    passengers: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your backend/CRM
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly to confirm your booking.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Luxury Ride</h1>
            <p className="text-xl text-gray-300">
              Get an instant quote and reserve your premium transportation
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Your Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="(647) 123-4567"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-2xl font-bold mb-4">Service Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Type *
                        </label>
                        <select
                          name="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        >
                          <option value="">Select Service</option>
                          <option value="airport">Airport Transfer</option>
                          <option value="corporate">Corporate Transportation</option>
                          <option value="event">Special Event</option>
                          <option value="hourly">Hourly Charter</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vehicle Type *
                        </label>
                        <select
                          name="vehicleType"
                          required
                          value={formData.vehicleType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        >
                          <option value="">Select Vehicle</option>
                          <option value="sedan">Executive Sedan</option>
                          <option value="suv">Luxury SUV</option>
                          <option value="stretch">Stretch Limousine</option>
                          <option value="sprinter">Sprinter Van</option>
                          <option value="van">Executive Van</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-2xl font-bold mb-4">Trip Details</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          name="pickupDate"
                          required
                          value={formData.pickupDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pickup Time *
                        </label>
                        <input
                          type="time"
                          name="pickupTime"
                          required
                          value={formData.pickupTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          name="pickupLocation"
                          required
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="123 Main St, Toronto, ON"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Drop-off Location *
                        </label>
                        <input
                          type="text"
                          name="dropoffLocation"
                          required
                          value={formData.dropoffLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="Toronto Pearson Airport"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Passengers *
                        </label>
                        <input
                          type="number"
                          name="passengers"
                          required
                          min="1"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Special Requests
                        </label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          placeholder="Child seats, extra luggage space, etc."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Request Quote & Book Now
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted about your booking.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Book With Us */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Why Book With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FiCheck className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Instant Confirmation</div>
                      <div className="text-sm text-gray-600">Get confirmed within minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiDollarSign className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Transparent Pricing</div>
                      <div className="text-sm text-gray-600">No hidden fees or surprises</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiClock className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">24/7 Availability</div>
                      <div className="text-sm text-gray-600">Book anytime, day or night</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiShield className="w-6 h-6 text-gray-900 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Fully Insured</div>
                      <div className="text-sm text-gray-600">Licensed and insured service</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-300 mb-4">
                  Our team is available 24/7 to assist with your booking
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+16477207100"
                    className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors"
                  >
                    <FiPhone className="w-5 h-5" />
                    <span className="font-semibold">(647) 720-7100</span>
                  </a>
                  <a
                    href="mailto:info@gtalimo.com"
                    className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors"
                  >
                    <FiMail className="w-5 h-5" />
                    <span>info@gtalimo.com</span>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">5★</div>
                  <div className="text-sm text-gray-600 mb-4">Average Rating</div>
                  <div className="border-t pt-4">
                    <div className="text-2xl font-bold text-gray-900 mb-1">10,000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

