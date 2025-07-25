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
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <h1 className='text-lg sm:text-xl font-semibold text-[#0a0a0a]'>AskLaw LM</h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <div className='flex items-center space-x-8'>
            <a
              href='#features'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Features
            </a>
            <a
              href='#about'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              About
            </a>
            <a
              href='#contact'
              className='text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors'
            >
              Contact
            </a>
          </div>
          
          {/* Desktop CTA Button or User Menu */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate('/dashboard')}
                className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-6 py-2 rounded-lg transition-colors'
              >
                Dashboard
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={user?.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-[#0a0a0a] text-white">
                      {user?.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
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
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback className="bg-[#0a0a0a] text-white">
                    {user?.email?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
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
              size="sm"
              className='bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white px-4 py-2 rounded-lg transition-colors'
            >
              Get Started
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white border-b border-gray-100 shadow-lg'>
          <div className='px-4 py-4 space-y-4'>
            <a
              href='#features'
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href='#about'
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href='#contact'
              className='block text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-2'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
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
