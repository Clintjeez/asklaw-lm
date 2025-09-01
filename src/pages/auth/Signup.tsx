import React, { useState } from 'react';
import { useSignUp } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaWindows, FaLinkedin } from 'react-icons/fa';
import AuthLayout from './components/authLayout';
import Verify from './Verify';

interface ClerkError {
  errors: Array<{ message: string }>;
}

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const handleSocialSignUp = async (
    strategy: 'oauth_google' | 'oauth_microsoft' | 'oauth_linkedin'
  ) => {
    if (!signUp) return;

    try {
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: '/auth/callback',
        redirectUrlComplete: '/dashboard',
      });
    } catch (error: unknown) {
      console.error('Social sign up error:', error);
      const clerkError = error as ClerkError;
      toast({
        title: 'Sign Up Error',
        description:
          clerkError?.errors?.[0]?.message ||
          'An error occurred during social sign up',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      setPendingVerification(true);
      toast({
        title: 'Verification Required',
        description: 'Please check your email for the verification code.',
      });
    } catch (error: unknown) {
      console.error('Sign up error:', error);
      const clerkError = error as ClerkError;
      setError(
        clerkError?.errors?.[0]?.message || 'An error occurred during sign up'
      );
      toast({
        title: 'Sign Up Error',
        description:
          clerkError?.errors?.[0]?.message ||
          'An error occurred during sign up',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerification = async (verificationCode: string) => {
    if (!isLoaded || !signUp) return;

    setLoading(true);
    setError('');

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        toast({
          title: 'Success!',
          description: 'Your account has been created successfully.',
        });
        router.push('/dashboard');
      } else {
        console.error('Sign up not complete:', completeSignUp);
      }
    } catch (error: unknown) {
      console.error('Verification error:', error);
      const clerkError = error as ClerkError;
      setError(clerkError?.errors?.[0]?.message || 'Invalid verification code');
      toast({
        title: 'Verification Error',
        description:
          clerkError?.errors?.[0]?.message || 'Invalid verification code',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification) {
    return (
      <Verify
        emailAddress={emailAddress}
        onVerificationSuccess={() => {
          toast({
            title: 'Success!',
            description: 'Your account has been created successfully.',
          });
          router.push('/dashboard');
        }}
        onBackToSignup={() => setPendingVerification(false)}
        onVerificationError={(message: string) => {
          setError(message);
          toast({
            title: 'Verification Error',
            description: message,
            variant: 'destructive',
          });
        }}
        handleVerification={handleVerification}
        loading={loading}
        error={error}
      />
    );
  }

  return (
    <AuthLayout>
      <section>
        <div className='mt-4 p-8'>
          <div>
            <h2 className='text-[45px]'>Get Sarted Now.</h2>
            <p className='text-[17px]'>
              Enter your credentials to setup your account now.
            </p>
            <div className='flex gap-2 text-[15px] mt-1'>
              <span>Have an account?</span>
              <Link href='/signin' className='text-[#83a17d] hover:underline'>
                Sign in
              </Link>
            </div>
          </div>

          <div className='mt-10'>
            <div className='flex gap-5 mt-10'>
              <button
                type='button'
                onClick={() => handleSocialSignUp('oauth_google')}
                className='w-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white p-3 rounded-lg font-medium text-[14px] flex justify-center items-center gap-4 transition-colors'
              >
                <FcGoogle className='w-5 h-5' />
                <span>Signup with Google</span>
              </button>
              <button
                type='button'
                onClick={() => handleSocialSignUp('oauth_microsoft')}
                className='w-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white p-3 rounded-lg font-medium text-[14px] flex justify-center items-center gap-4 transition-colors'
              >
                <FaWindows className='w-5 h-5' />
                <span>Signup with Microsoft</span>
              </button>
              <button
                type='button'
                onClick={() => handleSocialSignUp('oauth_linkedin')}
                className='w-full border border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white p-3 rounded-lg font-medium text-[14px] flex justify-center items-center gap-4 transition-colors'
              >
                <FaLinkedin className='w-5 h-5 text-[#0077b5]' />
                <span>Signup with LinkedIn</span>
              </button>
            </div>
            <div className='flex justify-center items-center gap-4 my-10'>
              <div className='h-[1px] w-full border border-[#0a0a0a] ' />
              <h2>Or</h2>
              <div className='h-[1px] w-full border border-[#0a0a0a] ' />
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              {error && (
                <div className='text-red-500 text-sm p-3 bg-red-50 rounded-lg'>
                  {error}
                </div>
              )}

              <div className='w-full flex flex-col'>
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
              <div className='w-full flex gap-5'>
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
                      placeholder='Enter your confirm password'
                      minLength={8}
                      required
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type='submit'
                disabled={loading}
                className='bg-[#0a0a0a] text-white p-4 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? 'Creating Account...' : 'Sign up'}
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

export default Signup;
