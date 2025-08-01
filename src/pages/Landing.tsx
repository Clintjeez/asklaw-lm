import { useEffect } from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import CTASection from '@/components/landing/CTASection';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import WhySection from '@/components/landing/WhySection';
import Security from '@/components/landing/Security';
import PricingCalculator from '@/components/landing/PricingCalculator';

const Landing = () => {
  // Smooth scroll animation setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-[#fbfbf9] flex flex-col'>
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        [data-animate] {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        [data-animate].animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header with Navbar */}
      <Header />

      {/* Hero Section */}
      <div data-animate>
        <Hero />
      </div>

      <div data-animate id='why'>
        <WhySection />
      </div>

      {/* Features Section */}
      <div data-animate id='features'>
        <Features />
      </div>

      {/* Security Section */}
      <div data-animate id='security'>
        <Security />
      </div>

      {/* Pricing Calculator Section */}
      <div data-animate id='pricing'>
        <PricingCalculator />
      </div>

      {/* FAQ Section */}
      <div data-animate id='faq'>
        <FAQ />
      </div>

      {/* Final CTA Section */}
      <div data-animate>
        <CTASection
          variant='secondary'
          title="Don't Get Left Behind"
          subtitle='The future of legal practice is here. Be among the first to experience the power of AI-driven legal research and document analysis.'
          primaryButtonText='Get Early Access'
        />
      </div>

      {/* Footer */}
      <div data-animate>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
