import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import { 
  Calendar,
  Users,
  FileText,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Briefcase
} from 'lucide-react';

const AskLawOps = () => {
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
                AskLaw LM <span className='font-normal'>Ops</span>
              </h1>
              <p className='text-xl text-[#6b6b6b] mb-8 max-w-3xl mx-auto leading-relaxed'>
                Streamline your legal practice with intelligent workspace management, 
                client operations, and automated workflows designed for modern law firms.
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

        {/* Key Features Section */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-4'>
                Everything you need to run your practice
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                From client management to billing automation, AskLaw LM Ops provides 
                a comprehensive workspace for legal professionals.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Client Management */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Client Management</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Centralized client database with contact information, case history, 
                  and communication tracking.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Contact management
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Case tracking
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Communication logs
                  </li>
                </ul>
              </div>

              {/* Calendar & Scheduling */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Calendar className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Smart Scheduling</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Intelligent calendar management with automated scheduling, 
                  deadline tracking, and court date management.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Automated scheduling
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Deadline reminders
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Court calendar sync
                  </li>
                </ul>
              </div>

              {/* Document Management */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <FileText className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Document Workflows</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Secure document storage, version control, and automated 
                  workflow management for legal documents.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Version control
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Template library
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    E-signature integration
                  </li>
                </ul>
              </div>

              {/* Time Tracking & Billing */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Clock className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Time & Billing</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Automated time tracking, expense management, and 
                  streamlined billing processes.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Automatic time capture
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Expense tracking
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Invoice automation
                  </li>
                </ul>
              </div>

              {/* Analytics & Reporting */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <BarChart3 className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Practice Analytics</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Comprehensive reporting and analytics to optimize 
                  your practice performance and profitability.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Revenue insights
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Performance metrics
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Custom dashboards
                  </li>
                </ul>
              </div>

              {/* Compliance & Security */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Security & Compliance</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Bank-level security with built-in compliance tools 
                  for legal industry regulations.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    End-to-end encryption
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Audit trails
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Compliance monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 bg-slate-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-4'>
                Transform your practice operations
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                See measurable improvements in efficiency, client satisfaction, and profitability.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <DollarSign className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>35% Revenue Increase</h3>
                <p className='text-[#6b6b6b]'>
                  Average revenue growth through improved billing accuracy and time tracking.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>40% Time Savings</h3>
                <p className='text-[#6b6b6b]'>
                  Reduce administrative overhead with automated workflows and processes.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Briefcase className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>95% Client Satisfaction</h3>
                <p className='text-[#6b6b6b]'>
                  Deliver exceptional client experience with streamlined communication and service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6'>
              Ready to modernize your practice?
            </h2>
            <p className='text-lg text-[#6b6b6b] mb-8 max-w-2xl mx-auto'>
              Join thousands of legal professionals who have transformed their 
              operations with AskLaw LM Ops.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button 
                size='lg' 
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
              >
                Start Your Free Trial
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
              <Button 
                variant='outline' 
                size='lg' 
                className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-8 py-3'
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AskLawOps;