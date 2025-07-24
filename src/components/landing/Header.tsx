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

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  return (
    <header className='fixed top-0 left-0 right-0 z-50  backdrop-blur-sm'>
      <nav className='max-w-10xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <h1 className='text-xl font-semibold text-[#0a0a0a]'>AskLaw LM</h1>
        </div>

        {/* Navigation Items */}
        <section className='flex gap-10 justify-center items-center'>
          <div className='hidden md:flex items-center space-x-8'>
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
          {/* CTA Button or User Menu */}
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
        </section>
      </nav>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
