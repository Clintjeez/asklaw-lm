import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='fixed top-0 left-0 right-0 z-50  backdrop-blur-sm'>
      <nav className='max-w-10xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold text-[#0a0a0a]'>AskLaw LM</h1>
        </div>

        {/* Navigation Items */}
        <section className='flex gap-10 justify-center items-center'>
          <div className='hidden md:flex items-center space-x-8'>
            <a
              href='#features'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Features
            </a>
            <a
              href='#about'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              About
            </a>
            <a
              href='#contact'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Contact
            </a>
          </div>
          {/* CTA Button */}
          <Button
            onClick={() => navigate('/auth')}
            className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
          >
            Get Started
          </Button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
