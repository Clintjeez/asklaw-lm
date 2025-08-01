import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import NotebookGrid from '@/components/dashboard/NotebookGrid';
import EmptyDashboard from '@/components/dashboard/EmptyDashboard';
import ChatInterface from '@/components/dashboard/ChatInterface';
import { useNotebooks } from '@/hooks/useNotebooks';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, loading: authLoading, error: authError } = useAuth();
  const { notebooks, isLoading, error, isError } = useNotebooks();
  const hasNotebooks = notebooks && notebooks.length > 0;

  // Show loading while auth is initializing
  if (authLoading) {
    return (
      <div className='min-h-screen bg-gray-50 flex'>
        <Sidebar userEmail={user?.email} />
        <main className='flex-1 lg:ml-0'>
          <div className='p-8'>
            <div className='mb-8'>
              <h1 className='text-4xl font-medium text-gray-900 mb-2'>
                Welcome to AskLawLM
              </h1>
            </div>
            <div className='text-center py-16'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4'></div>
              <p className='text-gray-600'>Initializing...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show auth error if present
  if (authError) {
    return (
      <div className='min-h-screen bg-gray-50 flex'>
        <Sidebar userEmail={user?.email} />
        <main className='flex-1 lg:ml-0'>
          <div className='p-8'>
            <div className='mb-8'>
              <h1 className='text-4xl font-medium text-gray-900 mb-2'>
                Welcome to AskLawLM
              </h1>
            </div>
            <div className='text-center py-16'>
              <p className='text-red-600'>Authentication error: {authError}</p>
              <button
                onClick={() => window.location.reload()}
                className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              >
                Retry
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show notebooks loading state
  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-50 flex'>
        <Sidebar userEmail={user?.email} />
        <main className='flex-1 lg:ml-0'>
          <div className='p-8'>
            <div className='mb-8'>
              <h1 className='text-4xl font-medium text-gray-900 mb-2'>
                Welcome to AskLawLM
              </h1>
            </div>
            <div className='text-center py-16'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4'></div>
              <p className='text-gray-600'>Loading your notebooks...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Show notebooks error if present
  if (isError && error) {
    return (
      <div className='min-h-screen bg-gray-50 flex'>
        <Sidebar userEmail={user?.email} />
        <main className='flex-1 lg:ml-0'>
          <div className='p-8'>
            <div className='mb-8'>
              <h1 className='text-3xl font-medium text-gray-900 mb-2'>
                Welcome to AskLawLM
              </h1>
            </div>
            <div className='text-center py-16'>
              <p className='text-red-600'>Error loading notebooks: {error}</p>
              <button
                onClick={() => window.location.reload()}
                className='mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              >
                Retry
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#fbfbf9] flex'>
      <Sidebar userEmail={user?.email} />

      <main className='flex-1 lg:ml-0'>
        <div className='p-8'>
          <div className='mb-8'>
            <h1 className='font-light text-gray-900 mb-2 text-3xl'>
              Welcome back user,{' '}
            </h1>
          </div>

          <section className="mb-8">
            <div className='flex justify-center items-center gap-3 mb-6'>
              <div className='rounded-lg shadow-sm'>
                <img
                  src='/bot.png'
                  alt='AskLawLM Bot'
                  className='w-10 h-10 object-contain mx-auto'
                />
              </div>
              <h1 className='font-light text-2xl'>How can I help you today?</h1>
            </div>
            
            {/* LLM Chat Interface */}
            <ChatInterface />
          </section>

          {hasNotebooks ? <NotebookGrid /> : <EmptyDashboard />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
