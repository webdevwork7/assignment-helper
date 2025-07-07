
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BestAssignmentHelp from '@/components/BestAssignmentHelp';
import DiscountSection from '@/components/DiscountSection';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BestAssignmentHelp />
      <DiscountSection />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
