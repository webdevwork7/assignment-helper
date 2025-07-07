
import { Star, Quote } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      university: "Harvard University",
      grade: "A+",
      subject: "Business Management",
      story: "AssignmentHelper transformed my academic performance. Their expert guidance helped me achieve my dream grade in a challenging subject.",
      image: "SJ",
      country: "USA"
    },
    {
      name: "James Wilson",
      university: "Oxford University", 
      grade: "First Class",
      subject: "Literature",
      story: "The quality of research and writing exceeded my expectations. My professor was impressed with the depth of analysis.",
      image: "JW",
      country: "UK"
    },
    {
      name: "Emma Thompson",
      university: "University of Melbourne",
      grade: "High Distinction",
      subject: "Psychology",
      story: "Thanks to AssignmentHelper, I not only passed but excelled in my most difficult course. Highly recommended!",
      image: "ET",
      country: "Australia"
    },
    {
      name: "Michael Chen",
      university: "University of Toronto",
      grade: "A",
      subject: "Computer Science",
      story: "Their technical expertise and attention to detail helped me understand complex algorithms better than my textbook.",
      image: "MC",
      country: "Canada"
    }
  ];

  return (
    <section className="py-20 rainbow-bg-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">Student Success</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Success Stories From{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Around The World
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real students, real results. See how AssignmentHelper has helped students achieve academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-purple-300" />
                
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {story.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
                    <p className="text-purple-600 text-sm">{story.country}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{story.story}"
                </p>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">University:</span>
                    <span className="text-gray-700 text-sm font-medium">{story.university}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Subject:</span>
                    <span className="text-gray-700 text-sm font-medium">{story.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">Grade:</span>
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {story.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
