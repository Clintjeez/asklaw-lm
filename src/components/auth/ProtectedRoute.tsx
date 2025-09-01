
import React from 'react';
import { useAuth as useClerkAuth } from '@clerk/nextjs';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

const ProtectedRoute = ({ children, fallback }: ProtectedRouteProps) => {
  const { isLoaded: clerkLoaded, isSignedIn: clerkSignedIn } = useClerkAuth();

  if (!clerkLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfbf9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0a0a0a] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return clerkSignedIn ? <>{children}</> : <>{fallback}</>;
};

export default ProtectedRoute;
