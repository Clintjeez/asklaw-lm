import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { supabase } from '@/integrations/supabase/client';
import WaitlistModal from '@/components/landing/WaitlistModal';
import AuthModal from '@/components/auth/AuthModal';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[#fbfbf963] backdrop-blur-sm'>
      <nav className='max-w-8xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div
          className='flex items-center gap-1 cursor-pointer'
          onClick={() => navigate('/')}
        >
          <img
            src='/asklawlm_logo.png'
            alt='AskLaw LM Logo'
            className='h-6 w-8 object-contain'
          />
          <h1 className='text-lg sm:text-xl font-semibold text-[#0a0a0a] hover:text-[#2a2a2a] transition-colors'>
            AskLawLM
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <div className='flex items-center space-x-8'>
            <a
              href='#why'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Why AskLawLM
            </a>
            <a
              href='#features'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Features
            </a>
            <a
              href='#security'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Security
            </a>
            <a
              href='#pricing'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Pricing
            </a>
            <a
              href='#faq'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              FAQ
            </a>
            {/* <a
              href='#'
              onClick={() => setIsAuthModalOpen(true)}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Login
            </a> */}
          </div>

          {/* Desktop CTA Button or User Menu */}
          {isAuthenticated ? (
            <div className='flex items-center gap-3'>
              <Button
                onClick={() => navigate('/dashboard')}
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
              >
                Dashboard
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className='h-8 w-8 cursor-pointer'>
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback className='bg-[#0a0a0a] text-white'>
                      {user?.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button
              onClick={() => setIsWaitlistModalOpen(true)}
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
            >
              Join Waitlist
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className='lg:hidden flex items-center gap-4'>
          {/* Mobile CTA/User for authenticated users */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className='h-8 w-8 cursor-pointer'>
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback className='bg-[#0a0a0a] text-white'>
                    {user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-56'>
                <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={() => setIsWaitlistModalOpen(true)}
              size='sm'
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors'
            >
              Join Waitlist
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='p-2'
          >
            {isMobileMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white border-b border-gray-100 shadow-lg'>
          <div className='px-4 py-4 space-y-4'>
            <a
              href='#why'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Why AskLawLM
            </a>
            <a
              href='#features'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Features
            </a>
            <a
              href='#security'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Security
            </a>
            <a
              href='#pricing'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Pricing
            </a>
            <a
              href='#faq'
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              FAQ
            </a>
            {/* Mobile Resources Dropdown */}

            {/* <a
              href='#'
              onClick={() => {
                setIsAuthModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Login
            </a> */}
          </div>
        </div>
      )}

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;
