import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import {
  Languages,
  Globe,
  FileText,
  Scale,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Users,
  BookOpen,
} from 'lucide-react';

const AskLawTranslate = () => {
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
                AskLawLM <span className='font-normal'>Translate</span>
              </h1>
              <p className='text-xl text-[#6b6b6b] mb-8 max-w-3xl mx-auto leading-relaxed'>
                Professional legal document translation with multilingual
                support, preserving legal accuracy and jurisdictional nuances.
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
                Precision translation for legal professionals
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Bridge language barriers while maintaining legal accuracy,
                terminology consistency, and jurisdictional compliance.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Legal-Specific Translation */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Scale className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Legal Terminology
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Specialized translation engine trained on legal documents with
                  accurate terminology across multiple practice areas.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Legal term recognition
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Practice area specialization
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Terminology consistency
                  </li>
                </ul>
              </div>

              {/* Multi-Language Support */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Languages className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  10+ Languages
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Comprehensive language support covering major legal systems
                  and jurisdictions worldwide with cultural context awareness.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Major world languages
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Regional dialects
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Cultural adaptation
                  </li>
                </ul>
              </div>

              {/* Document Format Preservation */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <FileText className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Format Preservation
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Maintain original document structure, formatting, and layout
                  while ensuring accurate translation of all content.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Layout preservation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Format integrity
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Table & chart handling
                  </li>
                </ul>
              </div>

              {/* Jurisdictional Awareness */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Globe className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Jurisdictional Context
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Understand and adapt to different legal systems, ensuring
                  translations align with local legal frameworks and practices.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Legal system awareness
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Local practice adaptation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Regulatory compliance
                  </li>
                </ul>
              </div>

              {/* Real-time Translation */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Zap className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Instant Translation
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Fast, accurate translations powered by advanced AI models
                  trained specifically for legal content and terminology.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Real-time processing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Batch translation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    API integration
                  </li>
                </ul>
              </div>

              {/* Confidential Translation */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>
                  Secure Translation
                </h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Maintain confidentiality and attorney-client privilege
                  throughout the translation process with secure processing.
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
                    Secure data handling
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
                Break language barriers in law
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Expand your practice globally with accurate, professional legal
                translations.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  10x Faster
                </h3>
                <p className='text-[#6b6b6b]'>
                  Complete translations in minutes instead of days with
                  AI-powered processing.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Target className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  99% Accuracy
                </h3>
                <p className='text-[#6b6b6b]'>
                  Achieve near-perfect translation accuracy with legal-specific
                  AI models.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>
                  Global Reach
                </h3>
                <p className='text-[#6b6b6b]'>
                  Serve clients worldwide with professional multilingual
                  capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6'>
              Expand your practice globally
            </h2>
            <p className='text-lg text-[#6b6b6b] mb-8 max-w-2xl mx-auto'>
              Join international law firms using AskLawLM Translate to serve
              clients across language barriers.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {/* <Button
                size='lg'
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
              >
                Start Translating
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

export default AskLawTranslate;
