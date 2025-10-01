export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'cosmetics' | 'toys' | 'jewels';
}

export const products: Product[] = [
  // Cosmetics
  {
    id: '1',
    name: 'Luxury Lipstick Set',
    price: 49.99,
    description: 'Premium collection of 12 long-lasting lipsticks in stunning shades. Enriched with vitamin E and natural oils for smooth, moisturized lips.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    category: 'cosmetics',
  },
  {
    id: '2',
    name: 'Glow Serum',
    price: 79.99,
    description: 'Revolutionary anti-aging serum with hyaluronic acid and vitamin C. Reduces fine lines and gives your skin a radiant glow.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    category: 'cosmetics',
  },
  {
    id: '3',
    name: 'Eyeshadow Palette',
    price: 59.99,
    description: 'Professional 24-color eyeshadow palette with matte and shimmer finishes. Highly pigmented and blendable formula.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
    category: 'cosmetics',
  },
  {
    id: '4',
    name: 'Perfume Collection',
    price: 129.99,
    description: 'Exquisite set of 5 designer fragrances. Each bottle contains 15ml of long-lasting eau de parfum.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
    category: 'cosmetics',
  },

  // Toys
  {
    id: '5',
    name: 'Building Blocks Set',
    price: 39.99,
    description: '500-piece creative building blocks set. Compatible with major brands. Develops creativity and motor skills.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500',
    category: 'toys',
  },
  {
    id: '6',
    name: 'RC Racing Car',
    price: 89.99,
    description: 'High-speed remote control car with LED lights. Reaches speeds up to 30 mph. Includes rechargeable battery.',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500',
    category: 'toys',
  },
  {
    id: '7',
    name: 'Plush Teddy Bear',
    price: 29.99,
    description: 'Super soft and cuddly teddy bear, 18 inches tall. Made from premium quality plush material. Perfect gift for all ages.',
    image: 'https://images.unsplash.com/photo-1560582861-45078880e48e?w=500',
    category: 'toys',
  },
  {
    id: '8',
    name: 'Educational STEM Kit',
    price: 69.99,
    description: 'Complete science experiment kit with 50+ experiments. Includes lab equipment and detailed instruction manual.',
    image: 'https://images.unsplash.com/photo-1530032623512-1d46e9a8c7a6?w=500',
    category: 'toys',
  },

  // Jewels
  {
    id: '9',
    name: 'Diamond Necklace',
    price: 899.99,
    description: 'Stunning 18K white gold necklace with genuine diamonds. Total carat weight: 2.5ct. Comes with certificate of authenticity.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500',
    category: 'jewels',
  },
  {
    id: '10',
    name: 'Gold Bracelet',
    price: 499.99,
    description: 'Elegant 14K yellow gold bracelet with intricate design. Adjustable length, perfect for any wrist size.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500',
    category: 'jewels',
  },
  {
    id: '11',
    name: 'Pearl Earrings',
    price: 299.99,
    description: 'Classic freshwater pearl earrings set in sterling silver. Timeless elegance for any occasion.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500',
    category: 'jewels',
  },
  {
    id: '12',
    name: 'Sapphire Ring',
    price: 1299.99,
    description: 'Magnificent blue sapphire ring surrounded by diamonds. 18K white gold setting. 3ct center stone.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500',
    category: 'jewels',
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((p) => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id);
};
