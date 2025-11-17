"use client";

import Image from "next/image";
import Link from "next/link";

// Brand colors - Professional Medical Blue + Teal (OKLCH)
const brandColor = 'oklch(0.4 0.1 223)'; // Primary blue
const brandColorHover = 'oklch(0.35 0.1 223)'; // Darker blue for hover
const brandColorLighter = 'oklch(0.9 0.05 223)'; // Light blue background
const accentColor = 'oklch(0.5 0.12 180)'; // Teal/Cyan accent
const accentColorHover = 'oklch(0.45 0.12 180)'; // Darker teal for hover

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 md:py-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/CampsieCentreMedicalLogo.png"
                  alt="Campsie Centre Medical Clinic"
                  width={600}
                  height={150}
                  priority
                  className="h-auto w-auto max-w-[280px] md:max-w-[350px] lg:max-w-[400px]"
                />
              </Link>
            </div>

            {/* Navigation & Contact */}
            <div className="flex items-center gap-8">
              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center gap-6">
                <a
                  href="/"
                  className="text-base font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: brandColor }}
                >
                  Home
                </a>
                <a
                  href="/#services"
                  className="text-base font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: brandColor }}
                >
                  Services
                </a>
                <a
                  href="/#contact"
                  className="text-base font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: brandColor }}
                >
                  Contact
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: accentColor }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = accentColorHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = accentColor}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Careers
                </a>
              </nav>

              {/* Contact Info */}
              <div className="flex flex-col items-end gap-1">
                <a
                  href="tel:0297181888"
                  className="text-lg md:text-xl font-bold hover:opacity-80 transition-opacity"
                  style={{ color: brandColor }}
                >
                  (02) 9718 1888
                </a>
                <a
                  href="mailto:campsiecmc@gmail.com"
                  className="text-xs md:text-sm hover:opacity-80 transition-opacity hidden sm:block"
                  style={{ color: brandColor }}
                >
                  campsiecmc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of a dedicated team providing quality healthcare to our diverse community in Campsie
            </p>
          </div>
        </div>
      </section>

      {/* Job Listing Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Job Card */}
          <div className="bg-white border-2 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" style={{ borderColor: brandColorLighter }}>
            {/* Header Banner */}
            <div className="px-8 py-6 border-b" style={{ backgroundColor: brandColorLighter }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: brandColor }}>
                    General Practitioner
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-semibold">Campsie, NSW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Flexible Hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-semibold">Permanent Position</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white" style={{ backgroundColor: accentColor }}>
                    Now Hiring
                  </span>
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div className="px-8 py-8">
              {/* About The Practice */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>About The Practice</h3>
                <p className="text-gray-700 leading-relaxed">
                  Campsie Centre Medical Clinic is a well-established, community-focused bulk billing practice located in the heart of Campsie, NSW. We pride ourselves on delivering high-quality, patient-centered care to a diverse and multicultural community. Our experienced team serves patients with dedication and excellence, supported by on-site allied health professionals including physiotherapy, podiatry, and dietetics.
                </p>
              </div>

              {/* About The Role */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>About The Role</h3>
                <p className="text-gray-700 leading-relaxed">
                  We are seeking a dedicated and qualified General Practitioner to join our busy and supportive practice. This is an excellent opportunity for a GP who values community medicine and enjoys working in a diverse, family-oriented environment.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>Key Responsibilities</h3>
                <ul className="space-y-3">
                  {[
                    "Deliver comprehensive, evidence-based primary care services to patients of all ages",
                    "Diagnose, treat, and manage acute and chronic medical conditions",
                    "Conduct preventive health checks, chronic disease management, and health screenings",
                    "Prescribe medications and refer patients to specialists when appropriate",
                    "Maintain accurate patient records using Medtech clinical software",
                    "Work collaboratively with our team"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Essential Requirements */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>Essential Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Current AHPRA registration as a General Practitioner",
                    "Professional Indemnity Insurance",
                    "Eligibility to work in Australia (citizenship/permanent residency or appropriate visa)",
                    "Commitment to high standards of patient care and confidentiality"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highly Desirable */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>Highly Desirable</h3>
                <ul className="space-y-3">
                  {[
                    "Fellowship of the Royal Australian College of General Practitioners (FRACGP) or ACRRM",
                    "Experience using Medtech clinical software",
                    "Proficiency in Mandarin, Cantonese, or Teochew"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We Offer */}
              <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: brandColorLighter }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Competitive Remuneration", desc: "Percentage-based billing structure with attractive rates" },
                    { title: "Flexible Working Hours", desc: "Excellent work-life balance to suit your needs" },
                    { title: "Supportive Environment", desc: "Experienced administrative and nursing staff" },
                    { title: "Bulk Billing Practice", desc: "Serve the community with accessible healthcare" },
                    { title: "Allied Health Support", desc: "Collaborate with physiotherapists, podiatrists, and dietitians" },
                    { title: "Central Location", desc: "Inside Campsie Centre, close to Campsie Station" },
                    { title: "Diverse Patient Base", desc: "Rewarding multicultural community" },
                    { title: "Modern Facilities", desc: "Equipped with Medtech and contemporary equipment" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColor }}>Location</h3>
                <div className="flex items-start gap-3 text-gray-700">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: accentColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Campsie Centre Medical Clinic</p>
                    <p>Level 1, 14-28 Amy Street</p>
                    <p>Campsie, NSW 2194</p>
                    <p className="text-sm text-gray-500 mt-1">Conveniently located in Campsie Centre with excellent public transport links and parking facilities.</p>
                  </div>
                </div>
              </div>

              {/* Apply Section */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: brandColor }}>How To Apply</h3>
                <p className="text-gray-700 text-center mb-6">
                  To apply, please send your CV and a brief cover letter to our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:campsiecmc@gmail.com?subject=GP Application - Campsie Centre Medical Clinic"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: accentColor }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = accentColorHover}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = accentColor}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Your Application
                    </span>
                  </a>
                  <a
                    href="tel:0297181888"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-white border-2 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    style={{ borderColor: brandColor }}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: brandColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us: (02) 9718 1888
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
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
