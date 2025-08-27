'use client'

import React, { useState, useEffect, useRef, ReactNode, RefObject } from 'react';
import ReturnBanner from '@/components/ReturnBanner';

type IconProps = {
  children: ReactNode;
  className?: string;
};

type SvgIconProps = {
  size?: number;
  className?: string;
  fill?: string;
};

// --- SVG ICONS (replaces lucide-react) ---
const Icon = ({ children, className = 'w-6 h-6' }: IconProps) => (
  <div className={className}>{children}</div>
);

const Award = ({ size = 24 }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline>
  </svg>
);

const ShieldCheck = ({ size = 24, className = '' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const Briefcase = ({ size = 24 }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const DollarSign = ({ size = 24 }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const Users = ({ size = 24, className = '' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const Wrench = ({ size = 24 }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const Star = ({ fill = 'none' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Menu = ({ size = 28 }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const X = ({ size = 28 }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Mail = ({ size = 18, className = '' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const Phone = ({ size = 18, className = '' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPin = ({ size = 18, className = '' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const CheckCircle = ({ size = 16, className = '' }: SvgIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// --- ANIMATION COMPONENT (replaces framer-motion) ---
const useInView = (
  options?: IntersectionObserverInit
): [RefObject<HTMLElement | null>, boolean] => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isInView];
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const AnimatedSection = ({ children, className = '', id }: AnimatedSectionProps) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id={id}
      className={`${className} transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </section>
  );
};


// --- PAGE COMPONENTS ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Choose Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white font-['Montserrat']">
            SparkleClean
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white hover:text-sky-400 transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-block bg-navy text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all">
            Get a Free Quote
          </a>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-blue-900 hover:text-sky-400 transition-colors font-medium text-lg">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-11/12 text-center bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all">
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const QuoteForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center font-['Montserrat']">Get Your Free, No-Obligation Quote</h3>
      <p className="text-center text-gray-600 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
      <form>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-500">
            <option>Select Service Type</option>
            <option>Residential Window Cleaning</option>
            <option>High-Rise Window Cleaning</option>
          </select>
          <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 px-6 rounded-lg mt-6 hover:bg-opacity-90 transition-all text-lg">
          Request My Quote
        </button>
      </form>
      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> 100% Safety Record</li>
        <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Fully Insured & Certified</li>
        <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> Satisfaction Guaranteed</li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <AnimatedSection id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 font-['Montserrat']">Ready for Spotless Windows?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Let us bring the sparkle back to your property. Contact us today for a fast, free, and friendly quote.
            </p>
          </div>
          <div className="flex justify-center">
            <QuoteForm />
          </div>
        </div>
      </AnimatedSection>

      <footer className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">SparkleClean</h3>
              <p className="text-gray-300">Your trusted partner for professional window cleaning in Ontario.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-['Montserrat']">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><Phone size={18} className="mr-3" /> (123) 456-7890</li>
                <li className="flex items-center"><Mail size={18} className="mr-3" /> quote@sparkleclean.ca</li>
                <li className="flex items-center"><MapPin size={18} className="mr-3" /> Serving Toronto & the GTA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-['Montserrat']">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-sky-400">Services</a></li>
                <li><a href="#why-us" className="hover:text-sky-400">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-sky-400">Testimonials</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};


// --- MAIN APP COMPONENT ---

export default function App() {
  
  // Data for sections
  const certifications = [
    { name: "IRATA & SPRAT", icon: <Award size={36} /> },
    { name: "WAH Certified", icon: <ShieldCheck size={36} /> },
    { name: "WSIB Coverage", icon: <Briefcase size={36} /> },
    { name: "$5M+ Liability", icon: <DollarSign size={36} /> },
    { name: "Aerial Work Specialists", icon: <Users size={36} /> },
    { name: "WHMIS For All", icon: <Wrench size={36} /> },
  ];

  const trustedByLogos = [
    "https://placehold.co/150x50/e2e8f0/000000?text=TRUSTED+CO",
    "https://placehold.co/150x50/e2e8f0/000000?text=PARTNER+INC",
    "https://placehold.co/150x50/e2e8f0/000000?text=MEGA+CORP",
    "https://placehold.co/150x50/e2e8f0/000000?text=BUILDERS+LTD",
    "https://placehold.co/150x50/e2e8f0/000000?text=REALTY+GROUP",
  ];

  const whyChooseUsPoints = [
    { title: "Unmatched Safety", description: "With a 100% safety record and rigorous protocols, we prioritize the well-being of our team and your property. Fully certified and insured.", icon: <ShieldCheck size={48} className="text-sky-400" /> },
    { title: "15+ Years of Experience", description: "Our team's combined experience ensures we handle every job with expertise, from single-family homes to the tallest high-rises.", icon: <Award size={48} className="text-sky-400" /> },
    { title: "Absolute Trust & Reliability", description: "We're covered by $5M+ in liability insurance and trusted by over 500 businesses. Your peace of mind is our top priority.", icon: <Users size={48} className="text-sky-400" /> },
  ];
  
  const testimonials = [
    { name: "Sarah L., Downtown Condo", photo: "https://i.pravatar.cc/100?img=1", review: "Incredible service! My high-rise windows have never been cleaner. The team was professional, safe, and efficient. Highly recommend SparkleClean!" },
    { name: "Mark B., Business Owner", photo: "https://i.pravatar.cc/100?img=2", review: "The difference is night and day. They handled our multi-story office building with ease. The best in the business, hands down." },
    { name: "Jessica P., Homeowner", photo: "https://i.pravatar.cc/100?img=3", review: "I was so impressed with the attention to detail on my home's windows. They were friendly, on-time, and left everything spotless." },
  ];

  const serviceAreas = ["Toronto", "Mississauga", "Brampton", "Hamilton", "Markham", "Vaughan", "Oakville", "Burlington", "Richmond Hill", "Ottawa", "London", "Kitchener-Waterloo"];

  return (
    <div>
      <ReturnBanner/>
    <div className="bg-white font-['Inter'] text-gray-800">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-opacity-70"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-['Montserrat']">
                Ontario’s Premier High-Rise & Residential Window Cleaning
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0">
                Unmatched safety, quality, and professionalism. We deliver a crystal-clear view every time.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4 font-bold">
                  <div className="bg-white/20 p-3 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-['Montserrat']">15+</p>
                      <p className="text-sm">Years of Experience</p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-['Montserrat']">100%</p>
                      <p className="text-sm">Safety Record</p>
                  </div>
                   <div className="bg-white/20 p-3 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-['Montserrat']">500+</p>
                      <p className="text-sm">Businesses Served</p>
                  </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 w-full">
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* Certifications Strip */}
        <div className="bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {certifications.map(cert => (
                <div key={cert.name} className="flex flex-col items-center justify-center text-blue-900">
                  <Icon className="text-blue-900">{cert.icon}</Icon>
                  <p className="mt-2 text-sm font-semibold">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
         <AnimatedSection className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-xl font-semibold text-gray-500 mb-8 font-['Montserrat']">Trusted by top organizations in Ontario</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {trustedByLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Trusted partner logo ${index + 1}`} className="h-10 opacity-60" onError={(e) => e.currentTarget.style.display='none'}/>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Services Section */}
        <AnimatedSection id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl text-blue-900 font-['Montserrat']">Our Specialized Services</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Tailored solutions for every type of property, ensuring pristine results.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" alt="Residential window cleaning" className="w-full h-64 object-cover" />
                      <div className="p-8">
                          <h3 className="text-2xl font-bold text-blue-900 mb-3 font-['Montserrat']">Residential Window Cleaning</h3>
                          <p className="text-gray-600 mb-6">From single-family homes to luxury estates, we treat your home with the utmost care. Our service includes windows, frames, sills, and screens, leaving your view transformed.</p>
                          <a href="#contact" className="font-bold text-blue-900 hover:text-sky-400">Get a Quote &rarr;</a>
                      </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" alt="High-rise window cleaning" className="w-full h-64 object-cover" />
                      <div className="p-8">
                          <h3 className="text-2xl font-bold text-blue-900 mb-3 font-['Montserrat']">High-Rise & Commercial</h3>
                          <p className="text-gray-600 mb-6">Our certified technicians are experts in high-rise rope access and aerial work platforms. We service office buildings, condos, hotels, and industrial facilities with a focus on safety and efficiency.</p>
                          <a href="#contact" className="font-bold text-blue-900 hover:text-sky-400">Get a Quote &rarr;</a>
                      </div>
                  </div>
              </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection id="why-us" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-blue-900 font-['Montserrat']">Why Choose SparkleClean?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">When you choose us, you're choosing peace of mind.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {whyChooseUsPoints.map((point) => (
                        <div key={point.title} className="text-center p-6">
                            <div className="flex justify-center mb-4">{point.icon}</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2 font-['Montserrat']">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection id="testimonials" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-white font-['Montserrat']">What Our Clients Say</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Our reputation is built on delivering exceptional results.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-200 mb-6">"{testimonial.review}"</p>
                  <div className="flex items-center">
                    <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" onError={(e) => e.currentTarget.src = 'https://placehold.co/100x100/e2e8f0/333?text=Photo'} />
                    <div>
                      <p className="font-bold font-['Montserrat']">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* Who We Are Section */}
        <AnimatedSection id="about-us" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl text-blue-900 mb-4 font-['Montserrat']">Who We Are</h2>
                <p className="text-gray-600 text-lg mb-4">
                  Founded on the principles of safety, integrity, and unparalleled quality, SparkleClean has grown into one of Ontario's most trusted window cleaning companies. We're a team of dedicated professionals, combining decades of experience with a passion for what we do. 
                </p>
                <p className="text-gray-600 text-lg">
                  We believe in building lasting relationships with our clients by consistently exceeding their expectations and ensuring every project is completed to the highest standard of safety and cleanliness.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop" alt="Our Team" className="rounded-lg shadow-xl w-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Areas We Serve Section */}
        <AnimatedSection id="service-areas" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-blue-900 font-['Montserrat']">Serving Communities Across Ontario</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">We proudly offer our services in the following areas and beyond.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                {serviceAreas.map(area => (
                  <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-blue-900">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
    </div>
  );
}
