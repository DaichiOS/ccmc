"use client";

import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";

// Brand colors - Professional Medical Blue + Teal (OKLCH)
const brandColor = 'oklch(0.4 0.1 223)'; // Primary blue
const brandColorHover = 'oklch(0.35 0.1 223)'; // Darker blue for hover
const brandColorLighter = 'oklch(0.9 0.05 223)'; // Light blue background
const accentColor = 'oklch(0.5 0.12 180)'; // Teal/Cyan accent
const accentColorHover = 'oklch(0.45 0.12 180)'; // Darker teal for hover
const accentColorLighter = 'oklch(0.9 0.06 180)'; // Light teal background

// Structured Data for Local Business SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Campsie Centre Medical Clinic",
  "image": "https://campsiecmc.com.au/CampsieCentreMedicalLogo.png",
  "url": "https://campsiecmc.com.au",
  "telephone": "+61297181888",
  "email": "campsiecmc@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 1, 14-28 Amy Street, Campsie Centre",
    "addressLocality": "Campsie",
    "addressRegion": "NSW",
    "postalCode": "2194",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.9119,
    "longitude": 151.1036
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Bulk Billing, Mixed Billing, Cash, Card",
  "languages": ["English", "Mandarin", "Cantonese", "Teochew"],
  "medicalSpecialty": [
    "General Practice",
    "Physiotherapy",
    "Podiatry",
    "Dietetics",
    "Fertility Consultation"
  ],
  "sameAs": [
    "https://www.facebook.com/campsiecmc",
    "https://www.instagram.com/campsiecmc"
  ]
};

