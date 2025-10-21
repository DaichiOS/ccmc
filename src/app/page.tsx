"use client";

import Image from "next/image";

// Brand color - vibrant cyan
const brandColor = '#00bcd4'; // More vibrant cyan
const brandColorLighter = '#e0f7fa'; // Very light background

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              src="/CampsieCentreMedicalLogo.png"
              alt="Campsie Centre Medical Clinic"
              width={400}
              height={100}
              priority
              className="h-auto"
            />
            <div className="text-center md:text-right">
              <a
                href="tel:0297181888"
                className="text-2xl font-bold hover:opacity-80 transition-opacity"
                style={{ color: brandColor }}
              >
                (02) 9718 1888
              </a>
              <p className="text-gray-600 mt-1">
                <a href="mailto:campsiecmc@gmail.com" className="hover:opacity-80 transition-opacity" style={{ color: brandColor }}>
                  campsiecmc@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: brandColorLighter }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColor }}></div>
                <span className="text-sm font-semibold text-gray-700">Quality Healthcare in Campsie</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
                Your Family&apos;s{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Health Partner</span>
                  <div className="absolute bottom-2 left-0 w-full h-4 -z-0 opacity-40" style={{ backgroundColor: brandColor }}></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Comprehensive medical care with experienced doctors and allied health professionals.
                Serving the community with dedication and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: brandColor }}
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book an Appointment
                  </span>
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white border-2 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  style={{ borderColor: brandColor }}
                >
                  <span className="flex items-center gap-2">
                    Our Services
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: brandColor }}></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/clinic1.png"
                      alt="Campsie Centre Medical Clinic"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/clinic.png"
                      alt="Medical Clinic Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/clinic2.png.jpg"
                      alt="Medical Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Billing Available</h3>
              <p className="text-gray-600">Mixed and bulk billing options for new and existing patients. GP referrals can be bulk billed.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multilingual Staff</h3>
              <p className="text-gray-600">Our team speaks English and Chinese (中文) to better serve our diverse community.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Central Location</h3>
              <p className="text-gray-600">Conveniently located in Campsie Centre with easy access and parking. Next to Australia Post, across from Big W.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColor }}></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* General Practice */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">General Practice</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Comprehensive primary healthcare with mixed and bulk billing options available
              </p>
              <div className="text-sm space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 font-medium" style={{ color: brandColor }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon-Fri: 9am - 5pm
                </div>
                <div className="flex items-center gap-2 font-medium" style={{ color: brandColor }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sun: 9am - 3pm
                </div>
              </div>
            </div>

            {/* Physiotherapy */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Physiotherapy</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Professional physiotherapy services for injury recovery and pain management
              </p>
              <div className="text-sm space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 font-medium" style={{ color: brandColor }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Tuesday & Friday
                </div>
                <p className="text-gray-500 ml-6">9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Podiatry */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Podiatry</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Expert foot care and treatment for all podiatric conditions
              </p>
              <div className="text-sm space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 font-medium" style={{ color: brandColor }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Every 2nd Tuesday
                </div>
                <p className="text-gray-500 ml-6">9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Dietitian */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: brandColor }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Dietitian</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Personalized nutrition advice and dietary planning
              </p>
              <div className="text-sm space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 font-medium" style={{ color: brandColor }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Monday (every 4 weeks)
                </div>
                <p className="text-gray-500 ml-6">9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Psychology */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-dashed" style={{ borderColor: brandColor }}>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  Coming 2026
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 opacity-60" style={{ backgroundColor: '#5ce1e6' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Psychology</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Mental health support and counseling services
              </p>
              <div className="text-sm space-y-2 pt-4 border-t border-gray-200">
                <p className="text-gray-400">Hours to be announced</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-cyan-50 border-l-4 p-6 rounded" style={{ borderColor: brandColor }}>
            <p className="text-gray-700">
              <strong>Bulk Billing Available:</strong> Referrals from General Practitioners can be bulk billed.
              New patients receive mixed billing; existing patients may opt for bulk billing.
            </p>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Opening Hours</h2>
            <p className="text-xl text-gray-400">We&apos;re here when you need us</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              {[
                { day: "Monday", hours: "9:00 AM - 5:00 PM" },
                { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
                { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
                { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
                { day: "Friday", hours: "9:00 AM - 5:00 PM" },
                { day: "Saturday", hours: "Closed", closed: true },
                { day: "Sunday", hours: "9:00 AM - 3:00 PM" },
              ].map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-8 py-5 ${
                    index !== 6 ? 'border-b border-gray-700' : ''
                  } hover:bg-gray-750 transition-colors`}
                >
                  <span className="font-bold text-white text-lg">{item.day}</span>
                  <span className={`font-semibold text-lg ${item.closed ? 'text-red-400' : 'text-gray-300'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600">
                      Level 1, 14-28 Amy Street<br />
                      Campsie Centre<br />
                      Campsie, NSW 2194
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Next to Australia Post, across from Big W
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:0297181888" className="text-lg font-medium hover:opacity-80 transition-opacity" style={{ color: brandColor }}>
                      (02) 9718 1888
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:campsiecmc@gmail.com" className="hover:opacity-80 transition-opacity break-all" style={{ color: brandColor }}>
                      campsiecmc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: brandColorLighter }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Languages</p>
                    <p className="text-gray-600">English, 中文 (Chinese)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4647447654!2d151.1036!3d-33.9119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bbd1c8c8c8c8%3A0x1234567890!2sCampsie%20Centre!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Campsie Centre Medical Clinic. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2">
              Our doctors and practice staff are committed to delivering high quality medical care to individuals and families.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
