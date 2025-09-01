'use client';

import React from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useNotebooks } from '@/hooks/useNotebooks';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import EmptyDashboard from './EmptyDashboard';

const Dashboard = () => {
  const { isLoaded } = useAuth();
  const { user } = useUser();
  const { notebooks, isLoading } = useNotebooks();

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

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userEmail={user?.emailAddresses[0]?.emailAddress} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader userEmail={user?.emailAddresses[0]?.emailAddress} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : notebooks && notebooks.length > 0 ? (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">Your Notebooks</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notebooks.map((notebook) => (
                  <div
                    key={notebook.id}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {notebook.title || 'Untitled Notebook'}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {notebook.description || 'No description'}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>
                        {new Date(notebook.created_at).toLocaleDateString()}
                      </span>
                      <span className="text-blue-600 hover:text-blue-800">
                        Open →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <EmptyDashboard />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;