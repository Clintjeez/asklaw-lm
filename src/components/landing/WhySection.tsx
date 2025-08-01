'use client';
import { MoveRight } from 'lucide-react';
import { Button } from '../ui/button';
import WaitlistModal from './WaitlistModal';
import { useState } from 'react';

const WhySection = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  return (
    <section className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 mb-8 sm:mb-12 md:mb-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24'>
      {/* Main Headline - Fully Responsive */}
      <h1 className='w-full max-w-none sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-[#0a0a0a] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] lg:leading-[4] tracking-tight mb-4 sm:mb-6 md:mb-8 text-left'>
        Why spend countless hours on legal research and contracts drafting in
        isolation when you can collaborate with AI that understands legal
        nuances and empowers your entire workflow to deliver exceptional legal
        practice?
      </h1>
      <div className='flex justify-start text-left'>
        <Button
          onClick={() => setIsWaitlistModalOpen(true)}
          className='lg:w-auto hover:bg-transparent h-auto leading-relaxed text-[10px] sm:text-sm md:text-xl bg-[#83a17d]/10 text-[#83a17d] border-[#83a17d]/20 flex items-center justify-center p-2 lg:p-4 gap-2 transition-all duration-300 group'
        >
          <MoveRight className='h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300' />
          <span>Join now to experience AI-powered legal teamwork.</span>
        </Button>
      </div>

      {/* Supporting Content - Hidden on mobile, visible on larger screens */}
      <div className='hidden md:block mt-12 lg:mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl'>
          <div className='text-center md:text-left'>
            <div className='text-2xl lg:text-3xl font-light text-[#0a0a0a] mb-2'>
              10x
            </div>
            <p className='text-sm lg:text-base text-[#6b6b6b]'>
              Faster legal research
            </p>
          </div>
          <div className='text-center md:text-left'>
            <div className='text-2xl lg:text-3xl font-light text-[#0a0a0a] mb-2'>
              24/7
            </div>
            <p className='text-sm lg:text-base text-[#6b6b6b]'>
              AI collaboration
            </p>
          </div>
          <div className='text-center md:text-left md:col-span-2 lg:col-span-1'>
            <div className='text-2xl lg:text-3xl font-light text-[#0a0a0a] mb-2'>
              100%
            </div>
            <p className='text-sm lg:text-base text-[#6b6b6b]'>
              Secure & confidential
            </p>
          </div>
        </div>
      </div>
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  );
};

export default WhySection;
