import React, { useState } from 'react';
import { 
  ChevronRight, 
  Search, 
  Plus, 
  Minus,
  ShoppingBag,
  RotateCcw,
  CreditCard,
  Truck,
  Gift,
  Package,
  Phone,
  Globe,
  Clock,
  MapPin
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: Category[] = [
    { id: 'general', name: 'General', icon: <Package className="w-5 h-5" />, color: 'text-accent' },
    { id: 'returns', name: 'Returns', icon: <RotateCcw className="w-5 h-5" />, color: 'text-blue-600' },
    { id: 'refunds', name: 'Refunds', icon: <CreditCard className="w-5 h-5" />, color: 'text-green-600' },
    { id: 'payments', name: 'Payments', icon: <CreditCard className="w-5 h-5" />, color: 'text-purple-600' },
    { id: 'gift', name: 'Gift', icon: <Gift className="w-5 h-5" />, color: 'text-pink-600' },
    { id: 'shipping', name: 'Shipping', icon: <Truck className="w-5 h-5" />, color: 'text-orange-600' },
  ];

  const faqData: FAQItem[] = [
    // General (15)
    {
      id: 'general-1',
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support via email, phone, or live chat on our website.',
      category: 'general',
    },
    {
      id: 'general-2',
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancel your order within 24 hours of placing it. After that, if the order has been processed, you may need to return the items once received.',
      category: 'general',
    },
    {
      id: 'general-3',
      question: 'How do I know if a product is in stock?',
      answer: 'Product availability is shown on each product page. If an item is out of stock, you can sign up for notifications to be alerted when it becomes available again.',
      category: 'general',
    },
    {
      id: 'general-4',
      question: 'Can I place an order over the phone?',
      answer: 'Yes, you can place orders over the phone by calling our customer service team during business hours.',
      category: 'general',
    },
    {
      id: 'general-5',
      question: 'How do I create an account?',
      answer: 'Click the Sign Up button on the top right and fill in your details to create an account.',
      category: 'general',
    },
    {
      id: 'general-6',
      question: 'How do I reset my password?',
      answer: 'Click on Forgot Password on the login page and follow the instructions to reset your password.',
      category: 'general',
    },
    {
      id: 'general-7',
      question: 'Can I update my account information?',
      answer: 'Yes, you can update your account information from your profile settings after logging in.',
      category: 'general',
    },
    {
      id: 'general-8',
      question: 'How do I subscribe to your newsletter?',
      answer: 'You can subscribe to our newsletter at the bottom of our homepage by entering your email address.',
      category: 'general',
    },
    {
      id: 'general-9',
      question: 'Where can I find your store locations?',
      answer: 'Our store locations are listed on the Contact Us page.',
      category: 'general',
    },
    {
      id: 'general-10',
      question: 'How do I leave a product review?',
      answer: 'After purchasing a product, you can leave a review on the product page.',
      category: 'general',
    },
    {
      id: 'general-11',
      question: 'Are there any ongoing promotions or discounts?',
      answer: 'Check our homepage or subscribe to our newsletter for the latest promotions and discounts.',
      category: 'general',
    },
    {
      id: 'general-12',
      question: 'How do I use a promo code?',
      answer: 'Enter your promo code at checkout to apply the discount.',
      category: 'general',
    },
    {
      id: 'general-13',
      question: 'Can I request a product that is not listed?',
      answer: 'Yes, please contact our support team with your request.',
      category: 'general',
    },
    {
      id: 'general-14',
      question: 'How do I delete my account?',
      answer: 'Contact customer support to request account deletion.',
      category: 'general',
    },
    {
      id: 'general-15',
      question: 'Is my personal information secure?',
      answer: 'Yes, we use industry-standard security measures to protect your information.',
      category: 'general',
    },

    // Returns (15)
    {
      id: 'returns-1',
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be in original condition with tags attached.',
      category: 'returns',
    },
    {
      id: 'returns-2',
      question: 'How do I initiate a return?',
      answer: 'Contact our support team or use the return portal on our website to start a return.',
      category: 'returns',
    },
    {
      id: 'returns-3',
      question: 'Can I return an item without the original packaging?',
      answer: 'Items should be returned in their original packaging whenever possible.',
      category: 'returns',
    },
    {
      id: 'returns-4',
      question: 'Are there any items that cannot be returned?',
      answer: 'Personalized and perishable items cannot be returned.',
      category: 'returns',
    },
    {
      id: 'returns-5',
      question: 'How long do I have to return an item?',
      answer: 'You have 30 days from the date of delivery to return an item.',
      category: 'returns',
    },
    {
      id: 'returns-6',
      question: 'Do I have to pay for return shipping?',
      answer: 'Return shipping is free for defective or incorrect items. Otherwise, a small fee may apply.',
      category: 'returns',
    },
    {
      id: 'returns-7',
      question: 'Can I exchange an item instead of returning it?',
      answer: 'Yes, exchanges are possible for most items. Contact support for assistance.',
      category: 'returns',
    },
    {
      id: 'returns-8',
      question: 'How do I track my return status?',
      answer: 'You can track your return status in your account dashboard or via email updates.',
      category: 'returns',
    },
    {
      id: 'returns-9',
      question: 'What if I received a damaged or defective item?',
      answer: 'Contact us immediately with photos and we will arrange a replacement or refund.',
      category: 'returns',
    },
    {
      id: 'returns-10',
      question: 'Can I return a gift?',
      answer: 'Yes, gifts can be returned by the recipient with proof of purchase.',
      category: 'returns',
    },
    {
      id: 'returns-11',
      question: 'How do I return an item purchased with a gift card?',
      answer: 'Refunds for gift card purchases will be issued as store credit.',
      category: 'returns',
    },
    {
      id: 'returns-12',
      question: 'Can I return sale or clearance items?',
      answer: 'Sale and clearance items are final sale and cannot be returned unless defective.',
      category: 'returns',
    },
    {
      id: 'returns-13',
      question: 'What documents do I need to include with my return?',
      answer: 'Include your order confirmation or packing slip with your return.',
      category: 'returns',
    },
    {
      id: 'returns-14',
      question: 'Can I return items bought online to a physical store?',
      answer: 'Yes, online purchases can be returned to our physical stores with proof of purchase.',
      category: 'returns',
    },
    {
      id: 'returns-15',
      question: 'How will I be notified when my return is processed?',
      answer: 'You will receive an email notification once your return is processed.',
      category: 'returns',
    },

    // Refunds (15)
    {
      id: 'refunds-1',
      question: 'How long does it take to process a refund?',
      answer: 'Refunds are typically processed within 3-5 business days after we receive your returned item.',
      category: 'refunds',
    },
    {
      id: 'refunds-2',
      question: 'How will I receive my refund?',
      answer: 'Refunds are issued to the original payment method used for the purchase.',
      category: 'refunds',
    },
    {
      id: 'refunds-3',
      question: 'Can I get a refund to a different payment method?',
      answer: 'Refunds can only be issued to the original payment method.',
      category: 'refunds',
    },
    {
      id: 'refunds-4',
      question: 'What if I haven received my refund?',
      answer: 'If you have not received your refund within 10 business days, please contact our support team.',
      category: 'refunds',
    },
    {
      id: 'refunds-5',
      question: 'Are shipping fees refundable?',
      answer: 'Shipping fees are non-refundable unless the return is due to our error.',
      category: 'refunds',
    },
    {
      id: 'refunds-6',
      question: 'Will I be refunded for taxes and duties?',
      answer: 'Taxes and duties are refunded if required by law.',
      category: 'refunds',
    },
    {
      id: 'refunds-7',
      question: 'Can I get a partial refund?',
      answer: 'Partial refunds may be issued for items returned in less than original condition.',
      category: 'refunds',
    },
    {
      id: 'refunds-8',
      question: 'What if I was charged incorrectly?',
      answer: 'Contact support with your order details and we will resolve any incorrect charges.',
      category: 'refunds',
    },
    {
      id: 'refunds-9',
      question: 'How do I request a refund for a canceled order?',
      answer: 'Refunds for canceled orders are processed automatically within 3-5 business days.',
      category: 'refunds',
    },
    {
      id: 'refunds-10',
      question: 'Can I get a refund for a digital product?',
      answer: 'Digital products are non-refundable unless defective.',
      category: 'refunds',
    },
    {
      id: 'refunds-11',
      question: 'What happens if my refund is denied?',
      answer: 'If your refund is denied, you will be notified by email with the reason.',
      category: 'refunds',
    },
    {
      id: 'refunds-12',
      question: 'How do I check the status of my refund?',
      answer: 'You can check your refund status in your account dashboard or by contacting support.',
      category: 'refunds',
    },
    {
      id: 'refunds-13',
      question: 'Can I get a refund for a late delivery?',
      answer: 'Refunds for late deliveries are considered on a case-by-case basis.',
      category: 'refunds',
    },
    {
      id: 'refunds-14',
      question: 'Will I be notified when my refund is issued?',
      answer: 'Yes, you will receive an email notification when your refund is issued.',
      category: 'refunds',
    },
    {
      id: 'refunds-15',
      question: 'Can I get a refund for a subscription service?',
      answer: 'Subscription refunds are subject to our subscription policy.',
      category: 'refunds',
    },

    // Payments (15)
    {
      id: 'payments-1',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers.',
      category: 'payments',
    },
    {
      id: 'payments-2',
      question: 'Is it safe to use my credit card on your website?',
      answer: 'Yes, we use secure encryption to protect your payment information.',
      category: 'payments',
    },
    {
      id: 'payments-3',
      question: 'Can I pay with multiple payment methods?',
      answer: 'Currently, only one payment method can be used per order.',
      category: 'payments',
    },
    {
      id: 'payments-4',
      question: 'Do you offer installment payments?',
      answer: 'Installment payments are available through select payment providers at checkout.',
      category: 'payments',
    },
    {
      id: 'payments-5',
      question: 'Why was my payment declined?',
      answer: 'Payments may be declined due to insufficient funds, incorrect details, or bank restrictions.',
      category: 'payments',
    },
    {
      id: 'payments-6',
      question: 'Can I pay with cash on delivery?',
      answer: 'Cash on delivery is available in select regions only.',
      category: 'payments',
    },
    {
      id: 'payments-7',
      question: 'How do I use a gift card or store credit?',
      answer: 'Enter your gift card or store credit code at checkout to apply the balance.',
      category: 'payments',
    },
    {
      id: 'payments-8',
      question: 'Are there any additional payment fees?',
      answer: 'We do not charge additional payment fees, but your bank may apply charges.',
      category: 'payments',
    },
    {
      id: 'payments-9',
      question: 'Can I save my payment information for future orders?',
      answer: 'Yes, you can securely save your payment information in your account.',
      category: 'payments',
    },
    {
      id: 'payments-10',
      question: 'Do you accept international credit cards?',
      answer: 'Yes, we accept international credit cards.',
      category: 'payments',
    },
    {
      id: 'payments-11',
      question: 'How do I update my payment information?',
      answer: 'You can update your payment information in your account settings.',
      category: 'payments',
    },
    {
      id: 'payments-12',
      question: 'Can I get an invoice for my order?',
      answer: 'Invoices are available for download in your order history.',
      category: 'payments',
    },
    {
      id: 'payments-13',
      question: 'What currencies do you accept?',
      answer: 'We accept payments in multiple currencies. Select your currency at checkout.',
      category: 'payments',
    },
    {
      id: 'payments-14',
      question: 'How do I apply a discount code?',
      answer: 'Enter your discount code at checkout to apply the discount.',
      category: 'payments',
    },
    {
      id: 'payments-15',
      question: 'Can I pay via bank transfer?',
      answer: 'Yes, bank transfer is available for large orders. Contact support for details.',
      category: 'payments',
    },

    // Gift (15)
    {
      id: 'gift-1',
      question: 'Do you offer gift wrapping?',
      answer: 'Yes, we offer gift wrapping services for an additional fee.',
      category: 'gift',
    },
    {
      id: 'gift-2',
      question: 'Can I include a personalized message with my gift?',
      answer: 'Yes, you can add a personalized message during checkout.',
      category: 'gift',
    },
    {
      id: 'gift-3',
      question: 'Do you sell gift cards?',
      answer: 'Yes, gift cards are available for purchase on our website.',
      category: 'gift',
    },
    {
      id: 'gift-4',
      question: 'How do I redeem a gift card?',
      answer: 'Enter your gift card code at checkout to redeem it.',
      category: 'gift',
    },
    {
      id: 'gift-5',
      question: 'Can I send a gift directly to the recipient?',
      answer: 'Yes, you can enter the recipient address at checkout.',
      category: 'gift',
    },
    {
      id: 'gift-6',
      question: 'Are gift receipts available?',
      answer: 'Yes, you can request a gift receipt at checkout.',
      category: 'gift',
    },
    {
      id: 'gift-7',
      question: 'Can I return or exchange a gifted item?',
      answer: 'Gifted items can be returned or exchanged with proof of purchase.',
      category: 'gift',
    },
    {
      id: 'gift-8',
      question: 'Do gift cards expire?',
      answer: 'Our gift cards do not expire.',
      category: 'gift',
    },
    {
      id: 'gift-9',
      question: 'Can I use a discount code when purchasing a gift card?',
      answer: 'Discount codes cannot be applied to gift card purchases.',
      category: 'gift',
    },
    {
      id: 'gift-10',
      question: 'How do I check my gift card balance?',
      answer: 'You can check your gift card balance on our website or by contacting support.',
      category: 'gift',
    },
    {
      id: 'gift-11',
      question: 'Can I reload a gift card?',
      answer: 'Currently, gift cards cannot be reloaded.',
      category: 'gift',
    },
    {
      id: 'gift-12',
      question: 'What denominations are available for gift cards?',
      answer: 'Gift cards are available in various denominations from $10 to $500.',
      category: 'gift',
    },
    {
      id: 'gift-13',
      question: 'Are there any fees for purchasing a gift card?',
      answer: 'No, there are no additional fees for purchasing a gift card.',
      category: 'gift',
    },
    {
      id: 'gift-14',
      question: 'Can I use multiple gift cards on one order?',
      answer: 'Yes, you can use multiple gift cards for a single order.',
      category: 'gift',
    },
    {
      id: 'gift-15',
      question: 'Can I get a refund for a gift card purchase?',
      answer: 'Gift card purchases are non-refundable.',
      category: 'gift',
    },

    // Shipping (15)
    {
      id: 'shipping-1',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries.',
      category: 'shipping',
    },
    {
      id: 'shipping-2',
      question: 'Can I track my order in real-time?',
      answer: 'Yes, you will receive a tracking number once your order ships.',
      category: 'shipping',
    },
    {
      id: 'shipping-3',
      question: 'How much does shipping cost?',
      answer: 'Shipping costs vary by location and order size. See our shipping policy for details.',
      category: 'shipping',
    },
    {
      id: 'shipping-4',
      question: 'How long does delivery take?',
      answer: 'Delivery times depend on your location and shipping method selected.',
      category: 'shipping',
    },
    {
      id: 'shipping-5',
      question: 'What shipping carriers do you use?',
      answer: 'We use a variety of carriers including UPS, FedEx, and DHL.',
      category: 'shipping',
    },
    {
      id: 'shipping-6',
      question: 'Can I change my shipping address after placing an order?',
      answer: 'Contact support as soon as possible to request a change of address.',
      category: 'shipping',
    },
    {
      id: 'shipping-7',
      question: 'Do you offer expedited shipping?',
      answer: 'Expedited shipping options are available at checkout.',
      category: 'shipping',
    },
    {
      id: 'shipping-8',
      question: 'Can I schedule a delivery date?',
      answer: 'Currently, we do not offer scheduled delivery dates.',
      category: 'shipping',
    },
    {
      id: 'shipping-9',
      question: 'What should I do if my package is lost?',
      answer: 'Contact our support team and we will assist you in locating your package.',
      category: 'shipping',
    },
    {
      id: 'shipping-10',
      question: 'Do you ship to PO boxes or APO/FPO addresses?',
      answer: 'Yes, we ship to PO boxes and APO/FPO addresses where possible.',
      category: 'shipping',
    },
    {
      id: 'shipping-11',
      question: 'Will I be charged customs duties or taxes?',
      answer: 'Customs duties and taxes may apply for international orders and are the responsibility of the customer.',
      category: 'shipping',
    },
    {
      id: 'shipping-12',
      question: 'How do I track my shipment?',
      answer: 'Use the tracking number provided in your shipping confirmation email.',
      category: 'shipping',
    },
    {
      id: 'shipping-13',
      question: 'What happens if I miss my delivery?',
      answer: 'The carrier will leave a notice and attempt redelivery or hold your package for pickup.',
      category: 'shipping',
    },
    {
      id: 'shipping-14',
      question: 'Can I pick up my order in-store?',
      answer: 'In-store pickup is available at select locations.',
      category: 'shipping',
    },
    {
      id: 'shipping-15',
      question: 'Do you offer free shipping?',
      answer: 'Free shipping is available for orders over a certain amount. See our shipping policy for details.',
      category: 'shipping',
    },
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (

    <div className="min-h-screen bg-primary">
      <Header />

    <div className="min-h-screen bg-secondary">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4">
            <div className=" rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <h1 className="text-2xl font-bold text-primary mb-2">Have any questions?</h1>
               
              </div>

              {/* Categories */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        activeCategory === category.id
                          ? 'border-accent bg-accent/5 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 bg-primary'
                      }`}
                    >
                      <div className={`${category.color} mr-3`}>
                        {category.icon}
                      </div>
                      <span className={`text-sm font-medium ${
                        activeCategory === category.id ? 'text-accent' : 'text-secondary'
                      }`}>
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="p-6 pt-0">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Customer support representative with packages"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            <div className="bg-primary rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-4">Hi! How can we help you?</h2>
                
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search Product"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 bg-tertiary"
                  />
                </div>
              </div>

              {/* FAQ Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <button
                        onClick={() => toggleExpanded(faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-tertiary transition-colors duration-200"
                      >
                        <span className="font-medium text-primary pr-4">{faq.question}</span>
                        <div className="flex-shrink-0">
                          {expandedItems.has(faq.id) ? (
                            <Minus className="w-5 h-5 text-accent" />
                          ) : (
                            <Plus className="w-5 h-5 text-muted" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        expandedItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-4 pt-0 border-t border-gray-100">
                          <p className="text-muted leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-muted" />
                    </div>
                    <h3 className="text-lg font-medium text-primary mb-2">No results found</h3>
                    <p className="text-muted">Try adjusting your search or browse different categories.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default FAQ;