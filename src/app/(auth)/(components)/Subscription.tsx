'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface SubscriptionData {
  plan: string;
}

interface SubscriptionProps {
  onNext: (data: SubscriptionData) => void;
  onBack: () => void;
  onSkip: () => void;
  initialData?: SubscriptionData;
}

const FREE_TRIAL = {
  id: 'trial',
  name: 'Free Trial',
  duration: '5 days',
  credits: 1000,
  description: 'Try AskLaw-LM risk-free',
  features: [
    '1000 AI query credits',
    'Basic legal document generation',
    'Case law research access',
    'Standard support',
    'Basic legal templates',
    '10GB storage',
  ],
};

const PRO_PLAN = {
  id: 'pro',
  name: 'Professional',
  monthlyPrice: 79,
  credits: 5000,
  storage: 100,

  features: [
    'Document drafting & generation',
    'Document review & analysis',
    'Compliance guidance & monitoring',
    'Legal advice & consultation',
    'Legal discovery assistance',
    'Contract analysis & review',
  ],

  cta: 'Start Free Trial',
};

const Subscription: React.FC<SubscriptionProps> = ({
  onNext,
  onBack,
  onSkip,
}) => {
  const handleStartTrial = () => {
    onNext({ plan: 'trial' });
  };

  const handleUpgradePro = () => {
    onNext({ plan: 'pro' });
  };

  return (
    <div className='h-[90%] space-y-8 flex flex-col justify-between'>
      {/* Main Pricing Card */}
      <section className='flex flex-col gap-4'>
        <Card className='border border-gray-200 shadow-sm'>
          <CardContent className='p-8'>
            <div className='space-y-6'>
              {/* Price Display */}
              <div className='flex items-center gap-5'>
                <h1 className='text-[60px] font-bold text-[#83a17d]'>${PRO_PLAN.monthlyPrice} /</h1>
                <div className=''>
                  <div className='text-left'>
                    <p className='text-gray-500 text-[16px]'> 1 Solo user</p>
                    <p className='text-gray-400 text-[16px]'></p>
                    <p className='text-[20px] text-[#0a0a0a]'>
                      {PRO_PLAN.credits} credits • {PRO_PLAN.storage}GB storage
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className='space-y-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {PRO_PLAN.features.map((feature, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                      <Check className='w-4 h-4 text-green-600 flex-shrink-0' />
                      <span className='text-[14px] text-gray-700'>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-3'>
                <Button
                  onClick={handleStartTrial}
                  className='flex-1 h-12 bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white text-[16px] font-medium'
                >
                  Start {FREE_TRIAL.duration} Free Trial
                </Button>
                <Button
                  onClick={handleUpgradePro}
                  variant="outline"
                  className='flex-1 h-12 border-[#83a17d] text-[#83a17d] hover:bg-[#83a17d] hover:text-white text-[16px] font-medium'
                >
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Free Trial Highlight */}
        <div className='bg-[#83a17d]/10 text-[#83a17d] border border-[#83a17d]/20 rounded-lg p-4'>
          <div className='flex items-start space-x-3'>
            <div>
              <h4 className='font-medium text-[15px]'>
                {FREE_TRIAL.duration} Free Trial Includes:
              </h4>
              <div className='mt-2 grid grid-cols-3 gap-2'>
                {FREE_TRIAL.features.map((feature, index) => (
                  <div key={index} className='text-[13px] '>
                    • {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skip Button */}
      <div className='flex justify-between mt-6'>
        <Button
          type='button'
          variant='ghost'
          onClick={onSkip}
          className='text-gray-500 hover:text-gray-700 hover:bg-gray-50'
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
