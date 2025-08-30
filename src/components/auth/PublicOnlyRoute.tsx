import React from 'react';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

interface PublicOnlyRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PublicOnlyRoute = ({ children, redirectTo = '/dashboard' }: PublicOnlyRouteProps) => {
  const { isLoaded, isSignedIn } = useClerkAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfbf9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0a0a0a] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is authenticated, redirect them to dashboard
  if (isSignedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  // If not authenticated, show the auth page
  return <>{children}</>;
};

export default PublicOnlyRoute;