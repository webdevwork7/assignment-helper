
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "How do you ensure plagiarism-free content?",
      answer: "We use advanced plagiarism detection tools and our writers create original content from scratch. Every order comes with a free plagiarism report."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We offer unlimited free revisions until you're completely satisfied. If you're still not happy, we provide a full money-back guarantee."
    },
    {
      question: "How quickly can you complete my assignment?",
      answer: "We can complete assignments as quickly as 6 hours, depending on the complexity and length. However, we recommend allowing more time for the best quality."
    },
    {
      question: "Are your writers qualified?",
      answer: "Yes, all our writers hold advanced degrees (Masters/PhD) in their respective fields and have years of academic writing experience."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 rainbow-bg-1">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
