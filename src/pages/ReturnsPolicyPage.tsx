
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ReturnsPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 rainbow-bg-2">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Returns Policy</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Nature</h2>
              <p className="text-gray-600 leading-relaxed">
                Due to the nature of our academic services, returns are handled through our revision and refund policies.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Revision Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer unlimited free revisions to ensure your complete satisfaction with our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnsPolicyPage;
