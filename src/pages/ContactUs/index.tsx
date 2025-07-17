import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-11 ">
      <Header />
      
      <main className="relative bg-contact min-h-screen">
        {/* Background Image */}
        <div className="absolute max-h-[650px] inset-0 top-[100px] right-0">
          <img 
            src="/images/img_group_100.png" 
            alt="World Map Background" 
            className="absolute right-0 top-0 h-full w-auto object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-24">
          <div className="grid grid-cols-1 items-start max-w-full lg:max-w-[600px]">
            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-12">
              {/* Location */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white capitalize mb-3 sm:mb-4 leading-tight">
                  United States
                </h1>
                <div className="text-white">
                  <p className="text-lg sm:text-xl lg:text-3xl font-normal leading-relaxed">
                    <span className="text-white">Address:</span> 3553 Brandywine Street Northwest, Washington AR 20008
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Call Us */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Call Us</h3>
                  <div className="space-y-2">
                    <p className="text-base sm:text-lg text-white leading-relaxed">+01-123-456-7890</p>
                    <p className="text-base sm:text-lg text-white leading-relaxed">+01-123-456-7890</p>
                  </div>
                </div>

                {/* Email Us */}
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Email Us</h3>
                  <p className="text-base sm:text-lg text-white">help@MoonCart.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-14 mt-6 sm:mt-8">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <EditText
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                  placeholder="Enter your full name"
                />

                <EditText
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  placeholder="Enter your email address"
                />

                <EditText
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  placeholder="Enter your phone number"
                />

                <TextArea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  placeholder="Enter your message"
                  rows={5}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-base sm:text-lg font-bold"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;