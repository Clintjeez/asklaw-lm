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
import AuthModal from '@/components/auth/AuthModal';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100'>
      <nav className='max-w-8xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <h1 
            className='text-lg sm:text-xl font-semibold text-[#0a0a0a] cursor-pointer hover:text-[#2a2a2a] transition-colors'
            onClick={() => navigate('/')}
          >
            AskLaw LM
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <div className='flex items-center space-x-8'>
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='flex items-center gap-1 text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'>
                  Solutions
                  <ChevronDown className='h-4 w-4' />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-[30rem] p-4'>
                <div className='grid grid-cols-2 gap-4'>
                  {/* Column 1 */}
                  <div className='space-y-4'>
                    <DropdownMenuItem className='p-3 h-auto' onClick={() => navigate('/ops')}>
                      <div className='flex flex-col gap-1'>
                        <span className='font-medium text-[#0a0a0a]'>
                          AskLawLM Ops
                        </span>
                        <span className='text-sm text-[#6b6b6b]'>
                          Workspace for legal practice management and operations
                        </span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='p-3 h-auto' onClick={() => navigate('/index')}>
                      <div className='flex flex-col gap-1'>
                        <span className='font-medium text-[#0a0a0a]'>
                          AskLawLM Index
                        </span>
                        <span className='text-sm text-[#6b6b6b]'>
                          Research assistant, custom knowledgebase
                        </span>
                      </div>
                    </DropdownMenuItem>
                  </div>

                  {/* Column 2 */}
                  <div className='space-y-4'>
                    <DropdownMenuItem className='p-3 h-auto' onClick={() => navigate('/draft')}>
                      <div className='flex flex-col gap-1'>
                        <span className='font-medium text-[#0a0a0a]'>
                          AskLawLM Draft
                        </span>
                        <span className='text-sm text-[#6b6b6b]'>
                          Legal reasoning assistant for documents draft and
                          reviews
                        </span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='p-3 h-auto' onClick={() => navigate('/translate')}>
                      <div className='flex flex-col gap-1'>
                        <span className='font-medium text-[#0a0a0a]'>
                          AskLawLM Translate
                        </span>
                        <span className='text-sm text-[#6b6b6b]'>
                          Legal document translation and multilingual support
                        </span>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href='#'
              onClick={() => navigate('/security')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Security
            </a>
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='flex items-center gap-1 text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'>
                  Company
                  <ChevronDown className='h-4 w-4' />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-48'>
                <DropdownMenuItem className='p-3' onClick={() => navigate('/about')}>
                  <div>
                    <span className='font-medium text-[#0a0a0a]'>About</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className='p-3' onClick={() => navigate('/careers')}>
                  <div>
                    <span className='font-medium text-[#0a0a0a]'>Careers</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className='p-3' onClick={() => navigate('/changelog')}>
                  <div>
                    <span className='font-medium text-[#0a0a0a]'>Changelog</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href='#'
              onClick={() => navigate('/pricing')}
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors cursor-pointer'
            >
              Pricing
            </a>
            <a
              href='#contact'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Resources
            </a>
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
              onClick={() => setIsAuthModalOpen(true)}
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
            >
              Get Started
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
              onClick={() => setIsAuthModalOpen(true)}
              size='sm'
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors'
            >
              Get Started
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
            {/* Mobile Solutions Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className='flex items-center justify-between w-full text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isMobileSolutionsOpen && (
                <div className='ml-4 mt-2 space-y-3'>
                  <div className='py-2 cursor-pointer' onClick={() => {
                    navigate('/ops');
                    setIsMobileMenuOpen(false);
                    setIsMobileSolutionsOpen(false);
                  }}>
                    <div className='font-medium text-[#0a0a0a] text-sm'>
                      AskLaw LM Ops
                    </div>
                    <div className='text-xs text-[#6b6b6b] mt-1'>
                      Workspace for legal practice management and operations
                    </div>
                  </div>
                  <div className='py-2 cursor-pointer' onClick={() => {
                    navigate('/index');
                    setIsMobileMenuOpen(false);
                    setIsMobileSolutionsOpen(false);
                  }}>
                    <div className='font-medium text-[#0a0a0a] text-sm'>
                      AskLaw LM Index
                    </div>
                    <div className='text-xs text-[#6b6b6b] mt-1'>
                      Research assistant, custom knowledgebase
                    </div>
                  </div>
                  <div className='py-2 cursor-pointer' onClick={() => {
                    navigate('/draft');
                    setIsMobileMenuOpen(false);
                    setIsMobileSolutionsOpen(false);
                  }}>
                    <div className='font-medium text-[#0a0a0a] text-sm'>
                      AskLaw LM Draft
                    </div>
                    <div className='text-xs text-[#6b6b6b] mt-1'>
                      Legal reasoning assistant for documents draft and reviews
                    </div>
                  </div>
                  <div className='py-2 cursor-pointer' onClick={() => {
                    navigate('/translate');
                    setIsMobileMenuOpen(false);
                    setIsMobileSolutionsOpen(false);
                  }}>
                    <div className='font-medium text-[#0a0a0a] text-sm'>
                      AskLaw LM Translate
                    </div>
                    <div className='text-xs text-[#6b6b6b] mt-1'>
                      Legal document translation and multilingual support
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href='#'
              onClick={() => {
                navigate('/security');
                setIsMobileMenuOpen(false);
              }}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Security
            </a>
            {/* Mobile Company Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                className='flex items-center justify-between w-full text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
              >
                Company
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileCompanyOpen && (
                <div className='ml-4 mt-2 space-y-2'>
                  <div 
                    className='py-2 cursor-pointer'
                    onClick={() => {
                      navigate('/about');
                      setIsMobileMenuOpen(false);
                      setIsMobileCompanyOpen(false);
                    }}
                  >
                    <div className='font-medium text-[#0a0a0a] text-sm'>About</div>
                  </div>
                  <div 
                    className='py-2 cursor-pointer'
                    onClick={() => {
                      navigate('/careers');
                      setIsMobileMenuOpen(false);
                      setIsMobileCompanyOpen(false);
                    }}
                  >
                    <div className='font-medium text-[#0a0a0a] text-sm'>Careers</div>
                  </div>
                  <div 
                    className='py-2 cursor-pointer'
                    onClick={() => {
                      navigate('/changelog');
                      setIsMobileMenuOpen(false);
                      setIsMobileCompanyOpen(false);
                    }}
                  >
                    <div className='font-medium text-[#0a0a0a] text-sm'>Changelog</div>
                  </div>
                </div>
              )}
            </div>
            <a
              href='#'
              onClick={() => {
                navigate('/pricing');
                setIsMobileMenuOpen(false);
              }}
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2 cursor-pointer'
            >
              Pricing
            </a>
            <a
              href='#contact'
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </a>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;
