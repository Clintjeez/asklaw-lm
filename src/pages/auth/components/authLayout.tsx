import React from 'react';

type Props = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }) => {
  return (
    <div className='h-screen flex bg-[#fbfbf9]'>
      <section className='w-[55%] p-5'>
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
        {children}
      </section>
      <section
        className='h-full w-[45%] bg-[#747373] relative '
        style={{
          backgroundImage: 'url("/tile_bg.svg")',
          backgroundRepeat: 'repeat',
          backgroundPosition: '0 0',
        }}
      >
        <div className='absolute inset-0 bg-[#0a0a0a]/80 text-white'>
          {/* <h1>ASKLAW LM</h1> */}
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
