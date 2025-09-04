'use client';
import React, { useState } from 'react';
import VerificationInput from 'react-verification-input';
import Onboarding from './Onboarding';
import { useToast } from '@/hooks/use-toast';
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import AuthLayout from './AuthLayout';

interface VerifyProps {
  emailAddress: string;
}

interface ClerkError {
  errors: Array<{ message: string }>;
}

const Verify = ({ emailAddress }: VerifyProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [onVerified, setOnVerified] = useState(false);

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
        setOnVerified(true);
        toast({
          title: 'Success!',
          description: 'Your account has been created successfully.',
        });
        // router.push('/dashboard');
      } else {
        toast({
          title: 'Error1',
          description: 'Verification failed, please try again',
        });
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

  if (onVerified) {
    return <Onboarding />;
  }

  return (
    <AuthLayout>
      <section className='p-8 mt-4'>
        <div className='mt-5'>
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
                <label className='text-[16px] text-center mb-4'>
                  Verification Code
                </label>
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
                    onChange={(value: string) => {
                      setCode(value);
                      if (value.length === 6) {
                        handleVerification(value);
                      }
                    }}
                  />
                </div>
              </div>

              {error && (
                <div className='text-red-500 text-sm text-center'>{error}</div>
              )}

              <div className='flex flex-col gap-3 mt-6'>
                <div className='flex gap-3 mt-6'>
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
        </div>
      </section>
    </AuthLayout>
  );
};

export default Verify;
