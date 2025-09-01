'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    // Handle authentication callback
    const handleCallback = async () => {
      try {
        // In a real implementation, you would handle the auth provider callback here
        // For now, just redirect to dashboard
        router.push('/dashboard');
      } catch (error) {
        console.error('Authentication callback error:', error);
        router.push('/');
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfbf9]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0a0a0a] mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
};

export default AuthCallback;