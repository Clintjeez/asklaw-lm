import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

const DashboardLayout = ({ children }) => {
  return (
    <section className='flex'>
      <Sidebar />
      <section>
        <TopHeader />
        <main>{children}</main>
      </section>
    </section>
  );
};

export default DashboardLayout;
