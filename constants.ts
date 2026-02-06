
import { Product, Category } from './types';

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  location: string;
  shoe: string;
}

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const categories: Category[] = ['Men', 'Women', 'Luxe', 'New In'];
  const colors = ['Midnight Black', 'Cloud White', 'Titanium Grey', 'Royal Navy', 'Sand Beige', 'Wine Red'];
  const sizes = ['38', '39', '40', '41', '42', '43', '44', '45'];

  const adjectives = ['Aero', 'Vantage', 'Luxe', 'Velocity', 'Cloud', 'Prime', 'Apex', 'Zenith', 'Heritage', 'Stealth'];
  const types = ['Runner', 'Oxford', 'Loafer', 'Sneaker', 'Derby', 'Boot', 'High-Top', 'Moccasin'];

  // Using Unsplash with footwear keywords for better accuracy
  const shoeImages = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512374382149-4332c6c02151?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop"
  ];

  for (let i = 1; i <= 100; i++) {
    const category = categories[i % categories.length];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const name = `${adj} ${type} ${i < 10 ? '0' + i : i}`;
    
    products.push({
      id: `prod-${i}`,
      name,
      category,
      price: category === 'Luxe' ? 450 + (i * 5) : 120 + (i * 2),
      description: `Expertly crafted from premium materials, the ${name} represents the pinnacle of contemporary footwear design. Featuring an ergonomic sole and breathable lining for all-day comfort without compromising on style.`,
      // Cycle through high-quality shoe images and fallback to seeded keyword-based picsum
      image: shoeImages[i % shoeImages.length] || `https://picsum.photos/seed/footwear-shoe-${i}/800/1000`,
      colors: colors.slice(0, 2 + Math.floor(Math.random() * 3)),
      sizes: sizes.slice(Math.floor(Math.random() * 3)),
      isFeatured: i <= 5
    });
  }
  return products;
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Alexander V.',
    rating: 5,
    content: "The quality is simply unmatched. I've worn high-end brands for decades, but the comfort and silhouette of the Luxe Derby are in a league of their own.",
    location: 'London, UK',
    shoe: 'Luxe Derby 03'
  },
  {
    id: 'rev-2',
    author: 'Elena Rossi',
    rating: 5,
    content: "Absolute perfection. The ordering process via WhatsApp was surprisingly elite and personalized. Feels like a private concierge service.",
    location: 'Milan, Italy',
    shoe: 'Aero Runner 01'
  },
  {
    id: 'rev-3',
    author: 'Marcus Chen',
    rating: 4,
    content: "Minimalist design at its finest. The Zenith High-Top looks even better in person. The leather quality is buttery soft.",
    location: 'Tokyo, Japan',
    shoe: 'Zenith High-Top 08'
  }
];

export const PRODUCTS = generateProducts();
export const WHATSAPP_NUMBER = "1234567890"; // Dummy number
