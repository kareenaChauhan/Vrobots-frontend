export interface SubMenuItem {
    name: string;
    path: string;
    description?: string;
  }
  
  export interface NavigationItem {
    name: string;
    path: string;
    submenu: SubMenuItem[];
  }
  
  export const sidebarNav: NavigationItem[] = [
    {
      name: 'HOME',
      path: '/',
      submenu: [
        // { name: 'Home Default', path: '/', description: 'Main homepage' },
        // { name: 'Home Modern', path: '/home-modern', description: 'Modern layout' },
        // { name: 'Home Classic', path: '/home-classic', description: 'Classic design' },
        // { name: 'Home Minimal', path: '/home-minimal', description: 'Minimalist approach' },
        // { name: 'Home Creative', path: '/home-creative', description: 'Creative showcase' },
      ]
    },
    {
      name: 'SHOP',
      path: '/shop',
      submenu: [
        // { name: 'Shop Catalog', path: '/shop', description: 'Browse all products' },
        // { name: 'Product Categories', path: '/shop/categories', description: 'Shop by category' },
        // { name: 'Product Details', path: '/shop/product-details', description: 'Single product view' },
        // { name: 'Shopping Cart', path: '/shop/cart', description: 'View cart items' },
        // { name: 'Checkout', path: '/shop/checkout', description: 'Complete purchase' },
        // { name: 'Wishlist', path: '/shop/wishlist', description: 'Saved items' },
        // { name: 'Compare Products', path: '/shop/compare', description: 'Product comparison' },
        // { name: 'Order Tracking', path: '/shop/track-order', description: 'Track your order' },
        // { name: 'My Orders', path: '/shop/orders', description: 'Order history' },
        // { name: 'Returns & Refunds', path: '/shop/returns', description: 'Return policy' },
      ]
    },
    // {
    //   name: 'BLOG',
    //   path: '/blog',
    //   submenu: [
    //     { name: 'Blog Grid', path: '/blog', description: 'All blog posts' },
    //     { name: 'Blog List', path: '/blog/list', description: 'List view' },
    //     { name: 'Blog Single', path: '/blog/single', description: 'Single post view' },
    //     { name: 'Blog Categories', path: '/blog/categories', description: 'Browse by category' },
    //     { name: 'Blog Tags', path: '/blog/tags', description: 'Browse by tags' },
    //     { name: 'Blog Archive', path: '/blog/archive', description: 'Monthly archives' },
    //     { name: 'Author Profile', path: '/blog/author', description: 'Author information' },
    //     { name: 'Blog Search', path: '/blog/search', description: 'Search posts' },
    //   ]
    // },
    {
      name: 'ABOUT US',
      path: '/about-us',
      submenu: [
        // { name: 'Blog Grid', path: '/blog', description: 'All blog posts' },
        // { name: 'Blog List', path: '/blog/list', description: 'List view' },
        // { name: 'Blog Single', path: '/blog/single', description: 'Single post view' },
        // { name: 'Blog Categories', path: '/blog/categories', description: 'Browse by category' },
        // { name: 'Blog Tags', path: '/blog/tags', description: 'Browse by tags' },
        // { name: 'Blog Archive', path: '/blog/archive', description: 'Monthly archives' },
        // { name: 'Author Profile', path: '/blog/author', description: 'Author information' },
        // { name: 'Blog Search', path: '/blog/search', description: 'Search posts' },
      ]
    },
    {
      name: 'CONTACT US',
      path: '/contact-us',
      submenu: [
        // { name: 'Contact Form', path: '/contact', description: 'Get in touch' },
        // { name: 'Contact Info', path: '/contact/info', description: 'Office locations' },
        // { name: 'Office Locations', path: '/contact/locations', description: 'Find us' },
        // { name: 'Support Center', path: '/contact/support', description: 'Customer support' },
        // { name: 'Live Chat', path: '/contact/chat', description: 'Chat with us' },
        // { name: 'Schedule Meeting', path: '/contact/meeting', description: 'Book appointment' },
        // { name: 'Feedback', path: '/contact/feedback', description: 'Share feedback' },
        // { name: 'Report Issue', path: '/contact/report', description: 'Report problems' },
      ]
    },
  ];
  
  // Additional navigation data for different sections
  export const headerNav: NavigationItem[] = [
    {
      name: 'HOME',
      path: '/',
      submenu: []
    },
    {
      name: 'SHOP',
      path: '/shop',
      submenu: [
        { name: 'All Products', path: '/shop' },
        { name: 'Categories', path: '/shop/categories' },
        { name: 'New Arrivals', path: '/shop/new-arrivals' },
        { name: 'Best Sellers', path: '/shop/best-sellers' },
        { name: 'Sale Items', path: '/shop/sale' },
      ]
    },
    {
      name: 'BLOG',
      path: '/blog',
      submenu: [
        { name: 'Recent Posts', path: '/blog' },
        { name: 'Categories', path: '/blog/categories' },
        { name: 'Popular Posts', path: '/blog/popular' },
      ]
    },
    {
      name: 'PORTFOLIO',
      path: '/portfolio',
      submenu: [
        { name: 'All Projects', path: '/portfolio' },
        { name: 'Web Design', path: '/portfolio/web-design' },
        { name: 'Mobile Apps', path: '/portfolio/mobile-apps' },
        { name: 'Branding', path: '/portfolio/branding' },
      ]
    },
    {
      name: 'PAGES',
      path: '/pages',
      submenu: [
        { name: 'About Us', path: '/about-us' },
        { name: 'About Me', path: '/about-me' },
        { name: 'Pricing Table', path: '/pricing-table' },
        { name: 'Our Gift Vouchers', path: '/gift-vouchers' },
        { name: 'What We Do', path: '/what-we-do' },
        { name: 'Faqs', path: '/faqs' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Contact Us', path: '/contact-us' },
        { name: 'Error 404', path: '/404' },
        { name: 'Under Construction', path: '/under-construction' },
        { name: 'Coming Soon', path: '/coming-soon' },
      ]
    },
  ];
  
  // Footer navigation data
  export const footerNav = {
    company: [
      { name: 'About Us', path: '/about-us' },
      { name: 'Our Story', path: '/our-story' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Blog', path: '/blog' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Live Chat', path: '/contact/chat' },
      { name: 'FAQ', path: '/faqs' },
      { name: 'Returns', path: '/shop/returns' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
    social: [
      { name: 'Facebook', path: 'https://facebook.com', external: true },
      { name: 'Twitter', path: 'https://twitter.com', external: true },
      { name: 'Instagram', path: 'https://instagram.com', external: true },
      { name: 'LinkedIn', path: 'https://linkedin.com', external: true },
    ],
  };
  
  // Mobile navigation data (simplified for mobile)
  export const mobileNav: NavigationItem[] = [
    {
      name: 'HOME',
      path: '/',
      submenu: []
    },
    {
      name: 'SHOP',
      path: '/shop',
      submenu: [
        { name: 'All Products', path: '/shop' },
        { name: 'Categories', path: '/shop/categories' },
        { name: 'Cart', path: '/shop/cart' },
        { name: 'Wishlist', path: '/shop/wishlist' },
      ]
    },
    {
      name: 'BLOG',
      path: '/blog',
      submenu: []
    },
    {
      name: 'ABOUT',
      path: '/about-us',
      submenu: []
    },
    {
      name: 'CONTACT',
      path: '/contact',
      submenu: []
    },
  ];
  
  export default sidebarNav;