export default function Home() {
  // Infinite marquee scroll
  useEffect(() => {
    const container = document.getElementById('reviews-marquee');
    if (!container) return;

    let scrollPos = 0;
    let animationId: number;

    const scroll = () => {
      scrollPos += 0.5; // Scroll speed (pixels per frame)

      // Reset to start when we've scrolled through one full set
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }

      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(scroll); };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 md:py-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/CampsieCentreMedicalLogo.png"
                alt="Campsie Centre Medical Clinic"
                width={600}
                height={150}
                priority
                className="h-auto w-auto max-w-[320px] md:max-w-[400px] lg:max-w-[480px]"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-end gap-1">
              <a
                href="tel:0297181888"
                className="text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
                style={{ color: brandColor }}
              >
                (02) 9718 1888
              </a>
              <a
                href="mailto:campsiecmc@gmail.com"
                className="text-sm md:text-base hover:opacity-80 transition-opacity hidden sm:block"
                style={{ color: brandColor }}
              >
                campsiecmc@gmail.com
              </a>
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
                  style={{ backgroundColor: accentColor }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = accentColorHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = accentColor}
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

      {/* Features Section - Redesigned */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandColor }}>
              Why Choose Us?
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: accentColor }}></div>
          </div>

          {/* Cards Grid - Even Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Bulk Billing */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-opacity-30"
                   style={{ borderColor: accentColor }}>
                {/* Image Container - Fixed Height */}
                <div className="h-32 mb-6 flex items-center justify-center">
                  <Image
                    src="/images/bulkbill.webp"
                    alt="Medicare Bulk Billing Practice"
                    width={180}
                    height={90}
                    className="h-auto w-auto max-h-28"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: brandColor }}>
                  Bulk Billing
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  All Medicare cardholders bulk billed. No out-of-pocket costs for standard consultations.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center italic">
                    Valid Medicare card required
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Multilingual */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-opacity-30"
                   style={{ borderColor: accentColor }}>
                {/* Image Container - Fixed Height */}
                <div className="h-32 mb-6 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: brandColorLighter }}>
                    <Image
                      src="/images/employee.png"
                      alt="Multilingual Healthcare Staff"
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: brandColor }}>
                  Multilingual Staff
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  Our team speaks English, Mandarin, Cantonese, and Teochew to better serve our diverse community.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-gray-100">
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: accentColor }}>
                    普通话
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: accentColor }}>
                    粤语
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: accentColor }}>
                    潮州话
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Location */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-opacity-30"
                   style={{ borderColor: accentColor }}>
                {/* Icon Container - Fixed Height */}
                <div className="h-32 mb-6 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: brandColorLighter }}>
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-center" style={{ color: brandColor }}>
                  Central Location
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  Level 1, 14-28 Amy Street<br />
                  Campsie Centre, NSW 2194
                </p>
                <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: accentColor }}>
                    Across from Big W
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Infinite Marquee */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColor }}></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real reviews from our valued patients
            </p>
          </div>

          {/* Infinite Marquee Scroll */}
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable container */}
            <div id="reviews-marquee" className="flex gap-6 overflow-x-hidden scrollbar-hide">
              {/* First set of reviews */}
              <div className="flex gap-6 flex-shrink-0">
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review1.png"
                      alt="Patient review from Sahe Alam - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review2.png"
                      alt="Patient review from Isaac Crowe - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review3.png"
                      alt="Patient review from Nyoki - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review4.png"
                      alt="Patient review from S R - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 flex-shrink-0">
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review1.png"
                      alt="Patient review from Sahe Alam - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review2.png"
                      alt="Patient review from Isaac Crowe - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review3.png"
                      alt="Patient review from Nyoki - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="w-80 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src="/images/review4.png"
                      alt="Patient review from S R - 5 stars"
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandColor }}></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by experienced professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* General Practice */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/gp.png"
                  alt="General Practice"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: brandColor }}>General Practice</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Comprehensive primary healthcare with bulk billing for all Medicare cardholders
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
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/physio.png"
                  alt="Physiotherapy"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: brandColor }}>Physiotherapy</h3>
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
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/podiatry.png"
                  alt="Podiatry"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: brandColor }}>Podiatry</h3>
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
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/diet.png"
                  alt="Dietitian"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: brandColor }}>Dietitian</h3>
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

            {/* Fertility (HeyDoc) */}
            <a
              href="https://app.heydochealth.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer block"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: brandColor }} />
              <div className="mb-4">
                <Image
                  src="/images/heydoc.png"
                  alt="HeyDoc Health"
                  width={200}
                  height={70}
                  className="h-10 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: brandColor }}>Fertility Telehealth</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Online fertility consultations with AHPRA-registered specialists
              </p>
              <div className="text-sm space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 font-medium" style={{ color: brandColor }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Available 24/7
                </div>
                <p className="text-gray-500 ml-6 text-xs">
                  <span className="line-through mr-1">$49</span>
                  <span className="font-bold" style={{ color: brandColor }}>$10</span>
                </p>
              </div>
            </a>

            {/* Psychology */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-dashed border-gray-300">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                  Coming 2026
                </span>
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 opacity-60">
                <Image
                  src="/images/psych.png"
                  alt="Psychology"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
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
        </div>
      </section>

      {/* HeyDoc Fertility Referral CTA */}
      <section className="py-20" style={{ backgroundColor: '#EFF4F9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="px-8 py-16 md:px-16 md:py-20 lg:flex lg:items-center lg:gap-12">
              <div className="lg:w-3/5">
                <div className="mb-8">
                  <Image
                    src="/images/heydoc.png"
                    alt="HeyDoc Health"
                    width={500}
                    height={170}
                    className="h-32 md:h-36 w-auto"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: brandColor }}>
                  Looking for fertility help?
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Connect with AHPRA-registered fertility specialists from home. Get your referral in under 30 minutes and start your journey today.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: brandColor }}>Available 24/7</p>
                      <p className="text-gray-600 text-sm">Book anytime, nationwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: brandColor }}>Fast Referrals</p>
                      <p className="text-gray-600 text-sm">Receive within 30 mins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: brandColor }}>Expert Specialists</p>
                      <p className="text-gray-600 text-sm">AHPRA-registered doctors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: brandColor }}>
                        <span className="text-gray-400 line-through mr-2">$49</span>
                        <span>$10</span>
                      </p>
                      <p className="text-gray-600 text-sm">Limited time offer</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.heydochealth.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all duration-300 text-white hover:shadow-xl"
                    style={{ backgroundColor: brandColor }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = brandColorHover}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = brandColor}
                  >
                    <span className="flex items-center gap-2">
                      Book a consultation now!
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="https://www.heydochealth.com.au/#faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold border-2 rounded-xl transition-all duration-300"
                    style={{ color: brandColor, borderColor: brandColor }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="lg:w-2/5 mt-12 lg:mt-0 flex justify-center">
                <a
                  href="https://app.heydochealth.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300 hover:scale-105 max-w-xs"
                >
                  <Image
                    src="/images/consultation.png"
                    alt="HeyDoc Health telehealth consultation"
                    width={400}
                    height={600}
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
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
                      Across from Big W
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
                    <p className="text-gray-600">English, Mandarin (普通话), Cantonese (粤语), Teochew (潮州话)</p>
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
    </>
  );
}
