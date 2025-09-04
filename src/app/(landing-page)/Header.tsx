'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#fbfbf963] backdrop-blur-sm'>
      <nav className='max-w-8xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href="/" className='flex items-center gap-1'>
          <img
            src='/asklawlm_logo.png'
            alt='AskLaw LM Logo'
            className='h-6 w-8 object-contain'
          />
          <h1 className='text-lg sm:text-xl font-semibold text-[#0a0a0a] hover:text-[#2a2a2a] transition-colors'>
            AskLawLM
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <nav className='flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection('why')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Why AskLawLM
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('security')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Security
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              FAQ
            </button>
            <button
              onClick={() => router.push('/signin')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Sign In
            </button>
          </nav>

          {/* Desktop CTA Button or User Menu */}
          {isLoaded && isSignedIn ? (
            <div className='flex items-center gap-3'>
              <Button
                onClick={() => router.push('/dashboard')}
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
              >
                Dashboard
              </Button>
              <UserButton />
            </div>
          ) : isLoaded ? (
            <Button
              onClick={() => router.push('/signup')}
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
            >
              Get Started
            </Button>
          ) : (
            <div className='w-24 h-10 animate-pulse bg-gray-200 rounded' />
          )}
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden flex items-center gap-4'>
          {/* Mobile CTA/User for authenticated users */}
          {isLoaded && isSignedIn ? (
            <div className='flex items-center gap-2'>
              <Button
                onClick={() => router.push('/dashboard')}
                size='sm'
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-3 py-1 text-sm rounded-lg transition-colors'
              >
                Dashboard
              </Button>
              <UserButton />
            </div>
          ) : isLoaded ? (
            <Button
              onClick={() => router.push('/signup')}
              size='sm'
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors'
            >
              Get Started
            </Button>
          ) : (
            <div className='w-20 h-8 animate-pulse bg-gray-200 rounded' />
          )}

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='p-2'
          >
            {isMobileMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white border-b border-gray-100 shadow-lg'>
          <div className='px-4 py-4 space-y-4'>
            <button
              onClick={() => handleNavClick('why')}
              className='block w-full text-left text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
            >
              Why AskLawLM
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className='block w-full text-left text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('security')}
              className='block w-full text-left text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
            >
              Security
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className='block w-full text-left text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className='block w-full text-left text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
            >
              FAQ
            </button>
            <button
              onClick={() => {
                router.push('/signin');
                setIsMobileMenuOpen(false);
              }}
              className='block w-full text-left text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
