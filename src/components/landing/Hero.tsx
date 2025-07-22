import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className='flex-1 flex items-center pt-16'>
      <div className='w-full flex h-full'>
        {/* Left Column - Marketing Content (30%) */}
        <div className='w-[30%] flex flex-col justify-center px-12'>
          {/* Hero Headline */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-[#0a0a0a] leading-[0.9] tracking-tight mb-6'>
            AI-Powered
            <br />
            <span className='font-normal'>Legal Research</span>
          </h1>

          {/* Hero Subtext */}
          <p className='text-lg text-[#6b6b6b] mb-8 leading-relaxed'>
            Transform your legal research with intelligent document analysis,
            case law discovery, and collaborative knowledge management.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col gap-3'>
            <Button
              onClick={() => navigate('/auth')}
              size='lg'
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-3 text-base rounded-lg transition-colors w-fit'
            >
              Start Researching
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-[#6b6b6b] text-[#6b6b6b] hover:bg-gray-50 px-6 py-3 text-base rounded-lg transition-colors w-fit'
              onClick={() => {
                document
                  .getElementById('features')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Column - LLM Interface (70%) */}
        <div
          className='w-[70%] flex items-center justify-center px-12 min-h-[calc(100vh-4rem)] rounded-tl-3xl rounded-bl-3xl relative'
          style={{
            backgroundImage: 'url(/noisy.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
          }}
        >
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#83a17d] via-[#bfceb4] to-[#283128] rounded-tl-3xl rounded-bl-3xl opacity-90'></div>

          {/* Content */}
          <div className='w-full max-w-2xl relative z-10'>
            {/* Glassmorphism Wrapper */}
            <div className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-1 shadow-2xl'>
              {/* LLM Input Interface */}
              <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden'>
                {/* Large Textarea Input */}
                <div className='p-6'>
                  <div className='relative'>
                    <textarea
                      placeholder='Ask me anything about legal research, case law analysis, document review, or complex legal questions...'
                      className='w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:border-transparent text-base leading-relaxed'
                      rows={8}
                      style={{ minHeight: '240px' }}
                    />
                    <button className='absolute bottom-4 right-4 p-3 bg-[#0a0a0a] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors'>
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                        />
                      </svg>
                    </button>
                  </div>
                  <div className='flex items-center justify-between mt-4 text-sm text-[#6b6b6b]'>
                    <span>AI-powered legal research assistant</span>
                    <span>Press Ctrl+Enter to send</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
