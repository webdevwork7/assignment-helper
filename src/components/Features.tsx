
import { Clock, Users, Shield, Calendar, Award, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your academic needs. Our support team is always ready to help.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Expert Writers",
      description: "PhD qualified writers with years of experience in academic writing across all subjects.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Plagiarism Free",
      description: "100% original content with detailed plagiarism reports to ensure academic integrity.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "On-Time Delivery",
      description: "Never miss a deadline with our timely delivery guarantee. Your success is our priority.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Multiple quality checks and revisions to ensure your assignment meets the highest standards.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Headphones,
      title: "Free Revisions",
      description: "Unlimited revisions until you're completely satisfied with the quality of work.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-purple-700 font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Exceptional Features
            </span>
            <br />
            That Set Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine expertise, technology, and dedication to deliver outstanding academic assistance 
            that helps students achieve their goals with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-purple-100 font-medium">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-purple-100 font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-purple-100 font-medium">Expert Writers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-100 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
