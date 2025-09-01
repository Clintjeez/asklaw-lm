import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import WaitlistModal from './WaitlistModal';
import AuthModal from '@/components/auth/AuthModal';

interface CTASectionProps {
  variant?: 'primary' | 'secondary';
  title: string;
  subtitle: string;
  benefits?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const CTASection = ({
  variant = 'primary',
  title,
  subtitle,
  benefits,
  primaryButtonText = 'Get Started',
  secondaryButtonText = 'Join Waitlist',
}: CTASectionProps) => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const isPrimary = variant === 'primary';

  return (
    <section
      className={`py-20 px-6 sm:px-8 lg:px-12 ${
        isPrimary ? 'bg-[#0a0a0a]' : 'bg-gray-50'
      }`}
    >
      <div className='max-w-4xl mx-auto text-center'>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-light mb-6 ${
            isPrimary ? 'text-white' : 'text-[#0a0a0a]'
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${
            isPrimary ? 'text-gray-300' : 'text-[#6b6b6b]'
          }`}
        >
          {subtitle}
        </p>

        {benefits && (
          <div className='mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 ${
                    isPrimary ? 'text-gray-300' : 'text-[#6b6b6b]'
                  }`}
                >
                  <CheckCircle
                    className={`h-5 w-5 flex-shrink-0 ${
                      isPrimary ? 'text-green-400' : 'text-green-600'
                    }`}
                  />
                  <span className='text-sm'>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            onClick={() => setIsWaitlistModalOpen(true)}
            size='lg'
            className={`px-8 py-4 text-base rounded-lg transition-all group ${
              isPrimary
                ? 'bg-white text-[#0a0a0a] hover:bg-gray-100'
                : 'bg-[#0a0a0a] text-white hover:bg-[#2a2a2a]'
            }`}
          >
            {primaryButtonText}
            <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
          </Button>
        </div>
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;
