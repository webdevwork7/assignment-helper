
import { siteConfig } from '@/config/site';

const WorldMap = () => {
  return (
    <section className="py-20 rainbow-bg-1 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-8">
            <span className="text-purple-700 font-bold text-lg">🌍 Global Reach</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Assignment Experts Have Helped{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Students From The Following Countries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've successfully assisted students from over 50+ countries worldwide with their academic needs.
          </p>
        </div>

        {/* World Map Visual */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-purple-100">
            {/* Simulated World Map with Country Pins */}
            <div className="relative h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
              {/* Animated pins for different countries */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* USA */}
                  <div className="absolute top-1/3 left-1/4 animate-bounce">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                    <div className="w-1 h-6 bg-red-500 mx-auto"></div>
                  </div>
                  {/* UK */}
                  <div className="absolute top-1/4 left-1/2 animate-bounce" style={{animationDelay: '0.5s'}}>
                    <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                    <div className="w-1 h-6 bg-blue-500 mx-auto"></div>
                  </div>
                  {/* Australia */}
                  <div className="absolute bottom-1/4 right-1/4 animate-bounce" style={{animationDelay: '1s'}}>
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                    <div className="w-1 h-6 bg-green-500 mx-auto"></div>
                  </div>
                  {/* Canada */}
                  <div className="absolute top-1/5 left-1/3 animate-bounce" style={{animationDelay: '1.5s'}}>
                    <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
                    <div className="w-1 h-6 bg-purple-500 mx-auto"></div>
                  </div>
                  {/* India */}
                  <div className="absolute top-1/2 right-1/3 animate-bounce" style={{animationDelay: '2s'}}>
                    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg"></div>
                    <div className="w-1 h-6 bg-orange-500 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">🌟 Serving Students Worldwide</h3>
                  <p className="text-gray-600">Real-time academic support across continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {siteConfig.countries.map((country, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-purple-100"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">
                  {country.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm group-hover:text-purple-600 transition-colors">
                {country}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-purple-100">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100K+</div>
              <div className="text-purple-100">Students Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-purple-100">Universities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
