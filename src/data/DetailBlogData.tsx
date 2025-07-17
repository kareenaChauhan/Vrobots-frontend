import type { Product, BlogPost, CompanyLogo, CountdownTimer, SafetyCertification, ProductSpecification } from '../types/BabyProducts';

export const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Sink into Comfort with our Luxurious\nShoe Collection',
      date: '20 May 2023',
      image: '/images/img_pic5_png.png'
    },
    {
      id: '2',
      title: 'Uncovering The\nBeauty Benefits\nof Plant-Based\nSkincare',
      date: '10 Dec 2023',
      image: '/images/img_pic6_png.png'
    },
    {
      id: '3',
      title: 'Making Outing\nExperience for\nYour Baby',
      date: '21 Jan 2023',
      image: '/images/img_pic7_png.png'
    },
    {
      id: '4',
      title: 'The Ultimate Trolley for Your Little\nAdventurer',
      date: '17 May 2023',
      image: '/images/img_pic8_png.png'
    }
  ];

   export const companyLogos: CompanyLogo[] = [
    { id: '1', name: 'Company 1', image: '/images/img_logo1_png.png' },
    { id: '2', name: 'Company 2', image: '/images/img_logo2_png.png' },
    { id: '3', name: 'Company 3', image: '/images/img_logo3_png.png' },
    { id: '4', name: 'Company 4', image: '/images/img_logo4_png.png' },
    { id: '5', name: 'Company 5', image: '/images/img_logo5_png.png' },
    { id: '6', name: 'Company 6', image: '/images/img_logo6_png.png' },
    { id: '7', name: 'Company 7', image: '/images/img_logo7_png.png' },
    { id: '8', name: 'Company 8', image: '/images/img_logo8_png.png' }
  ];
   export const specifications: ProductSpecification[] = [
    { label: 'Harness Mode - Rear-Facing', value: '5-40 lbs' },
    { label: 'Harness Mode - Forward-Facing', value: '25-65 lbs' },
    { label: 'Booster Mode - Harness + Booster', value: '40-100 lbs' },
    { label: 'Booster Mode - Backless', value: 'n/a' },
    { label: 'Rear-Facing Child Max Height Capacity', value: '43 in' },
    { label: 'Forward-Facing Child Max Height Capacity', value: '54 in' },
    { label: 'Booster Child Height Capacity', value: '38-57 in' }
  ];

   export const safetyCertifications: SafetyCertification[] = [
    {
      id: '1',
      title: 'Age Group',
      description: '0-7 Yrs',
      icon: '/images/img_component_2.svg'
    },
    {
      id: '2',
      title: 'Weight Capacity',
      description: '0-25 Kgs',
      icon: '/images/img_component_2_gray_500.svg'
    }
  ];

   export const safetyFeatures = [
    'Comfy Headrest',
    'Removable and\nWashable Cover',
    '5 Point Safety\nHarness'
  ];
   export const features = [
    {
      title: 'All-in-One Car Seat',
      description: 'One car seat that fits your child, vehicle\nand life from birth through booster'
    },
    {
      title: 'Space-Saving Design',
      description: 'Slim, space-saving design takes up less\nspace in vehicle without compromising\ncomfort'
    },
    {
      title: 'Easiest to Install Correctly',
      description: 'Chicco patented SuperCinch force-\nmultiplying LATCH tightener ensures a\ntight and secure fit every time'
    },
    {
      title: 'No Added Chemicals',
      description: 'ClearTex products meet federal\nflammability standards without added\nchemicals'
    }
  ];

  export const chipItems = [
    { id: 'add-to-cart', label: 'ADD TO CART', variant: 'filled' as const },
    { id: 'view-details', label: 'VIEW DETAILS', variant: 'outlined' as const }
  ];