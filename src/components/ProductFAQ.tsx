import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FaqImg from '../assets/images/faqImg.jpg';
import bottomTree from "../assets/images/bottomTree.png"

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const ProductFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What Flavors Are Included In The Assorted Green Tea Sampler?',
      answer: 'Our Assorted Green Tea Sampler includes a variety of premium green tea flavors such as Classic Green Tea, Jasmine Green Tea, Mint Green Tea, and Lemon Green Tea. Each flavor is carefully selected to provide a diverse tasting experience.',
    },
    {
      id: 2,
      question: 'How Do I Brew The Green Tea?',
      answer: 'To brew the perfect cup of green tea, heat water to 175-185°F (80-85°C). Steep one teaspoon of tea leaves for 2-3 minutes. Avoid over-steeping as it can make the tea bitter. Enjoy hot or let it cool for iced tea.',
    },
    {
      id: 3,
      question: 'Is This Sampler Suitable For Gifting?',
      answer: 'Yes, our Assorted Green Tea Sampler makes an excellent gift! It comes in an elegant packaging that is perfect for tea enthusiasts, friends, or family members who appreciate quality tea.',
    },
    {
      id: 4,
      question: 'Can I Purchase This Sampler As Part Of A Larger Tea Set?',
      answer: 'Yes, you can purchase this sampler individually or as part of our larger tea collection sets. We offer various bundle options that include multiple tea varieties at special discounted prices.',
    },
    {
      id: 5,
      question: 'What Flavors Are Included In The Assorted Green Tea?',
      answer: 'The Assorted Green Tea includes Classic Green Tea, Jasmine Green Tea, Mint Green Tea, and Lemon Green Tea. Each flavor is packed in individual sachets for your convenience.',
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12  lg:py-16 relative" style={{ backgroundColor: '#f1e4b0' }}>

    <div className="absolute inset-0 ">
        <img
          src={bottomTree}
          alt=""
          className="w-[50%] h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-8 lg:mb-12  text-center">
          <p 
            className="text-sm mb-2"
            style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#000',
            }}
          >
            BETTER TO KNOW
          </p>
          <h2 
            className="text-3xl lg:text-4xl font-bold"
            style={{
              fontFamily: "'gotham'",
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '100%',
              color: '#9A7522',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Content - Image and Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <div 
              className="overflow-hidden"
              style={{
                width: '100%',
                height: '500px',
                borderRadius: '10px',
              }}
            >
              <img
                src={FaqImg}
                alt="Tea Plantation"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-4  p-6 rounded-lg" style={{ borderRadius: '10px' }}>
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border bg-white  px-4 mb-3 py-2 rounded-lg pb-4 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left gap-4 hover:text-[#316763] transition-colors py-2"
                >
                  <h3 
                    className="flex-1 font-medium"
                    style={{
                      fontFamily: "'gotham-book'",
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#000000',
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#316763]" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-5 h-5 text-[#316763]" strokeWidth={2.5} />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div 
                    className="mt-3"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      fontWeight: 300,
                      fontSize: '15px',
                      lineHeight: '23px',
                      color: '#000000',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;

