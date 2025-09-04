'use client';
import React, { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaWindows, FaLinkedin } from 'react-icons/fa';
import AuthLayout from '../(components)/AuthLayout';

interface ClerkError {
  errors: Array<{ message: string }>;
}

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <div className='flex items-center justify-center h-screen'>
        Loading...
      </div>
    );
  }

  const handleSocialSignIn = async (
    strategy: 'oauth_google' | 'oauth_microsoft' | 'oauth_linkedin'
  ) => {
    if (!signIn) return;

    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: '/auth/callback',
        redirectUrlComplete: '/dashboard',
      });
    } catch (error: unknown) {
      console.error('Social sign in error:', error);
      const clerkError = error as ClerkError;
      toast({
        title: 'Sign In Error',
        description:
          clerkError?.errors?.[0]?.message ||
          'An error occurred during social sign in',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || loading) return;

    setLoading(true);
    setError('');

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        toast({
          title: 'Welcome back!',
          description: 'You have successfully signed in.',
        });
        router.push('/dashboard');
      }
    } catch (error: unknown) {
      console.error('Sign in error:', error);
      const clerkError = error as ClerkError;
      setError(
        clerkError?.errors?.[0]?.message || 'An error occurred during sign in'
      );
      toast({
        title: 'Sign In Error',
        description:
          clerkError?.errors?.[0]?.message ||
          'An error occurred during sign in',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <section className='h-[93%] flex flex-col justify-between'>
        <div className='mt-4 p-8'>
          <div>
            <h2 className='text-[45px]'>Welcome Back.</h2>
            <p className='text-[15px]'>
              Enter your credentials to access your account.
            </p>
            <div className='flex gap-2 text-[15px] mt-1'>
              <span>Don't have an account?</span>
              <Link
                href='/signup'
                className='text-[#83a17d] font-bold hover:underline'
              >
                Sign up
              </Link>
            </div>
          </div>

          <div className='mt-10'>
            <div className='flex gap-5 mt-10'>
              <button
                type='button'
                onClick={() => handleSocialSignIn('oauth_google')}
                className='w-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white p-3 rounded-lg font-medium text-[14px] flex justify-center items-center gap-4 transition-colors'
              >
                <FcGoogle className='w-5 h-5' />
                <span>Signin with Google</span>
              </button>
              <button
                type='button'
                onClick={() => handleSocialSignIn('oauth_microsoft')}
                className='w-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white p-3 rounded-lg font-medium text-[14px] flex justify-center items-center gap-4 transition-colors'
              >
                <FaWindows className='w-5 h-5' />
                <span>Signin with Microsoft</span>
              </button>
              <button
                type='button'
                onClick={() => handleSocialSignIn('oauth_linkedin')}
                className='w-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white p-3 rounded-lg font-medium text-[14px] flex justify-center items-center gap-4 transition-colors'
              >
                <FaLinkedin className='w-5 h-5 text-[#0077b5]' />
                <span>Signin with LinkedIn</span>
              </button>
            </div>
            <div className='flex justify-center items-center gap-4 my-7'>
              <div className='h-[1px] w-full border border-[#0a0a0a] ' />
              <h2>Or</h2>
              <div className='h-[1px] w-full border border-[#0a0a0a] ' />
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div className=''>
                {error && (
                  <div className=' text-red-500 text-sm p-3 my-1 bg-red-50 rounded-lg'>
                    {error}
                  </div>
                )}
              </div>

              <div className='w-full flex flex-col mt-2'>
                <label htmlFor='email' className='text-[16px] mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className='w-full border border-[#0a0a0a] bg-transparent rounded-lg p-3 text-[16px]'
                  placeholder='Enter your email address'
                  required
                />
              </div>

              <div className='w-full flex flex-col'>
                <label htmlFor='password' className='text-[16px] mb-2'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border border-[#0a0a0a] bg-transparent rounded-lg p-3 pr-10 text-[16px]'
                    placeholder='Enter your password'
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className='flex justify-end'>
                <Link
                  href='/forgot-password'
                  className='text-[#83a17d] text-[14px] hover:underline'
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type='submit'
                disabled={loading}
                className='bg-[#0a0a0a] text-white p-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>

        <div className='flex justify-center mt-3'>
          <div className='flex gap-4 text-[#6b6b6baa]'>
            <a href=''>Terms of Service</a>
            <p>|</p>
            <a href=''>Privacy Policy</a>
            <p>|</p>
            <a href=''>Faq's</a>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Signin;