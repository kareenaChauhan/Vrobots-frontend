import type { SliderGroup, SliderItem, Product, CategoryLink } from '../../src/types/SmartHomeCatalog';

export const sliderGroups: SliderGroup[] = [
  {
    id: '1',
    title: 'Smart Thermostats',
    items: [
      {
        id: 'thermo-1',
        title: 'Nest Learning Thermostat',
        description: 'Smart thermostat that learns your schedule and saves energy automatically.',
        price: '$249.99',
        image: 'https://images.pexels.com/photos/221537/pexels-photo-221537.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#000000', '#808080'],
        category: 'thermostats'
      },
      {
        id: 'thermo-2',
        title: 'Ecobee Smart Thermostat',
        description: 'Energy-efficient smart thermostat with room sensors and voice control.',
        price: '$199.99',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#333333'],
        category: 'thermostats'
      },
      {
        id: 'thermo-3',
        title: 'Honeywell T9 Smart Thermostat',
        description: 'Smart thermostat with room sensors for better temperature control.',
        price: '$179.99',
        image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#0d775d'],
        category: 'thermostats'
      },
      {
        id: 'thermo-4',
        title: 'Sensi Smart Thermostat',
        description: 'Easy-to-install smart thermostat with mobile app control.',
        price: '$129.99',
        image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#5f84bc'],
        category: 'thermostats'
      }
    ]
  },
  {
    id: '4',
    title: 'Smart Locks',
    items: [
      {
        id: 'lock-1',
        title: 'Smart Deadbolt Lock',
        description: 'Keyless entry with smartphone control and multiple access codes.',
        price: '$179.99',
        image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#333333', '#c0c0c0'],
        category: 'locks'
      },
      {
        id: 'lock-2',
        title: 'Fingerprint Door Lock',
        description: 'Biometric door lock with fingerprint recognition and backup keys.',
        price: '$229.99',
        image: 'https://images.pexels.com/photos/279811/pexels-photo-279811.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#000000', '#c0c0c0'],
        category: 'locks'
      },
      {
        id: 'lock-3',
        title: 'Smart Padlock',
        description: 'Bluetooth-enabled padlock for gates, sheds, and outdoor storage.',
        price: '$59.99',
        image: 'https://images.pexels.com/photos/279812/pexels-photo-279812.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#000000', '#0d775d'],
        category: 'locks'
      },
      {
        id: 'lock-4',
        title: 'Smart Lock Set',
        description: 'Complete smart lock system with keypad, app control, and auto-lock.',
        price: '$249.99',
        image: 'https://images.pexels.com/photos/279813/pexels-photo-279813.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#333333', '#5f84bc'],
        category: 'locks'
      }
    ]
  },
  {
    id: '1',
    title: 'Smart Thermostats',
    items: [
      {
        id: 'thermo-1',
        title: 'Nest Learning Thermostat',
        description: 'Smart thermostat that learns your schedule and saves energy automatically.',
        price: '$249.99',
        image: 'https://images.pexels.com/photos/221537/pexels-photo-221537.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#000000', '#808080'],
        category: 'thermostats'
      },
      {
        id: 'thermo-2',
        title: 'Ecobee Smart Thermostat',
        description: 'Energy-efficient smart thermostat with room sensors and voice control.',
        price: '$199.99',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#333333'],
        category: 'thermostats'
      },
      {
        id: 'thermo-3',
        title: 'Honeywell T9 Smart Thermostat',
        description: 'Smart thermostat with room sensors for better temperature control.',
        price: '$179.99',
        image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#0d775d'],
        category: 'thermostats'
      },
      {
        id: 'thermo-4',
        title: 'Sensi Smart Thermostat',
        description: 'Easy-to-install smart thermostat with mobile app control.',
        price: '$129.99',
        image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#ffffff', '#5f84bc'],
        category: 'thermostats'
      }
    ]
  },
  {
    id: '4',
    title: 'Smart Locks',
    items: [
      {
        id: 'lock-1',
        title: 'Smart Deadbolt Lock',
        description: 'Keyless entry with smartphone control and multiple access codes.',
        price: '$179.99',
        image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#333333', '#c0c0c0'],
        category: 'locks'
      },
      {
        id: 'lock-2',
        title: 'Fingerprint Door Lock',
        description: 'Biometric door lock with fingerprint recognition and backup keys.',
        price: '$229.99',
        image: 'https://images.pexels.com/photos/279811/pexels-photo-279811.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#000000', '#c0c0c0'],
        category: 'locks'
      },
      {
        id: 'lock-3',
        title: 'Smart Padlock',
        description: 'Bluetooth-enabled padlock for gates, sheds, and outdoor storage.',
        price: '$59.99',
        image: 'https://images.pexels.com/photos/279812/pexels-photo-279812.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#000000', '#0d775d'],
        category: 'locks'
      },
      {
        id: 'lock-4',
        title: 'Smart Lock Set',
        description: 'Complete smart lock system with keypad, app control, and auto-lock.',
        price: '$249.99',
        image: 'https://images.pexels.com/photos/279813/pexels-photo-279813.jpeg?auto=compress&cs=tinysrgb&w=800',
        colors: ['#333333', '#5f84bc'],
        category: 'locks'
      }
    ]
  },

];

export const categoryLinks: CategoryLink[] = [
  { name: 'thermostats', href: '#', active: true },
  { name: 'lighting', href: '#', active: false },
  { name: 'security systems', href: '#', active: false },
  { name: 'locks', href: '#', active: false },
  { name: 'home assistants', href: '#', active: false },
  { name: 'water monitors', href: '#', active: false }
];

export const contactInfo = [
  'hello@smarthome.com',
  '+1 (555) 123-4567',
  'Instagram',
  'Facebook',
  'Twitter'
];