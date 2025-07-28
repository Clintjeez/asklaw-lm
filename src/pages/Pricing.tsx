import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Check,
  X,
  Star,
  Users,
  Building,
  Crown,
  ArrowRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const Pricing = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      
      <main className='pt-16'>
        {/* Hero Section */}
        <section 
          className='relative py-20'
          style={{
            backgroundImage: 'url(/noisy.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        >
          {/* Gradient Overlay - Faded Version */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#83a17d] via-[#bfceb4] to-[#283128] opacity-20'></div>
          
          {/* Content Overlay */}
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl md:text-6xl font-light text-[#0a0a0a] leading-tight mb-6'>
                Simple, <span className='font-normal'>Transparent Pricing</span>
              </h1>
              <p className='text-xl text-[#6b6b6b] mb-8 max-w-3xl mx-auto leading-relaxed'>
                Choose the perfect plan for your legal practice. 
                All plans include enterprise-grade security and 24/7 support.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button 
                  size='lg' 
                  className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant='outline' 
                  size='lg' 
                  className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-8 py-3'
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid lg:grid-cols-3 gap-8'>
              
              {/* Starter Plan */}
              <div className='bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <Users className='h-5 w-5 text-blue-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-[#0a0a0a]'>Starter</h3>
                    <p className='text-sm text-[#6b6b6b]'>Perfect for solo practitioners</p>
                  </div>
                </div>
                
                <div className='mb-6'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-4xl font-bold text-[#0a0a0a]'>$49</span>
                    <span className='text-[#6b6b6b]'>/month</span>
                  </div>
                  <p className='text-sm text-[#6b6b6b] mt-1'>Billed annually or $59/month</p>
                </div>

                <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white mb-6'>
                  Start Free Trial
                </Button>

                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>1 User Account</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>AskLaw LM Index Access</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Basic Document Templates</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>5GB Storage</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Email Support</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <X className='h-4 w-4 text-gray-400' />
                    <span className='text-sm text-gray-400'>AskLaw LM Draft</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <X className='h-4 w-4 text-gray-400' />
                    <span className='text-sm text-gray-400'>AskLaw LM Translate</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <X className='h-4 w-4 text-gray-400' />
                    <span className='text-sm text-gray-400'>Advanced Analytics</span>
                  </div>
                </div>
              </div>

              {/* Professional Plan - Most Popular */}
              <div className='bg-white rounded-2xl border-2 border-[#0a0a0a] p-8 relative hover:shadow-lg transition-shadow'>
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <div className='bg-[#0a0a0a] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1'>
                    <Star className='h-3 w-3' />
                    Most Popular
                  </div>
                </div>
                
                <div className='flex items-center gap-3 mb-6 mt-2'>
                  <div className='w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center'>
                    <Building className='h-5 w-5 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-[#0a0a0a]'>Professional</h3>
                    <p className='text-sm text-[#6b6b6b]'>Ideal for small to medium firms</p>
                  </div>
                </div>
                
                <div className='mb-6'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-4xl font-bold text-[#0a0a0a]'>$149</span>
                    <span className='text-[#6b6b6b]'>/month</span>
                  </div>
                  <p className='text-sm text-[#6b6b6b] mt-1'>Billed annually or $179/month</p>
                </div>

                <Button className='w-full bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white mb-6'>
                  Start Free Trial
                </Button>

                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Up to 5 User Accounts</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>All AskLaw LM Solutions</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Advanced Document Templates</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>100GB Storage</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Priority Support</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Custom Knowledge Base</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Advanced Analytics</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>API Access</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className='bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center'>
                    <Crown className='h-5 w-5 text-amber-600' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold text-[#0a0a0a]'>Enterprise</h3>
                    <p className='text-sm text-[#6b6b6b]'>For large firms and organizations</p>
                  </div>
                </div>
                
                <div className='mb-6'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-4xl font-bold text-[#0a0a0a]'>Custom</span>
                  </div>
                  <p className='text-sm text-[#6b6b6b] mt-1'>Contact us for pricing</p>
                </div>

                <Button variant='outline' className='w-full border-[#0a0a0a] text-[#0a0a0a] hover:bg-gray-50 mb-6'>
                  Contact Sales
                </Button>

                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Unlimited User Accounts</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>All AskLaw LM Solutions</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Custom Integrations</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Unlimited Storage</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>24/7 Dedicated Support</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>White-label Options</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>Custom Analytics</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Check className='h-4 w-4 text-green-500' />
                    <span className='text-sm text-[#0a0a0a]'>SLA Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20 bg-slate-50'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-4'>
                Frequently asked questions
              </h2>
              <p className='text-lg text-[#6b6b6b]'>
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0a0a0a]">
                    Can I switch plans at any time?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#6b6b6b]">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated 
                    and reflected in your next billing cycle.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0a0a0a]">
                    Is there a free trial available?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#6b6b6b]">
                    Yes, we offer a 14-day free trial for all plans. No credit card required to start. 
                    You'll have full access to all features during the trial period.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0a0a0a]">
                    What payment methods do you accept?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#6b6b6b]">
                    We accept all major credit cards (Visa, MasterCard, American Express) and 
                    can arrange bank transfers for Enterprise customers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0a0a0a]">
                    Do you offer discounts for annual payments?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#6b6b6b]">
                    Yes, all plans include a discount when paid annually. You'll save approximately 
                    20% compared to monthly billing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold text-[#0a0a0a]">
                    Is my data secure?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-[#6b6b6b]">
                    Absolutely. All plans include enterprise-grade security with end-to-end encryption, 
                    SOC 2 compliance, and comprehensive audit trails. Your data is always protected.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Sales Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6'>
              Need a custom solution?
            </h2>
            <p className='text-lg text-[#6b6b6b] mb-8 max-w-2xl mx-auto'>
              Our Enterprise plan can be customized to meet your specific needs. 
              Get in touch with our sales team to discuss your requirements.
            </p>
            
            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='flex flex-col items-center p-6'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Phone className='h-6 w-6 text-white' />
                </div>
                <h3 className='font-semibold text-[#0a0a0a] mb-2'>Call Us</h3>
                <p className='text-[#6b6b6b] text-sm'>+1 (555) 123-4567</p>
              </div>
              
              <div className='flex flex-col items-center p-6'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Mail className='h-6 w-6 text-white' />
                </div>
                <h3 className='font-semibold text-[#0a0a0a] mb-2'>Email Us</h3>
                <p className='text-[#6b6b6b] text-sm'>sales@asklawlm.com</p>
              </div>
              
              <div className='flex flex-col items-center p-6'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Calendar className='h-6 w-6 text-white' />
                </div>
                <h3 className='font-semibold text-[#0a0a0a] mb-2'>Schedule</h3>
                <p className='text-[#6b6b6b] text-sm'>Book a consultation</p>
              </div>
            </div>

            <Button 
              size='lg' 
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
            >
              Contact Sales Team
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;