import { Brain, Search, FileText, Users, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'AskLawLM Workspace',
      description:
        'Complete workspace for legal practice management and operations. Streamline case management, client communications, and administrative tasks in one unified platform.',
    },
    {
      icon: Search,
      title: 'AskLawLM Research',
      description:
        "AI-powered research assistant with custom knowledge base. Search through case law, statutes, and your firm's proprietary documents with intelligent query understanding.",
    },
    {
      icon: FileText,
      title: 'AskLawLM Draft',
      description:
        'Legal reasoning assistant for document drafting and reviews. Generate contracts, briefs, and legal documents with AI assistance tailored to your practice area.',
    },
    {
      icon: Brain,
      title: 'AskLawLM Intelligence',
      description:
        'Advanced AI analysis and insights for complex legal matters. Extract key information and identify patterns across large document sets.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-grade encryption and security protocols to protect your sensitive legal information and client data across all AskLawLM products.',
    },
    {
      icon: Zap,
      title: 'Collaborative AI',
      description:
        'Get answers and insights in seconds, not hours. Accelerate your legal workflow with intelligent automation.',
    },
  ];

  return (
    <section className='py-16 px-6 sm:px-8 lg:px-12 mb-8 sm:mb-12 md:mb-20'>
      {/* Bento Grid */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]'>
        {/* Large Feature - AskLawLM Workspace */}
        <div className='lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#83a17d] to-[#bfceb4] p-8 text-white hover:scale-[1.02] transition-all duration-300'>
          <div className='relative z-10'>
            <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
              <Users className='h-8 w-8 text-white' />
            </div>
            <h3 className='text-xl lg:text-2xl font-medium mb-4'>
              {features[0].title}
            </h3>
            <p className='text-white/90 leading-relaxed text-lg'>
              {features[0].description}
            </p>
          </div>
          <div className='absolute inset-0 bg-gradient-to-br from-black/10 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>

        {/* Medium Feature - AskLawLM Research */}
        <div className='lg:col-span-2 group p-6 rounded-2xl bg-gradient-to-br from-[#83a17d] to-[#bfceb4] border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300'>
          <div className='flex flex-col lg:flex-row items-start gap-4'>
            <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <Search className='h-6 w-6 text-white' />
            </div>
            <div className='flex-1'>
              <h3 className='text-xl font-medium text-white mb-3'>
                {features[1].title}
              </h3>
              <p className='text-white leading-relaxed'>
                {features[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Small Feature - AskLawLM Draft */}
        <div className='group p-6 rounded-2xl bg-gradient-to-br from-[#83a17d] to-[#bfceb4] border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300'>
          <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
            <FileText className='h-6 w-6 text-white' />
          </div>
          <h3 className='text-lg font-medium text-white mb-2'>
            {features[2].title}
          </h3>
          <p className='text-white text-sm leading-relaxed'>
            Legal reasoning assistant for document drafting and reviews.
          </p>
        </div>

        {/* Small Feature - AskLawLM Intelligence */}
        <div className='group p-6 rounded-2xl bg-gradient-to-br from-[#83a17d] to-[#bfceb4] border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300'>
          <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
            <Brain className='h-6 w-6 text-white' />
          </div>
          <h3 className='text-lg font-medium text-white mb-2'>
            {features[3].title}
          </h3>
          <p className='text-white text-sm leading-relaxed'>
            Advanced AI analysis and insights for complex legal matters.
          </p>
        </div>

        {/* Wide Feature - Collaborative AI */}
        <div className='lg:col-span-4 group p-8 rounded-2xl bg-[#0a0a0a] text-white border border-gray-700/50 hover:border-[#83a17d]/30 hover:shadow-lg transition-all duration-300 '>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10'>
            <div className='flex-1'>
              <h3 className='text-2xl font-medium text-white mb-3'>
                {features[5].title}
              </h3>
              <p className='text-gray-300 text-lg leading-relaxed max-w-2xl'>
                {features[5].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
