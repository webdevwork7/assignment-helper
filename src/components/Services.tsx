
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, FileText, GraduationCap, PenTool, Calculator, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Essay Writing",
      description: "Professional essay writing services for all academic levels with proper structure and citations.",
      price: "Starting from $15",
      features: ["Original Content", "Free Revisions", "APA/MLA Format"],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      icon: FileText,
      title: "Research Papers",
      description: "In-depth research papers with comprehensive analysis and multiple credible sources.",
      price: "Starting from $20",
      features: ["Detailed Research", "Multiple Sources", "Proper Citations"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Thesis Writing",
      description: "Complete thesis assistance from proposal to defense with expert guidance.",
      price: "Starting from $25",
      features: ["Chapter-wise Delivery", "Data Analysis", "Defense Prep"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: PenTool,
      title: "Dissertation Help",
      description: "Comprehensive dissertation support with methodology and literature review assistance.",
      price: "Starting from $30",
      features: ["Methodology Support", "Literature Review", "Data Collection"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calculator,
      title: "Math & Statistics",
      description: "Expert help with mathematical problems, statistical analysis, and data interpretation.",
      price: "Starting from $18",
      features: ["Step-by-step Solutions", "Data Analysis", "SPSS/R Support"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Globe,
      title: "Online Courses",
      description: "Complete online course assistance with assignments, quizzes, and discussions.",
      price: "Starting from $200",
      features: ["Full Course Support", "Quiz Assistance", "Discussion Posts"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-purple-700 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Academic Solutions
            </span>
            <br />
            For Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From essays to dissertations, we provide comprehensive academic support 
            across all subjects and academic levels with guaranteed quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`group relative hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-2 ${service.popular ? 'ring-2 ring-purple-200' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {service.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">/page</span>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group-hover:shadow-lg transition-all duration-300">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us for personalized academic assistance 
              tailored to your specific requirements.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
