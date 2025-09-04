'use client';
import React, { useState } from 'react';
import { useSignIn } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Eye, EyeOff } from 'lucide-react';
import AuthLayout from '../(components)/AuthLayout';

interface ClerkError {
  errors: Array<{ message: string }>;
}

const ForgotPassword = () => {
  const { isLoaded, signIn } = useSignIn();
  const [emailAddress, setEmailAddress] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
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

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || loading) return;

    setLoading(true);
    setError('');

    try {
      const firstFactor = await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: emailAddress,
      });

      setPendingVerification(true);
      toast({
        title: 'Reset code sent!',
        description: 'Please check your email for the password reset code.',
      });
    } catch (error: unknown) {
      console.error('Password reset request error:', error);
      const clerkError = error as ClerkError;
      setError(
        clerkError?.errors?.[0]?.message || 'Failed to send reset email'
      );
      toast({
        title: 'Reset Error',
        description:
          clerkError?.errors?.[0]?.message || 'Failed to send reset email',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || loading) return;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await signIn.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      });

      if (result.status === 'complete') {
        toast({
          title: 'Password reset successful!',
          description: 'Your password has been updated. You are now signed in.',
        });
        router.push('/dashboard');
      }
    } catch (error: unknown) {
      console.error('Password reset error:', error);
      const clerkError = error as ClerkError;
      setError(
        clerkError?.errors?.[0]?.message || 'Failed to reset password'
      );
      toast({
        title: 'Reset Error',
        description:
          clerkError?.errors?.[0]?.message || 'Failed to reset password',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification) {
    return (
      <AuthLayout>
        <section className='h-[93%] flex flex-col justify-between'>
          <div className='mt-4 p-8'>
            <div>
              <div className='flex items-center mb-6'>
                <button
                  onClick={() => setPendingVerification(false)}
                  className='mr-3 p-1 hover:bg-gray-100 rounded-full'
                >
                  <ArrowLeft className='h-5 w-5 text-[#6b6b6b]' />
                </button>
                <h2 className='text-[45px]'>Reset Password.</h2>
              </div>
              <p className='text-[15px]'>
                We've sent a verification code to <strong>{emailAddress}</strong>. 
                Enter the code below and set your new password.
              </p>
            </div>

            <div className='mt-10'>
              <form onSubmit={handleResetPassword} className='flex flex-col gap-5'>
                <div className=''>
                  {error && (
                    <div className=' text-red-500 text-sm p-3 my-1 bg-red-50 rounded-lg'>
                      {error}
                    </div>
                  )}
                </div>

                <div className='w-full flex flex-col mt-2'>
                  <label htmlFor='code' className='text-[16px] mb-2'>
                    Verification Code
                  </label>
                  <input
                    type='text'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className='w-full border border-[#0a0a0a] bg-transparent rounded-lg p-3 text-[16px]'
                    placeholder='Enter verification code'
                    required
                  />
                </div>

                <div className='w-full flex gap-5'>
                  <div className='w-full flex flex-col'>
                    <label htmlFor='password' className='text-[16px] mb-2'>
                      New Password
                    </label>
                    <div className='relative'>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full border border-[#0a0a0a] bg-transparent rounded-lg p-3 pr-10 text-[16px]'
                        placeholder='Enter new password'
                        minLength={8}
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
                  <div className='w-full flex flex-col'>
                    <label htmlFor='confirmPassword' className='text-[16px] mb-2'>
                      Confirm Password
                    </label>
                    <div className='relative'>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='w-full border border-[#0a0a0a] bg-transparent rounded-lg p-3 pr-10 text-[16px]'
                        placeholder='Confirm new password'
                        minLength={8}
                        required
                      />
                      <button
                        type='button'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  className='bg-[#0a0a0a] text-white p-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {loading ? 'Resetting Password...' : 'Reset Password'}
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
  }

  return (
    <AuthLayout>
      <section className='h-[93%] flex flex-col justify-between'>
        <div className='mt-4 p-8'>
          <div>
            <div className='flex items-center mb-6'>
              <Link
                href='/signin'
                className='mr-3 p-1 hover:bg-gray-100 rounded-full'
              >
                <ArrowLeft className='h-5 w-5 text-[#6b6b6b]' />
              </Link>
              <h2 className='text-[45px]'>Reset Password.</h2>
            </div>
            <p className='text-[15px]'>
              Enter your email address and we'll send you a verification code to reset your password.
            </p>
            <div className='flex gap-2 text-[15px] mt-1'>
              <span>Remember your password?</span>
              <Link
                href='/signin'
                className='text-[#83a17d] font-bold hover:underline'
              >
                Sign in
              </Link>
            </div>
          </div>

          <div className='mt-10'>
            <form onSubmit={handleRequestReset} className='flex flex-col gap-5'>
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
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#6b6b6b]' />
                  <input
                    type='email'
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className='w-full border border-[#0a0a0a] bg-transparent rounded-lg p-3 pl-11 text-[16px]'
                    placeholder='Enter your email address'
                    required
                  />
                </div>
              </div>

              <button
                type='submit'
                disabled={loading}
                className='bg-[#0a0a0a] text-white p-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? 'Sending Reset Code...' : 'Send Reset Code'}
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

export default ForgotPassword;