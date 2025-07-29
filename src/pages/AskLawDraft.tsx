import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import {
  PenTool,
  FileText,
  Eye,
  RefreshCw,
  CheckSquare,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  Award,
  Users,
} from 'lucide-react';

const AskLawDraft = () => {
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
                AskLawLM <span className='font-normal'>Draft</span>
              </h1>
              <p className='text-xl text-[#6b6b6b] mb-8 max-w-3xl mx-auto leading-relaxed'>
                Your intelligent legal reasoning assistant for document
                drafting, review, and analysis with AI-powered legal expertise.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
                >
                  Contact Sales
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-8 py-3'
                >
                  Join Waitlist
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
                Draft with confidence and precision
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Create, review, and perfect legal documents with AI-powered
                reasoning and comprehensive legal analysis.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Smart Drafting */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <PenTool className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  AI-Powered Drafting
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Generate sophisticated legal documents with AI assistance
                  tailored to your specific practice areas and jurisdictions.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Context-aware generation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Practice area templates
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Jurisdiction-specific language
                  </li>
                </ul>
              </div>

              {/* Document Review */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Eye className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Intelligent Review
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Comprehensive document analysis with risk assessment, clause
                  optimization, and compliance checking.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Risk identification
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Clause analysis
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Compliance verification
                  </li>
                </ul>
              </div>

              {/* Legal Reasoning */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <FileText className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Legal Reasoning Engine
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Advanced legal reasoning capabilities that understand context,
                  precedent, and legal principles for accurate drafting.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Precedent integration
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Legal principle application
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Contextual understanding
                  </li>
                </ul>
              </div>

              {/* Version Control */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <RefreshCw className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Smart Revisions
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Track changes, manage versions, and collaborate seamlessly
                  with intelligent revision suggestions and comments.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Version tracking
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Collaborative editing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Change suggestions
                  </li>
                </ul>
              </div>

              {/* Quality Assurance */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <CheckSquare className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Quality Control
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Automated quality checks, consistency verification, and best
                  practice recommendations for professional documents.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Consistency checks
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Best practice alerts
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Format validation
                  </li>
                </ul>
              </div>

              {/* Secure Drafting */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Secure Environment
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Draft confidential documents with complete security,
                  maintaining attorney-client privilege and data protection.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    End-to-end encryption
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Privilege protection
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Secure collaboration
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
                Draft better documents faster
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Enhance your document quality while reducing drafting time with
                AI assistance.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  60% Faster Drafting
                </h3>
                <p className='text-[#6b6b6b]'>
                  Accelerate document creation with AI-powered drafting
                  assistance.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <TrendingUp className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  85% Fewer Errors
                </h3>
                <p className='text-[#6b6b6b]'>
                  Reduce mistakes with intelligent review and quality control
                  systems.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  Higher Quality
                </h3>
                <p className='text-[#6b6b6b]'>
                  Produce more sophisticated documents with AI legal reasoning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6'>
              Transform your document drafting
            </h2>
            <p className='text-lg text-[#6b6b6b] mb-8 max-w-2xl mx-auto'>
              Join legal professionals who have elevated their drafting
              capabilities with AskLawLM Draft.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {/* <Button
                size='lg'
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
              >
                Start Drafting Now
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button> */}
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

export default AskLawDraft;
