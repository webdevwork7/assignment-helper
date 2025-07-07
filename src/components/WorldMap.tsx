
import { siteConfig } from '@/config/site';

const WorldMap = () => {
  return (
    <section className="py-20 rainbow-bg-1">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">Global Reach</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Assignment Experts Have Helped{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Students From The Following Countries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've successfully assisted students from over 50+ countries worldwide with their academic needs.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {siteConfig.countries.map((country, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-purple-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {country.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {country}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-8 py-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-sm opacity-90">Students Helped</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Universities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
