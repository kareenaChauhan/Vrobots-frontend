import React, { useState } from 'react';
import  RatingBar  from '../../components/ui/RatingBar';
import Footer from '../../components/common/Footer';

interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  originalPrice: string;
  salePrice: string;
  specifications: {
    brand: string;
    material: string;
    bottleType: string;
    color: string;
    capacity: string;
    specialFeature: string;
    ageRange: string;
    productDimensions: string;
    productCare: string;
    modelName: string;
    recommendedUses: string;
    numberOfItems: string;
    reusability: string;
    shape: string;
    netQuantity: string;
    countryOfOrigin: string;
    itemModelNumber: string;
    asin: string;
  };
  additionalInfo: {
    itemWeight: string;
    itemDimensions: string;
    netQuantity: string;
    includedComponents: string;
    genericName: string;
    bestSellersRank: string;
  };
}

const ProductComparison: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Wooden Water Bottles',
      image: '/images/img_14.png',
      rating: 4,
      originalPrice: '$45.00',
      salePrice: '$40.00',
      specifications: {
        brand: 'Speedex',
        material: 'Stainless Steel',
        bottleType: 'Sipper Bottle',
        color: 'Black',
        capacity: '1000 Milliliters',
        specialFeature: 'Shatter Proof, Leak Proof',
        ageRange: 'Adult',
        productDimensions: '7W x 26H Centimeters',
        productCare: 'WASH WITH WARM WATER',
        modelName: 'SIMP_WithSipp-1000ml',
        recommendedUses: 'Office, School, Picnic, Gym',
        numberOfItems: '1',
        reusability: 'Reusable',
        shape: 'Round',
        netQuantity: '1 count',
        countryOfOrigin: 'India',
        itemModelNumber: 'SIMP_WithSipp-1000m',
        asin: 'B08FYVDRNK'
      },
      additionalInfo: {
        itemWeight: '260 g',
        itemDimensions: 'LxWxH 7 x 7 x 26 CM',
        netQuantity: '1 count',
        includedComponents: '1 Water Bottle',
        genericName: 'Water Bottles',
        bestSellersRank: '#323 in Home & Kitchen'
      }
    },
    {
      id: '2',
      name: 'Bamboo toothbrushes',
      image: '/images/img_14.png',
      rating: 4,
      originalPrice: '$45.00',
      salePrice: '$40.00',
      specifications: {
        brand: 'Speedex',
        material: 'Stainless Steel',
        bottleType: 'Sipper Bottle',
        color: 'Black',
        capacity: '1000 Milliliters',
        specialFeature: 'Shatter Proof, Leak Proof',
        ageRange: 'Adult',
        productDimensions: '7W x 26H Centimeters',
        productCare: 'WASH WITH WARM WATER',
        modelName: 'SIMP_WithSipp-1000ml',
        recommendedUses: 'Office, School, Picnic, Gym',
        numberOfItems: '1',
        reusability: 'Reusable',
        shape: 'Round',
        netQuantity: '1 count',
        countryOfOrigin: 'India',
        itemModelNumber: 'SIMP_WithSipp-1000m',
        asin: 'B08FYVDRNK'
      },
      additionalInfo: {
        itemWeight: '260 g',
        itemDimensions: 'LxWxH 7 x 7 x 26 CM',
        netQuantity: '1 count',
        includedComponents: '1 Water Bottle',
        genericName: 'Water Bottles',
        bestSellersRank: '#323 in Home & Kitchen'
      }
    },
    {
      id: '3',
      name: 'Wooden Cup',
      image: '/images/img_14.png',
      rating: 4,
      originalPrice: '$45.00',
      salePrice: '$40.00',
      specifications: {
        brand: 'Speedex',
        material: 'Stainless Steel',
        bottleType: 'Sipper Bottle',
        color: 'Black',
        capacity: '1000 Milliliters',
        specialFeature: 'Shatter Proof, Leak Proof',
        ageRange: 'Adult',
        productDimensions: '7W x 26H Centimeters',
        productCare: 'WASH WITH WARM WATER',
        modelName: 'SIMP_WithSipp-1000ml',
        recommendedUses: 'Office, School, Picnic, Gym',
        numberOfItems: '1',
        reusability: 'Reusable',
        shape: 'Round',
        netQuantity: '1 count',
        countryOfOrigin: 'India',
        itemModelNumber: 'SIMP_WithSipp-1000m',
        asin: 'B08FYVDRNK'
      },
      additionalInfo: {
        itemWeight: '260 g',
        itemDimensions: 'LxWxH 7 x 7 x 26 CM',
        netQuantity: '1 count',
        includedComponents: '1 Water Bottle',
        genericName: 'Water Bottles',
        bestSellersRank: '#323 in Home & Kitchen'
      }
    }
  ]);

  const handleAddProduct = () => {
    alert('Add product functionality would be implemented here');
  };

  const specificationLabels = [
    'Brand',
    'Material',
    'Bottle Type',
    'Colour',
    'Capacity',
    'Special Feature',
    'Age Range (Description)',
    'Product Dimensions',
    'Product Care Instructions',
    'Model Name',
    'Recommended Uses For Product',
    'Number of Items',
    'Reusability',
    'Shape',
    'Net Quantity',
    'Country of Origin',
    'Item model number',
    'Product Dimensions',
    'ASIN'
  ];

  const additionalInfoLabels = [
    'Item Weight',
    'Item Dimensions',
    'Net Quantity',
    'Included Components',
    'Generic Name',
    'Best Sellers Rank'
  ];

  const getSpecValue = (product: Product, index: number): string => {
    const specKeys = Object.keys(product.specifications);
    return Object.values(product.specifications)[index] || '';
  };

  const getAdditionalValue = (product: Product, index: number): string => {
    const additionalKeys = Object.keys(product.additionalInfo);
    return Object.values(product.additionalInfo)[index] || '';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-dark-1 text-white">
        <div className="container mx-auto px-20 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <img src="/images/img_group_628.svg" alt="Mooncart Logo" className="h-6 w-auto" />
              <nav className="flex items-center space-x-8">
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-normal uppercase">Home</span>
                  <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-normal uppercase">Shop</span>
                  <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-normal uppercase">Blog</span>
                <span className="text-sm font-normal uppercase">Portfolio</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-normal uppercase">Pages</span>
                  <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="h-3.5 w-3.5" />
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm">LOGIN / REGISTER</span>
              <img src="/images/img_iconly_light_search.svg" alt="Search" className="h-5 w-5" />
              <img src="/images/img_iconly_light_heart.svg" alt="Wishlist" className="h-5 w-5" />
              <div className="relative">
                <img src="/images/img_cart.svg" alt="Cart" className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary-1 text-white text-xs font-bold rounded-full h-4.5 w-4.5 flex items-center justify-center">
                  5
                </span>
              </div>
            </div>
          </div>
          <div className="mt-44">
            <h1 className="text-4xl font-bold font-dm-sans mb-4">Compare</h1>
            <div className="flex items-center space-x-4 text-base">
              <span>Home</span>
              <img src="/images/img_arrowright.svg" alt="Arrow Right" className="h-4.5 w-4.5" />
              <span>Compare</span>
            </div>
          </div>
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/img_rectangle_225.png)' }}
        />
      </header>

      {/* Main Content */}
      <main className="bg-light-4 py-20">
        <div className="container mx-auto px-20">
          <div className="bg-white rounded-lg shadow-sm p-16">
            {/* Product Comparison Table */}
            <div className="grid grid-cols-5 gap-8">
              {/* Product Cards */}
              <div className="col-span-1">
                <div className="bg-light-4 rounded-lg p-8 h-50 flex flex-col items-center justify-center">
                  <div className="bg-gray-3 rounded-lg h-42 w-full mb-6"></div>
                </div>
                <h3 className="text-base font-medium text-dark-1 text-center mt-6 mb-4">
                  {products[0].name}
                </h3>
                <div className="flex justify-center mb-4">
                  <RatingBar rating={products[0].rating} />
                </div>
                <div className="flex justify-center space-x-4">
                  <span className="text-base text-brown line-through">{products[0].originalPrice}</span>
                  <span className="text-base font-medium text-primary">{products[0].salePrice}</span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="bg-light-4 rounded-lg p-8 h-50 flex flex-col items-center justify-center">
                  <div className="bg-gray-3 rounded-lg h-42 w-full mb-6"></div>
                </div>
                <h3 className="text-base font-medium text-dark-1 text-center mt-6 mb-4">
                  {products[1].name}
                </h3>
                <div className="flex justify-center mb-4">
                  <RatingBar rating={products[1].rating} />
                </div>
                <div className="flex justify-center space-x-4">
                  <span className="text-base text-brown line-through">{products[1].originalPrice}</span>
                  <span className="text-base font-medium text-primary">{products[1].salePrice}</span>
                </div>
              </div>

              <div className="col-span-1">
                <div className="bg-light-4 rounded-lg p-8 h-50 flex flex-col items-center justify-center">
                  <div className="bg-gray-3 rounded-lg h-42 w-full mb-6"></div>
                </div>
                <h3 className="text-base font-medium text-dark-1 text-center mt-6 mb-4">
                  {products[2].name}
                </h3>
                <div className="flex justify-center mb-4">
                  <RatingBar rating={products[2].rating} />
                </div>
                <div className="flex justify-center space-x-4">
                  <span className="text-base text-brown line-through">{products[2].originalPrice}</span>
                  <span className="text-base font-medium text-primary">{products[2].salePrice}</span>
                </div>
              </div>

              <div className="col-span-1">
                <div 
                  className="bg-gray-1 rounded-lg p-8 h-50 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-2 transition-colors"
                  onClick={handleAddProduct}
                >
                  <img src="/images/img_pluscircle_1.svg" alt="Add Product" className="h-20 w-20" />
                </div>
                <h3 className="text-base font-medium text-dark-1 text-center mt-6">
                  Add Product
                </h3>
              </div>
            </div>

            {/* Vertical Dividers */}
            <div className="grid grid-cols-5 gap-8 mt-12">
              <div className="col-span-1"></div>
              <div className="col-span-1 border-l border-gray-light-2"></div>
              <div className="col-span-1 border-l border-gray-light-2"></div>
              <div className="col-span-1 border-l border-gray-light-2"></div>
              <div className="col-span-1"></div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-gray-light-1 my-12"></div>

            {/* Technical Details Section */}
            <div className="mb-16">
              <h2 className="text-lg font-bold text-dark-2 mb-8">Technical Details</h2>
              
              {specificationLabels.map((label, index) => (
                <div key={index} className="grid grid-cols-5 gap-8 py-2 border-b border-gray-100 last:border-b-0">
                  <div className="col-span-1">
                    <span className="text-sm text-dark-2">{label}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_480.svg" alt="Check" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-dark-2">{getSpecValue(products[0], index)}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_480.svg" alt="Check" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-dark-2">{getSpecValue(products[1], index)}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_480.svg" alt="Check" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-dark-2">{getSpecValue(products[2], index)}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_479.svg" alt="Cross" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-gray-1">-</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-gray-light-1 my-12"></div>

            {/* Additional Information Section */}
            <div>
              <h2 className="text-lg font-bold text-dark-2 mb-8">Additional Information</h2>
              
              {additionalInfoLabels.map((label, index) => (
                <div key={index} className="grid grid-cols-5 gap-8 py-2 border-b border-gray-100 last:border-b-0">
                  <div className="col-span-1">
                    <span className="text-sm text-dark-2">{label}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_480.svg" alt="Check" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-dark-2">{getAdditionalValue(products[0], index)}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_480.svg" alt="Check" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-dark-2">{getAdditionalValue(products[1], index)}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_480.svg" alt="Check" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-dark-2">{getAdditionalValue(products[2], index)}</span>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <img src="/images/img_group_479.svg" alt="Cross" className="h-4 w-4 mr-2" />
                    <span className="text-sm text-gray-1">-</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Trusted Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-20">
          <div className="flex items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-dark-2 mb-6 leading-tight">
                We are just keep growing with 6.3k trusted companies
              </h2>
              <p className="text-base text-brown leading-relaxed">
                Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8">
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_black_900.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_black_900_44x88.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_gray_600.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_red_a700_01.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_red_700.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_blue_a400.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
              <div className="bg-light-5 p-6 rounded-lg flex items-center justify-center">
                <img src="/images/img_company_logo_44x88.svg" alt="Company Logo" className="h-11 w-22" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light-2 relative">
        <img src="/images/img_vector.svg" alt="Vector" className="absolute top-0 right-80 h-9 w-7" />
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-light-3 p-10 rounded-lg flex items-center space-x-6">
              <img src="/images/img_vuesax_linear_passwordcheck.svg" alt="Filter Icon" className="h-18 w-18" />
              <div>
                <h3 className="text-lg font-medium text-dark-2 mb-2">Filter & Discover</h3>
                <p className="text-sm text-brown leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
              </div>
            
            </div>
            
            <div className="bg-light-5 p-10 rounded-lg flex items-center space-x-6">
              <img src="/images/img_vuesax_linear_shopremove.png" alt="Cart Icon" className="h-18 w-17" />
              <div>
                <h3 className="text-lg font-medium text-dark-2 mb-2">Add to cart</h3>
                <p className="text-sm text-brown leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
              </div>
             
            </div>
            
            <div className="bg-light-3 p-10 rounded-lg flex items-center space-x-6">
              <img src="/images/img_vuesax_linear_group.png" alt="Shipping Icon" className="h-16 w-15" />
              <div>
                <h3 className="text-lg font-medium text-dark-2 mb-2">Fast Shipping</h3>
                <p className="text-sm text-brown leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
              </div>
              
            </div>
            
            <div className="bg-light-5 p-10 rounded-lg flex items-center space-x-6">
              <img src="/images/img_search.svg" alt="Product Icon" className="h-16 w-16" />
              <div>
                <h3 className="text-lg font-medium text-dark-2 mb-2">Enjoy The Product</h3>
                <p className="text-sm text-brown leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </section>

    <Footer/>
    </div>
  );
};

export default ProductComparison;