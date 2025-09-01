import React, { useState } from 'react';
import VerificationInput from 'react-verification-input';

interface VerifyProps {
  emailAddress: string;
  onVerificationSuccess: () => void;
  onBackToSignup: () => void;
  onVerificationError: (message: string) => void;
  handleVerification: (code: string) => Promise<void>;
  loading: boolean;
  error: string;
}

const Verify = ({
  emailAddress,
  onVerificationSuccess,
  onBackToSignup,
  onVerificationError,
  handleVerification,
  loading,
  error
}: VerifyProps) => {
  const [code, setCode] = useState('');


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
                <div className='text-red-500 text-sm text-center'>
                  {error}
                </div>
              )}

              <div className='flex flex-col gap-3 mt-6'>
                <div className='flex gap-3 mt-6'>
                  <button
                    type='button'
                    onClick={onBackToSignup}
                    className='flex-1 border border-[#0a0a0a] text-[#0a0a0a] p-4 rounded-lg font-medium'
                    disabled={loading}
                  >
                    Back to Sign Up
                  </button>
                  <button
                    onClick={() => code.length === 6 && handleVerification(code)}
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
};

export default Verify;