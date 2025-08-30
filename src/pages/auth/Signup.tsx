import React, { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaWindows, FaLinkedin } from 'react-icons/fa';
import VerificationInput from 'react-verification-input';
import AuthLayout from './components/authLayout';

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
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
        navigate('/dashboard');
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
      <div className='h-screen flex bg-[#fbfbf9]'>
        <section className='w-[55%] p-8'>
          <a href='#' className='flex items-center mb-5'>
            <img
              src='/asklawlm_logo.png'
              alt='AskLaw LM Logo'
              className='h-6 w-8 object-contain'
            />
            <h1 className='text-lg sm:text-xl font-medium text-[#0a0a0a] hover:text-[#2a2a2a] transition-colors'>
              AskLawLM
            </h1>
          </a>
          <div className='mt-5 p-10'>
            <div>
              <h2 className='text-[45px]'>Check Your Email</h2>
              <p className='text-[17px]'>
                We've sent a verification code to {emailAddress}. Enter the code
                below to complete your registration.
              </p>
            </div>

            <div className='mt-10'>
              <div className='flex flex-col gap-5'>
                <div className='w-full flex flex-col'>
                  <label className='text-[16px] mb-4'>Verification Code</label>
                  <div className='flex justify-center'>
                    <VerificationInput
                      length={6}
                      placeholder=''
                      validChars='0-9'
                      autoFocus
                      classNames={{
                        container: 'verification-container',
                        character:
                          'verification-character border border-[#0a0a0a] bg-transparent rounded-lg w-12 h-12 text-center text-[20px] font-medium',
                        characterInactive: 'verification-character--inactive',
                        characterSelected:
                          'verification-character--selected bg-[#f0f0f0]',
                      }}
                      onChange={(value) => {
                        setCode(value);
                        if (value.length === 6) {
                          handleVerification(value);
                        }
                      }}
                    />
                  </div>
                </div>

                {error && (
                  <div className='text-red-500 text-sm text-center'>
                    {error}
                  </div>
                )}

                <div className='flex gap-3 mt-6'>
                  <button
                    type='button'
                    onClick={() => setPendingVerification(false)}
                    className='flex-1 border border-[#0a0a0a] text-[#0a0a0a] p-4 rounded-lg font-medium'
                    disabled={loading}
                  >
                    Back to Sign Up
                  </button>
                  <button
                    onClick={() =>
                      code.length === 6 && handleVerification(code)
                    }
                    disabled={loading || code.length !== 6}
                    className='flex-1 bg-[#0a0a0a] text-white p-4 rounded-lg font-medium disabled:opacity-50'
                  >
                    {loading ? 'Verifying...' : 'Verify Account'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='h-full w-[45%] bg-[#747373] relative '
          style={{
            backgroundImage: 'url("/tile_bg.svg")',
            backgroundRepeat: 'repeat',
            backgroundPosition: '0 0',
          }}
        >
          <div className='absolute inset-0 bg-[#0a0a0a]/80 text-white'></div>
        </section>
      </div>
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
              <Link to='/signin' className='text-[#83a17d] hover:underline'>
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
