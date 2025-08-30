import React, { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await handleRedirectCallback();
        toast({
          title: 'Welcome!',
          description: 'You have successfully signed in.',
        });
        navigate('/dashboard');
      } catch (error) {
        console.error('Callback error:', error);
        toast({
          title: 'Authentication Error',
          description: 'Something went wrong during authentication. Please try again.',
          variant: 'destructive',
        });
        navigate('/auth/signup');
      }
    };

    handleCallback();
  }, [handleRedirectCallback, navigate, toast]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#fbfbf9]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0a0a0a] mx-auto mb-4"></div>
        <p className="text-lg">Completing your authentication...</p>
      </div>
    </div>
  );
};

export default AuthCallback;