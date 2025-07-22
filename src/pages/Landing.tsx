import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';

const Landing = () => {
  return (
    <div className='min-h-screen bg-[#fbfbf9] flex flex-col'>
      {/* Header with Navbar */}
      <Header />
      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Landing;
