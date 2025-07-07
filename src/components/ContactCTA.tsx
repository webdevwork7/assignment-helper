
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const ContactCTA = () => {
  return (
    <section className="py-20 rainbow-bg-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">Get Started Today</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch With Our{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Assignment Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to excel in your studies? Our expert team is available 24/7 to help you achieve academic success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Call Us Now
              </h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our assignment experts for immediate assistance and personalized guidance.
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-6">
                {siteConfig.phone}
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3">
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Email Support
              </h3>
              <p className="text-gray-600 mb-6">
                Send us your requirements via email and get detailed responses from our academic professionals.
              </p>
              <div className="text-lg font-bold text-purple-600 mb-6">
                {siteConfig.email}
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3">
                Send Email
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant responses through our live chat system. Available 24/7 for your convenience.
              </p>
              <div className="text-lg font-bold text-green-600 mb-6">
                Online Now
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3">
                Start Chat
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Urgent Assignment Help?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Don't wait until the last minute! Contact us now and let our experts handle your assignments while you focus on other important tasks.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
            Get Instant Quote
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
