import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Minus,
  Calculator,
  Users,
  HardDrive,
  CreditCard,
  Check,
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import WaitlistModal from './WaitlistModal';

const PricingCalculator = () => {
  const [additionalUsers, setAdditionalUsers] = useState(0);
  const [additionalStorage, setAdditionalStorage] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  // Pricing plans
  const pricingPlans = [
    {
      name: 'Starter Plan',
      price: 0,
      credits: 500,
      users: 1,
      storage: 1,
      popular: false,
      features: [
        '1 team member',
        '1GB storage',
        'Basic AskLawLM access',
        'Community support',
        'Standard queries',
      ],
    },
    {
      name: 'Classic Plan',
      price: 45,
      credits: 3000,
      users: 3,
      storage: 50,
      popular: true,
      features: [
        '3 team members',
        '50GB storage',
        'All AskLawLM products',
        'Email support',
        'Advanced queries',
        'Basic analytics',
      ],
    },
    {
      name: 'Chamber Plan',
      price: 199,
      credits: 10000,
      users: 10,
      storage: 100,
      popular: false,
      features: [
        '10 team members',
        '100GB storage',
        'All AskLawLM products',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'API access',
      ],
    },
  ];

  // Additional pricing
  const userPrice = 39; // per additional user per month
  const storagePrice = 0.1; // per GB per month

  const calculateTotal = () => {
    const basePlan = pricingPlans[selectedPlan];
    const userCost = additionalUsers * userPrice;
    const storageCost = additionalStorage * storagePrice;
    return basePlan.price + userCost + storageCost;
  };

  const calculateCreditsUsage = () => {
    // Estimate credit usage based on team size and selected plan
    const basePlan = pricingPlans[selectedPlan];
    const baseCredits = basePlan.credits;
    const additionalCredits = additionalUsers * 1500; // 1500 credits per additional user
    return baseCredits + additionalCredits;
  };

  const getTotalUsers = () => {
    return pricingPlans[selectedPlan].users + additionalUsers;
  };

  const getTotalStorage = () => {
    return pricingPlans[selectedPlan].storage + additionalStorage;
  };

  return (
    <section className='py-20 px-6 sm:px-8 lg:px-12 '>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-left mb-16'>
          <Badge className='mb-4 bg-[#83a17d]/10 text-[#83a17d] border-[#83a17d]/20 hover:bg-transparent'>
            Credit-Based Pricing
          </Badge>
          <h2 className='text-3xl sm:text-4xl font-light text-[#0a0a0a] mb-4'>
            Transparent Pricing That Scales With You
          </h2>
          <p className='text-lg text-[#6b6b6b] max-w-2xl'>
            Pay only for what you use with our credit-based system. No hidden
            fees, no surprises. Scale your team and storage as your practice
            grows.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column - Pricing Plans */}
          <div>
            <h3 className='text-2xl font-medium text-[#0a0a0a] mb-8'>
              Choose Your Plan
            </h3>
            <div className='space-y-4'>
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedPlan === index
                      ? 'border-2 border-[#83a17d] bg-gradient-to-r from-[#83a17d]/5 to-[#bfceb4]/5'
                      : 'border border-gray-200 hover:border-[#83a17d]/50'
                  }`}
                  onClick={() => setSelectedPlan(index)}
                >
                  {plan.popular && (
                    <div className='absolute -top-3 left-6'>
                      <Badge className='bg-[#83a17d] text-white border-0'>
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className='p-6'>
                    <div className='flex items-center justify-between'>
                      {/* Left: Plan Info */}
                      <div className='flex items-center gap-4'>
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            selectedPlan === index
                              ? 'bg-gradient-to-br from-[#83a17d] to-[#bfceb4]'
                              : 'bg-gray-100'
                          }`}
                        >
                          <CreditCard
                            className={`h-6 w-6 ${
                              selectedPlan === index
                                ? 'text-white'
                                : 'text-gray-600'
                            }`}
                          />
                        </div>

                        <div>
                          <h4 className='text-lg font-medium text-[#0a0a0a] mb-1'>
                            {plan.name}
                          </h4>
                          <p className='text-sm text-[#6b6b6b]'>
                            {plan.credits.toLocaleString()} credits •{' '}
                            {plan.users} user{plan.users > 1 ? 's' : ''} •{' '}
                            {plan.storage}GB
                          </p>
                        </div>
                      </div>

                      {/* Right: Price */}
                      <div className='text-right flex-shrink-0'>
                        <div className='text-2xl font-light text-[#0a0a0a]'>
                          {plan.price === 0 ? 'Free' : `$${plan.price}`}
                          {plan.price > 0 && (
                            <span className='text-sm text-[#6b6b6b] font-normal'>
                              /mo
                            </span>
                          )}
                        </div>
                        {selectedPlan === index && (
                          <Badge
                            variant='outline'
                            className='mt-1 border-[#83a17d] text-[#83a17d] text-xs'
                          >
                            Selected
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className='mt-4 pt-4 border-t border-gray-100'>
                      <div className='grid grid-cols-1 gap-2'>
                        {plan.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className='flex items-center gap-2'
                            >
                              <Check className='h-3 w-3 text-[#83a17d] flex-shrink-0' />
                              <span className='text-xs text-[#6b6b6b]'>
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Pricing Calculator */}
          <div>
            <Card className='h-full'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <Calculator className='h-6 w-6 text-[#83a17d]' />
                  <CardTitle className='text-2xl font-medium text-[#0a0a0a]'>
                    Pricing Calculator
                  </CardTitle>
                </div>
                <CardDescription className='text-[#6b6b6b]'>
                  Customize your plan based on your team size and storage needs
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-8'>
                {/* Additional Users with Slider */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 mb-4'>
                    <Users className='h-5 w-5 text-[#6b6b6b]' />
                    <div className='flex-1'>
                      <h4 className='font-medium text-[#0a0a0a]'>
                        Additional Team Members
                      </h4>
                      <p className='text-sm text-[#6b6b6b]'>
                        ${userPrice}/month per user
                      </p>
                    </div>
                    <span className='text-lg font-medium text-[#0a0a0a] min-w-[3rem] text-right'>
                      {additionalUsers}
                    </span>
                  </div>

                  <div className='px-2'>
                    <Slider
                      value={[additionalUsers]}
                      onValueChange={(value) => setAdditionalUsers(value[0])}
                      max={50}
                      min={0}
                      step={1}
                      className='w-full'
                    />
                    <div className='flex justify-between text-xs text-[#6b6b6b] mt-2'>
                      <span>0 users</span>
                      <span>50 users</span>
                    </div>
                  </div>

                  <div className='text-right text-sm text-[#6b6b6b]'>
                    Total team members: {getTotalUsers()}
                  </div>
                </div>

                {/* Additional Storage with Slider */}
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 mb-4'>
                    <HardDrive className='h-5 w-5 text-[#6b6b6b]' />
                    <div className='flex-1'>
                      <h4 className='font-medium text-[#0a0a0a]'>
                        Additional Storage
                      </h4>
                      <p className='text-sm text-[#6b6b6b]'>
                        ${storagePrice}/GB per month
                      </p>
                    </div>
                    <span className='text-lg font-medium text-[#0a0a0a] min-w-[4rem] text-right'>
                      {additionalStorage}GB
                    </span>
                  </div>

                  <div className='px-2'>
                    <Slider
                      value={[additionalStorage]}
                      onValueChange={(value) => setAdditionalStorage(value[0])}
                      max={1000}
                      min={0}
                      step={10}
                      className='w-full'
                    />
                    <div className='flex justify-between text-xs text-[#6b6b6b] mt-2'>
                      <span>0GB</span>
                      <span>1000GB</span>
                    </div>
                  </div>

                  <div className='text-right text-sm text-[#6b6b6b]'>
                    Total storage: {getTotalStorage()}GB
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className='bg-gray-50 rounded-xl p-6 space-y-4'>
                  <h4 className='font-medium text-[#0a0a0a] mb-4'>
                    Monthly Pricing Summary
                  </h4>

                  <div className='space-y-3 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-[#6b6b6b]'>
                        {pricingPlans[selectedPlan].name}
                      </span>
                      <span className='font-medium'>
                        {pricingPlans[selectedPlan].price === 0
                          ? 'Free'
                          : `$${pricingPlans[selectedPlan].price}`}
                      </span>
                    </div>

                    {additionalUsers > 0 && (
                      <div className='flex justify-between'>
                        <span className='text-[#6b6b6b]'>
                          Additional users ({additionalUsers} × ${userPrice})
                        </span>
                        <span className='font-medium'>
                          ${additionalUsers * userPrice}
                        </span>
                      </div>
                    )}

                    {additionalStorage > 0 && (
                      <div className='flex justify-between'>
                        <span className='text-[#6b6b6b]'>
                          Additional storage ({additionalStorage}GB × $
                          {storagePrice})
                        </span>
                        <span className='font-medium'>
                          ${(additionalStorage * storagePrice).toFixed(2)}
                        </span>
                      </div>
                    )}

                    <div className='border-t pt-3 flex justify-between items-center'>
                      <span className='font-medium text-[#0a0a0a]'>
                        Total Monthly Cost
                      </span>
                      <span className='text-2xl font-medium text-[#0a0a0a]'>
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </div>

                    <div className='text-center text-sm text-[#6b6b6b] pt-2'>
                      Estimated monthly credits:{' '}
                      {calculateCreditsUsage().toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className='flex flex-col sm:flex-row gap-3'>
                  {/* <Button
                    className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white flex-1'
                    size='lg'
                  >
                    {pricingPlans[selectedPlan].price === 0
                      ? 'Start Free'
                      : 'Start Free Trial'}
                  </Button> */}
                  <Button
                    className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white flex-1 p-2'
                    size='lg'
                    onClick={() => setIsWaitlistModalOpen(true)}
                  >
                    Join our wailtlist
                  </Button>
                  <Button
                    variant='outline'
                    className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 flex-1 p-2'
                    size='lg'
                  >
                    <a
                      className='w-full h-full'
                      href='https://cal.com/asklawlm/30min'
                      target='_blank'
                    >
                      Contact Sales
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credit System Explanation */}
        <div className='mt-16 bg-[#0a0a0a] rounded-2xl p-8 md:p-12 text-white'>
          <div className='max-w-4xl mx-auto text-left'>
            <h3 className='text-2xl sm:text-3xl font-medium mb-6'>
              How Our Credit System Works
            </h3>
            <p className='text-gray-300 text-lg leading-relaxed mb-8'>
              Credits are consumed based on AI usage across all AskLawLM
              products. Simple document analysis uses fewer credits, while
              complex legal research and document drafting consume more. You
              only pay for what you actually use.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='text-3xl font-light text-white mb-2'>1-10</div>
                <p className='text-gray-400 text-sm'>
                  Credits for simple queries
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-light text-white mb-2'>
                  50-100
                </div>
                <p className='text-gray-400 text-sm'>
                  Credits for document analysis
                </p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-light text-white mb-2'>
                  200-500
                </div>
                <p className='text-gray-400 text-sm'>
                  Credits for complex drafting
                </p>
              </div>
            </div>
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

export default PricingCalculator;
