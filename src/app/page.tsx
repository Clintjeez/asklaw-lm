'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Header from '@/app/(landing-page)/Header';
import Hero from '@/app/(landing-page)/Hero';
import Features from '@/app/(landing-page)/Features';
import CTASection from '@/app/(landing-page)/CTASection';
import FAQ from '@/app/(landing-page)/FAQ';
import Footer from '@/app/(landing-page)/Footer';
import WhySection from '@/app/(landing-page)/WhySection';
import Security from '@/app/(landing-page)/Security';
import PricingCalculator from '@/app/(landing-page)/PricingCalculator';

export default function Landing() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isMounted, isLoaded, isSignedIn, router]);

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

  if (!isMounted || !isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
        <div data-animate>
          <Hero />
        </div>

        {/* Why Section */}
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

        {/* Pricing Section */}
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
      </main>
      <Footer />
    </div>
  );
}
