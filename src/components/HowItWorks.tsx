
import { MessageSquare, FileText, Users, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Submit Requirements",
      description: "Fill out our simple order form with your assignment details, deadline, and academic level.",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "02",
      icon: Users,
      title: "Get Matched",
      description: "We assign your work to the most qualified expert in your subject area within minutes.",
      color: "from-blue-500 to-purple-500"
    },
    {
      step: "03",
      icon: FileText,
      title: "Track Progress",
      description: "Monitor your assignment progress in real-time and communicate directly with your writer.",
      color: "from-green-500 to-blue-500"
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Receive & Review",
      description: "Get your completed assignment on time with free revisions until you're 100% satisfied.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 rainbow-bg-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">Simple Process</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting your assignment done is as easy as 1-2-3-4. Follow our simple process for guaranteed success.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-gray-200 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
