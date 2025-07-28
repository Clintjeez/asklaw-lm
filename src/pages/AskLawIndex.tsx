import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import { 
  Search,
  BookOpen,
  Database,
  Brain,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  FileSearch,
  Lightbulb
} from 'lucide-react';

const AskLawIndex = () => {
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
                AskLaw LM <span className='font-normal'>Index</span>
              </h1>
              <p className='text-xl text-[#6b6b6b] mb-8 max-w-3xl mx-auto leading-relaxed'>
                Your intelligent research assistant with custom knowledge bases, 
                advanced search capabilities, and AI-powered legal insights.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button 
                  size='lg' 
                  className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
                >
                  Start Research
                </Button>
                <Button 
                  variant='outline' 
                  size='lg' 
                  className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-8 py-3'
                >
                  View Demo
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
                Intelligent legal research redefined
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Build custom knowledge bases and conduct research with AI-powered 
                precision across all legal domains.
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Custom Knowledge Base */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Database className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Custom Knowledge Base</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Build and maintain personalized knowledge repositories with 
                  your firm's precedents, templates, and expertise.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Firm-specific databases
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Document categorization
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Smart tagging system
                  </li>
                </ul>
              </div>

              {/* Advanced Search */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Search className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Semantic Search</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Find relevant information using natural language queries with 
                  context-aware search across all legal documents.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Natural language queries
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Contextual understanding
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Relevance ranking
                  </li>
                </ul>
              </div>

              {/* Case Law Research */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <BookOpen className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Case Law Discovery</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Comprehensive case law research with AI-powered analysis 
                  and precedent identification across jurisdictions.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Multi-jurisdiction search
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Precedent analysis
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Citation networks
                  </li>
                </ul>
              </div>

              {/* AI Insights */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Brain className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>AI-Powered Insights</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Get intelligent summaries, key findings, and strategic 
                  recommendations from your research results.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Automated summaries
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Key point extraction
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Strategic insights
                  </li>
                </ul>
              </div>

              {/* Real-time Updates */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Zap className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Live Legal Updates</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Stay current with real-time legal developments, new case law, 
                  and regulatory changes in your practice areas.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Real-time notifications
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Practice area alerts
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Regulatory tracking
                  </li>
                </ul>
              </div>

              {/* Secure Research */}
              <div className='p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-[#0a0a0a] rounded-lg flex items-center justify-center mb-4'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-[#0a0a0a] mb-2'>Confidential Research</h3>
                <p className='text-[#6b6b6b] mb-4'>
                  Conduct sensitive research with complete confidentiality 
                  and attorney-client privilege protection.
                </p>
                <ul className='text-sm text-[#6b6b6b] space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Private research sessions
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Encrypted data
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-green-500' />
                    Access controls
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
                Research faster, discover more
              </h2>
              <p className='text-lg text-[#6b6b6b] max-w-2xl mx-auto'>
                Transform your research workflow with intelligent tools that deliver precise results.
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Clock className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>75% Faster Research</h3>
                <p className='text-[#6b6b6b]'>
                  Reduce research time with AI-powered search and automated insights.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Target className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>90% More Accurate</h3>
                <p className='text-[#6b6b6b]'>
                  Find the most relevant precedents with semantic search and AI analysis.
                </p>
              </div>

              <div className='text-center'>
                <div className='w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Lightbulb className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-semibold text-[#0a0a0a] mb-2'>Deeper Insights</h3>
                <p className='text-[#6b6b6b]'>
                  Uncover hidden connections and strategic opportunities in your research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-light text-[#0a0a0a] mb-6'>
              Revolutionize your legal research
            </h2>
            <p className='text-lg text-[#6b6b6b] mb-8 max-w-2xl mx-auto'>
              Join legal professionals who have transformed their research 
              capabilities with AskLaw LM Index.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button 
                size='lg' 
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-8 py-3'
              >
                Start Your Research
                <ArrowRight className='ml-2 h-4 w-4' />
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
        </section>
      </main>
    </div>
  );
};

export default AskLawIndex;