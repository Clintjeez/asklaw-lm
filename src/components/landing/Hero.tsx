import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LLmInterface from '../llm-Interface/LLm-Interface';
import AuthModal from '@/components/auth/AuthModal';
const Hero = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <main className='flex-1 flex items-center pt-16'>
      <div className='w-full flex h-full'>
        {/* Left Column - Marketing Content (30%) */}
        <div className='w-[30%] flex flex-col justify-center px-12'>
          {/* Hero Headline */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-[#0a0a0a] leading-[0.9] tracking-tight mb-6'>
            AI-Powered
            <br />
            <span className='font-normal'>Legal Research</span>
          </h1>

          {/* Hero Subtext */}
          <p className='text-lg text-[#6b6b6b] mb-8 leading-relaxed'>
            Transform your legal research with intelligent document analysis,
            case law discovery, and collaborative knowledge management.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col gap-3'>
            <Button
              onClick={() => setIsAuthModalOpen(true)}
              size='lg'
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-3 text-base rounded-lg transition-colors w-fit'
            >
              Start Researching
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-6 py-3 text-base rounded-lg transition-colors w-fit'
              onClick={() => {
                document
                  .getElementById('features')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Column - LLM Interface (70%) */}
        <div
          className='w-[70%] flex items-center justify-center px-12 min-h-[calc(100vh-4rem)] rounded-tl-3xl rounded-bl-3xl relative'
          style={{
            backgroundImage: 'url(/noisy.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        >
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#83a17d] via-[#bfceb4] to-[#283128] rounded-tl-3xl rounded-bl-3xl opacity-90'></div>

          {/* Content */}
          <LLmInterface />
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </main>
  );
};

export default Hero;
