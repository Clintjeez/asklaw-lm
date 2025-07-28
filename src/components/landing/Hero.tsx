import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LLmInterface from '../llm-Interface/LLm-Interface';
import AuthModal from '@/components/auth/AuthModal';
import WaitlistModal from './WaitlistModal';
const Hero = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <main className='flex-1 flex items-center pt-16'>
      <div className='w-full flex flex-col lg:flex-row h-full'>
        {/* Left Column - Marketing Content */}
        <div className='w-full lg:w-[30%] flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-0'>
          {/* Hero Headline */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0a0a0a] leading-[0.9] tracking-tight mb-6 text-center lg:text-left'>
            AI-Powered
            <br />
            <span className='font-normal'>Legal Assistant</span>
          </h1>

          {/* Hero Subtext */}
          <p className='text-base sm:text-lg text-[#6b6b6b] mb-8 leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0'>
            Transform your legal research with intelligent document analysis,
            case law discovery, and collaborative knowledge management.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 items-center lg:items-start'>
            <Button
              onClick={() => setIsAuthModalOpen(true)}
              size='lg'
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-3 text-base rounded-lg transition-colors w-full sm:w-fit'
            >
              Get Started
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-6 py-3 text-base rounded-lg transition-colors w-full sm:w-fit'
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Right Column - LLM Interface */}
        <div
          className='w-full lg:w-[70%] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 lg:py-0 min-h-[60vh] lg:min-h-[calc(100vh-4rem)] rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl relative'
          style={{
            backgroundImage: 'url(/noisy.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        >
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#83a17d] via-[#bfceb4] to-[#283128] rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl opacity-90'></div>

          {/* Content */}
          <LLmInterface />
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      
      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </main>
  );
};

export default Hero;
