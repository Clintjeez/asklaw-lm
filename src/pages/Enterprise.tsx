import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Shield,
  Users,
  Building,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react';

const Enterprise = () => {
  return (
    <div className='min-h-screen bg-[#fbfbf9]'>
      <Header />

      <main className='pt-16'>
        {/* Hero Section - Minimalist & Bold */}
        <section className='py-32 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-[#0a0a0a] leading-tight mb-8'>
              Enterprise
              <span className='block text-4xl md:text-6xl font-light text-[#6b6b6b] mt-4'>
                Legal Intelligence
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-[#6b6b6b] mb-12 max-w-3xl mx-auto leading-relaxed font-light'>
              Scalable AI-powered legal solutions designed for large
              organizations, law firms, and enterprise teams.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <Button
                size='lg'
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-12 py-4 text-lg font-medium'
              >
                Schedule Demo
                <Calendar className='ml-2 h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white px-12 py-4 text-lg font-medium'
              >
                Contact Sales
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className='py-20 bg-slate-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6'>
                Built for Enterprise Scale
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Comprehensive legal AI platform with enterprise-grade security,
                compliance, and scalability.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Enterprise Security */}
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6'>
                  <Shield className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-4'>
                  Enterprise Security
                </h3>
                <p className='text-[#6b6b6b] mb-6'>
                  Bank-level security with SOC 2 Type II compliance, end-to-end
                  encryption, and advanced access controls.
                </p>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      SOC 2 Type II Certified
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      GDPR & HIPAA Compliant
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Advanced Audit Trails
                    </span>
                  </li>
                </ul>
              </div>

              {/* Scale & Performance */}
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6'>
                  <Zap className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-4'>
                  Scale & Performance
                </h3>
                <p className='text-[#6b6b6b] mb-6'>
                  Handle thousands of users and documents with 99.9% uptime and
                  lightning-fast response times.
                </p>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Unlimited Users
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      99.9% Uptime SLA
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>Global CDN</span>
                  </li>
                </ul>
              </div>

              {/* Team Management */}
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6'>
                  <Users className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-4'>
                  Advanced Team Management
                </h3>
                <p className='text-[#6b6b6b] mb-6'>
                  Sophisticated user management, role-based access controls, and
                  team collaboration features.
                </p>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Role-based Access
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      SSO Integration
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Department Management
                    </span>
                  </li>
                </ul>
              </div>

              {/* Custom Integration */}
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6'>
                  <Building className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-4'>
                  Custom Integration
                </h3>
                <p className='text-[#6b6b6b] mb-6'>
                  Seamlessly integrate with your existing legal tech stack and
                  enterprise systems.
                </p>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>API Access</span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Webhook Support
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Custom Workflows
                    </span>
                  </li>
                </ul>
              </div>

              {/* Global Support */}
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6'>
                  <Globe className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-4'>
                  Global Support
                </h3>
                <p className='text-[#6b6b6b] mb-6'>
                  24/7 dedicated support with guaranteed response times and
                  priority assistance for enterprise clients.
                </p>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      24/7 Priority Support
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Dedicated Success Manager
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Training & Onboarding
                    </span>
                  </li>
                </ul>
              </div>

              {/* Compliance & Governance */}
              <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-xl flex items-center justify-center mb-6'>
                  <CheckCircle className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-4'>
                  Compliance & Governance
                </h3>
                <p className='text-[#6b6b6b] mb-6'>
                  Built-in compliance tools and governance features to meet
                  regulatory requirements across jurisdictions.
                </p>
                <ul className='space-y-3'>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Regulatory Compliance
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Data Governance
                    </span>
                  </li>
                  <li className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-green-500 flex-shrink-0' />
                    <span className='text-sm text-[#6b6b6b]'>
                      Policy Management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-6'>
                Frequently Asked Questions
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Get answers to common questions about AskLawLM Enterprise
                solutions.
              </p>
            </div>

            <Accordion type='single' collapsible className='w-full space-y-4'>
              <AccordionItem
                value='item-1'
                className='bg-white rounded-lg shadow-sm border-0'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <span className='text-lg font-semibold text-[#0a0a0a]'>
                    What makes AskLawLM Enterprise different from other legal AI
                    platforms?
                  </span>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-[#6b6b6b]'>
                    AskLawLM Enterprise is specifically designed for large-scale
                    legal operations with enterprise-grade security, unlimited
                    scalability, and deep customization options. Unlike generic
                    AI tools, our platform is trained exclusively on legal data
                    and maintains attorney-client privilege throughout all
                    interactions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-2'
                className='bg-white rounded-lg shadow-sm border-0'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <span className='text-lg font-semibold text-[#0a0a0a]'>
                    How does the pricing work for Enterprise plans?
                  </span>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-[#6b6b6b]'>
                    Enterprise pricing is customized based on your
                    organization's size, usage requirements, and specific
                    feature needs. We offer volume discounts and flexible
                    payment terms including annual contracts. Contact our sales
                    team for a personalized quote tailored to your requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-3'
                className='bg-white rounded-lg shadow-sm border-0'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <span className='text-lg font-semibold text-[#0a0a0a]'>
                    What security certifications does AskLawLM have?
                  </span>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-[#6b6b6b]'>
                    We maintain SOC 2 Type II certification, are GDPR compliant,
                    and HIPAA ready. Our infrastructure uses bank-level
                    encryption, advanced access controls, and comprehensive
                    audit trails. We undergo regular third-party security audits
                    and maintain detailed compliance documentation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-4'
                className='bg-white rounded-lg shadow-sm border-0'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <span className='text-lg font-semibold text-[#0a0a0a]'>
                    Can AskLawLM integrate with our existing legal technology
                    stack?
                  </span>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-[#6b6b6b]'>
                    Yes, AskLawLM Enterprise offers comprehensive API access,
                    webhook support, and pre-built integrations with major legal
                    software platforms. Our technical team works with your IT
                    department to ensure seamless integration with your existing
                    workflows and systems.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-5'
                className='bg-white rounded-lg shadow-sm border-0'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <span className='text-lg font-semibold text-[#0a0a0a]'>
                    What kind of support do Enterprise customers receive?
                  </span>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-[#6b6b6b]'>
                    Enterprise customers receive 24/7 priority support with
                    guaranteed response times, a dedicated customer success
                    manager, comprehensive onboarding and training programs, and
                    direct access to our product development team for feature
                    requests and feedback.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-6'
                className='bg-white rounded-lg shadow-sm border-0'
              >
                <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                  <span className='text-lg font-semibold text-[#0a0a0a]'>
                    How quickly can we get started with Enterprise deployment?
                  </span>
                </AccordionTrigger>
                <AccordionContent className='px-6 pb-4'>
                  <p className='text-[#6b6b6b]'>
                    Typical Enterprise deployment takes 2-4 weeks depending on
                    customization requirements and integration complexity. This
                    includes initial setup, data migration, team training, and
                    go-live support. We provide a detailed implementation
                    timeline during the initial consultation phase.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20 bg-[#0a0a0a] text-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Ready to Transform Your Enterprise?
            </h2>
            <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
              Connect with our enterprise team to discuss your specific
              requirements and get a personalized demonstration.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <Button
                size='lg'
                className='bg-white hover:bg-gray-100 text-[#0a0a0a] px-8 py-4 text-lg font-medium'
              >
                <Phone className='mr-2 h-5 w-5' />
                Schedule Call
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-2 border-white text-white hover:bg-white hover:text-[#0a0a0a] px-8 py-4 text-lg font-medium'
              >
                <Mail className='mr-2 h-5 w-5' />
                Email Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Enterprise;
