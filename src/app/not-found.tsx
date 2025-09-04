'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, FileX } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';

export default function NotFound() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className='min-h-screen bg-[#fbfbf9] flex flex-col'>
      {/* Header */}
      <header className='p-5'>
        <Link href='/' className='flex items-center mb-5'>
          <img
            src='/asklawlm_logo.png'
            alt='AskLaw LM Logo'
            className='h-6 w-8 object-contain'
          />
          <h1 className='text-lg sm:text-xl font-medium text-[#0a0a0a] hover:text-[#2a2a2a] transition-colors'>
            AskLawLM
          </h1>
        </Link>
      </header>

      {/* Main Content */}
      <main className='flex-1 flex items-center justify-center px-4 sm:px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          {/* 404 Icon */}
          <div className='mb-8'>
            <div className='mx-auto w-24 h-24 bg-[#0a0a0a]/10 rounded-full flex items-center justify-center mb-6'>
              <FileX className='w-12 h-12 text-[#6b6b6b]' />
            </div>
            <h1 className='text-6xl sm:text-8xl font-bold text-[#0a0a0a] mb-4'>
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className='mb-12'>
            <h2 className='text-2xl sm:text-3xl font-semibold text-[#0a0a0a] mb-4'>
              Page Not Found
            </h2>
            <p className='text-[#6b6b6b] text-lg leading-relaxed max-w-lg mx-auto'>
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <Button
              onClick={() => router.back()}
              variant='outline'
              className='flex items-center gap-2 px-6 py-3 border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors'
            >
              <ArrowLeft className='w-4 h-4' />
              Go Back
            </Button>
            
            <Link href='/'>
              <Button className='flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] hover:bg-[#2a2a2a] text-white transition-colors'>
                <Home className='w-4 h-4' />
                Back to Home
              </Button>
            </Link>

            {isLoaded && isSignedIn && (
              <Link href='/dashboard'>
                <Button 
                  variant='outline'
                  className='flex items-center gap-2 px-6 py-3 border-[#83a17d] text-[#83a17d] hover:bg-[#83a17d] hover:text-white transition-colors'
                >
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>

          {/* Helpful Links */}
          <div className='border-t border-[#0a0a0a]/10 pt-8'>
            <p className='text-[#6b6b6b] mb-4'>Need help? Try these popular pages:</p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Link
                href='/#features'
                className='text-[#83a17d] hover:text-[#0a0a0a] transition-colors underline'
              >
                Features
              </Link>
              <Link
                href='/#pricing'
                className='text-[#83a17d] hover:text-[#0a0a0a] transition-colors underline'
              >
                Pricing
              </Link>
              <Link
                href='/#faq'
                className='text-[#83a17d] hover:text-[#0a0a0a] transition-colors underline'
              >
                FAQ
              </Link>
              {!isSignedIn && (
                <>
                  <Link
                    href='/signin'
                    className='text-[#83a17d] hover:text-[#0a0a0a] transition-colors underline'
                  >
                    Sign In
                  </Link>
                  <Link
                    href='/signup'
                    className='text-[#83a17d] hover:text-[#0a0a0a] transition-colors underline'
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='p-5'>
        <div className='flex justify-center'>
          <div className='flex gap-4 text-[#6b6b6baa] text-sm'>
            <a href='#' className='hover:text-[#0a0a0a] transition-colors'>Terms of Service</a>
            <span>|</span>
            <a href='#' className='hover:text-[#0a0a0a] transition-colors'>Privacy Policy</a>
            <span>|</span>
            <a href='#' className='hover:text-[#0a0a0a] transition-colors'>FAQ's</a>
          </div>
        </div>
      </footer>
    </div>
  );
}