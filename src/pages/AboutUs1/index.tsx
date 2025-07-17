
// export default AboutUs;

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';


interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

interface TestimonialData {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const AboutUs: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: 'How can I contact customer support?',
      answer:
        'If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.',
      isOpen: true,
    },
    {
      question: 'Can I cancel my order?',
      answer:
        'Yes, you can cancel your order within 24 hours of placing it. Please contact our customer support team for assistance.',
      isOpen: false,
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer international shipping to most countries. Shipping costs and delivery times vary by location.',
      isOpen: false,
    },
    {
      question: 'Can I track my order in real-time?',
      answer:
        'Yes, once your order is shipped, you will receive a tracking number via email to monitor your package in real-time.',
      isOpen: false,
    },
    {
      question: 'How do I know if a product is in stock?',
      answer:
        'Product availability is displayed on each product page. If an item is out of stock, you can sign up for notifications when it becomes available.',
      isOpen: false,
    },
  ]);

  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const testimonials: TestimonialData[] = [
    {
      name: 'Kenneth Fong',
      role: 'Postgraduate Student',
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content:
        "The service quality exceeded our expectations. The team was professional, responsive, and delivered exactly what we needed. I would highly recommend them to anyone looking for reliable solutions.",
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content:
        "Working with this team has been a game-changer for our business. Their innovative approach and attention to detail helped us achieve our goals faster than we anticipated.",
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const companyLogos = [
    '/images/img_company_logo.svg',
    '/images/img_company_logo_black_900.svg',
    '/images/img_company_logo_black_900_44x88.svg',
    '/images/img_company_logo_gray_600.svg',
    '/images/img_company_logo_red_a700_01.svg',
    '/images/img_company_logo_red_700.svg',
    '/images/img_company_logo_blue_a400.svg',
    '/images/img_company_logo_44x88.svg',
  ];

  const toggleFAQ = (index: number): void => {
    setFaqs((prev) =>
      prev.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 ">
        {/* Article Section */}
        <section className="py-8 md:py-16 ">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 ">
            {/* Left Content */}
            <div className="w-full  lg:max-w-[650px] ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                The Importance of Regular Exercise for Maintaining a Healthy Lifestyle
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Regular exercise is crucial for maintaining a healthy lifestyle. Exercise not only
                helps to keep your body in shape but also benefits your mental health by reducing
                stress and improving mood. It can also reduce your risk of developing chronic
                diseases such as heart disease.
              </p>

              {/* Author Info */}
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full mr-4 md:mr-6 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Kenneth Fong"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    Kenneth Fong
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base capitalize">CEO and Founder</p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="border bg-light-gray bg-white rounded-lg shadow-sm">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm md:text-lg font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <div className="w-6 h-6 md:w-7 md:h-7 bg-gray-100 border bg-light-gray rounded-full flex items-center justify-center flex-shrink-0">
                        {faq.isOpen ? (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    </button>
                    {faq.isOpen && (
                      <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4 text-sm md:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-32 mb-4">
                <div className="text-center sm:text-left">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    50+
                  </div>
                  <p className="text-gray-600 text-sm md:text-lg capitalize">Items Sale</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    400%
                  </div>
                  <p className="text-gray-600 text-sm md:text-lg capitalize">Return on Investment</p>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="w-full  mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-gray-200 h-48 md:h-[261px] w-full rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Exercise"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-200 h-48 md:h-[261px] w-32 md:w-[190px] rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Fitness"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-gray-200 h-64 md:h-[544px] w-full rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Healthy lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-200 h-48 md:h-[272px] w-full rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Wellness"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 rounded-2xl p-6 md:p-12 lg:p-20 my-8 md:my-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Image */}
            <div className="relative w-full max-w-sm lg:w-[452px] h-64 md:h-80 lg:h-[480px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-2 translate-y-6 md:translate-x-4 md:translate-y-12"></div>
              <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 md:p-4 shadow-lg">
                  <div className="flex flex-col items-center">
                    <p className="text-gray-900 font-medium mb-2 text-sm md:text-base">
                      Our Satisfied Users
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-200 rounded-full border-2 border-white overflow-hidden">
                          <img 
                            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" 
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-200 rounded-full border-2 border-white overflow-hidden">
                          <img 
                            src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100" 
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="text-white text-xs md:text-sm font-medium">
                          +12K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 max-w-[570px] order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 capitalize leading-tight">
                What our clients say about us
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                {testimonials[currentTestimonial].content}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full border-2 border-white mr-4 overflow-hidden">
                    <img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
              <section className="py-16 ">
          <div className="relative">
            <img
              src="/images/img_vector.svg"
              alt="Vector"
              className="absolute top-16 right-20 w-7 h-7"
            />

            <div className="flex items-start">
              <div className="w-[424px] mr-16">
                <h2
                  className="text-3xl font-bold text-primary mb-6 leading-tight"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  We are just keep growing with 6.3k trusted companies
                </h2>
                <p className="text-light font-roboto leading-relaxed">
                  Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert
                  nulla quam augue.
                </p>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {companyLogos.slice(0, 4).map((logo, index) => (
                    <div
                      key={index}
                      className="bg-tertiary h-[100px] flex items-center justify-center"
                    >
                      <img src={logo} alt={`Company ${index + 1}`} className="h-11 w-22" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {companyLogos.slice(4, 8).map((logo, index) => (
                    <div
                      key={index + 4}
                      className="bg-tertiary h-[100px] flex items-center justify-center"
                    >
                      <img src={logo} alt={`Company ${index + 5}`} className="h-11 w-22" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

  
      <Footer />
    </div>
  );
};

export default AboutUs;