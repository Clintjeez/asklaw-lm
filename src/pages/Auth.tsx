import AuthForm from '@/components/auth/AuthForm';
import Logo from '@/components/ui/Logo';

const Auth = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: 'url(/noisy.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#83a17d] via-[#bfceb4] to-[#283128] opacity-90"></div>
      
      {/* Content */}
      <div className="w-full max-w-lg relative z-10">
        {/* Glassmorphism Wrapper */}
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-2xl">
          {/* Auth Content */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Logo size="lg" />
              </div>
              <h1 className="text-3xl font-bold text-[#0a0a0a] mb-2">AskLaw LM</h1>
              <p className="text-[#6b6b6b]">Your AI-powered legal knowledge companion</p>
            </div>
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;