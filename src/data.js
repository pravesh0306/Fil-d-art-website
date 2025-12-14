import siyaramCover from './assets/siyaram-mobile-cover.jpg';
import roseAzureBag from './assets/rose-azure-bag.jpg';

import canvas1 from './assets/canvas/1.jpg';
import canvas2 from './assets/canvas/2.jpg';
import canvas3 from './assets/canvas/3.jpg';
import canvas4 from './assets/canvas/4.jpg';
import canvas7 from './assets/canvas/7.JPG';
import canvas8 from './assets/canvas/8.png';
import canvas9 from './assets/canvas/9.jpeg';

export const wearableCategories = [
  { id: 'jackets', name: 'Jackets & Shirts', image: 'https://images.unsplash.com/photo-1551488852-d8048f578b66?auto=format&fit=crop&q=80&w=800' },
  { id: 'bags', name: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76fe4f?auto=format&fit=crop&q=80&w=800' },
  { id: 'shoes', name: 'Shoes', image: 'https://images.unsplash.com/photo-1560769625-ed5961594540?auto=format&fit=crop&q=80&w=800' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800' }
];

export const wearableProducts = [
  {
    id: 7,
    name: 'Siyaram',
    category: 'accessories',
    price: '70 AED',
    image: siyaramCover,
    description: 'Hand-painted mobile cover for OnePlus Nord featuring beautiful traditional art inspired design.',
    material: 'Hard polycarbonate case with protective coating',
    care: 'Wipe gently with a soft, dry cloth. Avoid harsh chemicals and excessive moisture. The artwork is sealed with a protective finish but should be handled with care to prevent scratches.'
  },
  {
    id: 8,
    name: 'Rose & Azure',
    category: 'bags',
    price: 'Custom',
    image: roseAzureBag,
    description: 'Elegant hand-painted leather bag featuring delicate pink roses and an azure blue bird. The floral motifs are beautifully placed on both the flap and front panel, creating a harmonious nature-inspired design.',
    material: 'Premium faux leather with smooth finish and structured shape. Features sturdy handles and secure clasp closure.',
    care: 'Wipe gently with a soft, slightly damp cloth for cleaning. Avoid harsh leather cleaners on painted areas. Keep away from prolonged water exposure and extreme heat. The hand-painted artwork is sealed with a protective finish but should be treated delicately. Store in a dust bag when not in use to protect the painting.'
  },
  {
    id: 1,
    name: 'The Midnight Bloom Jacket',
    category: 'jackets',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800',
    description: 'Hand-painted denim jacket featuring midnight blue florals.',
    material: '100% Cotton Denim - Medium weight, pre-washed for comfort',
    care: 'Turn inside out and hand wash in cold water with mild detergent. Air dry flat. Iron on reverse side only, avoiding painted areas. Do not bleach or tumble dry.'
  },
  {
    id: 2,
    name: 'Abstract Flora Shirt',
    category: 'jackets',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    description: 'White linen shirt with abstract floral motifs.',
    material: '100% Premium Linen - Lightweight and breathable',
    care: 'Hand wash in cold water or dry clean recommended. Linen naturally wrinkles; iron on medium heat on reverse side. Avoid direct ironing on painted design. Store on hanger to maintain shape.'
  },
  {
    id: 3,
    name: 'Golden Hour Tote',
    category: 'bags',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
    description: 'Canvas tote bag with golden hour inspired painting.',
    material: '100% Heavy-duty cotton canvas with reinforced straps',
    care: 'Spot clean with damp cloth and mild soap. For deeper cleaning, hand wash gently and air dry completely. Do not machine wash. The painted surface is water-resistant but avoid prolonged exposure to moisture.'
  },
  {
    id: 4,
    name: 'Painted Canvas Sneakers',
    category: 'shoes',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1560769625-ed5961594540?auto=format&fit=crop&q=80&w=800',
    description: 'High-top sneakers with unique color splashes.',
    material: 'Canvas upper with rubber sole. Sealed with waterproof protective coating',
    care: 'Spot clean with a damp cloth. Avoid submerging in water. Use a soft brush for dirt removal. Allow to air dry naturally. The painted design is sealed but treat gently to preserve artwork.'
  },
  {
    id: 5,
    name: 'Silk Scarf - Azure',
    category: 'accessories',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800',
    description: '100% silk scarf hand-dyed and painted.',
    material: '100% Pure Mulberry Silk - Luxuriously soft with natural sheen',
    care: 'Dry clean only or hand wash in cold water with silk-specific detergent. Do not wring or twist. Roll in towel to remove excess water, then lay flat to dry. Use cool iron on reverse side while slightly damp. Store flat or rolled, never hang.'
  },
  {
    id: 6,
    name: 'Vintage Denim Revival',
    category: 'jackets',
    price: 'Custom',
    image: 'https://images.unsplash.com/photo-1529391409740-59f2dea98771?auto=format&fit=crop&q=80&w=800',
    description: 'Upcycled vintage denim with modern art back piece.',
    material: 'Upcycled vintage denim (100% cotton) - Each piece varies slightly due to vintage sourcing',
    care: 'Hand wash cold separately to preserve vintage fabric and artwork. Air dry only. Iron on reverse side with low heat. The painted back panel should be treated with extra care as it is on vintage material.'
  }
];

export const canvasArtworks = [
  {
    id: 1,
    title: 'Ethereal Silence',
    year: '2024',
    dimensions: '48" x 60"',
    medium: 'Acrylic and texture on canvas',
    image: canvas1,
    available: true
  },
  {
    id: 2,
    title: 'Urban Rhythm',
    year: '2023',
    dimensions: '36" x 36"',
    medium: 'Mixed media',
    image: canvas2,
    available: false
  },
  {
    id: 3,
    title: 'Serenity in Blue',
    year: '2024',
    dimensions: '40" x 50"',
    medium: 'Oil on canvas',
    image: canvas3,
    available: true
  },
  {
    id: 4,
    title: 'Golden Fragments',
    year: '2023',
    dimensions: '24" x 24"',
    medium: 'Acrylic with gold leaf',
    image: canvas4,
    available: true
  },
  {
    id: 7,
    title: 'Abstract Dimensions',
    year: '2024',
    dimensions: '30" x 40"',
    medium: 'Acrylic on Canvas',
    image: canvas7,
    available: true
  },
  {
    id: 8,
    title: 'Liquid Dreams',
    year: '2024',
    dimensions: '24" x 36"',
    medium: 'Mixed Media',
    image: canvas8,
    available: true
  },
  {
    id: 9,
    title: 'Modern Textures',
    year: '2024',
    dimensions: '16" x 20"',
    medium: 'Texture Paste & Acrylic',
    image: canvas9,
    available: true
  }
];

export const journalPosts = [
  {
    id: 'art-you-wear',
    title: 'Art You Wear',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Exploring the philosophy behind wearable art and how it transforms everyday fashion into personal expression.',
    content: `
      <p>Art should not be confined to galleries and museums. It should be lived with, touched, and worn. "Art You Wear" is at the core of my philosophy, bridging the gap between the static canvas and the dynamic movement of the human body.</p>
      
      <h3>The Philosophy</h3>
      <p>When you wear a piece of hand-painted art, you become a walking gallery. You carry the artist's brushstrokes, emotions, and energy with you. It creates a unique connection between the creator and the collector that traditional canvas art rarely achieves.</p>
      
      <h3>More Than Fashion</h3>
      <p>This is not just about fashion; it's about expression. Each jacket, bag, or accessory is a conversation starter, a statement piece that defies mass production. It celebrates individuality and the human touch in an increasingly automated world.</p>
    `
  },
  {
    id: 'from-canvas-to-cloth',
    title: 'From Canvas to Cloth',
    date: 'April 02, 2024',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76fe4f?auto=format&fit=crop&q=80&w=800',
    excerpt: 'A behind-the-scenes look at the intricate process of adapting painting techniques for fabric and textiles.',
    content: `
      <p>Transitioning from traditional canvas to fabric requires a complete reimagining of technique. Fabric moves, stretches, and breathes. It demands a different relationship with the paint.</p>
      
      <h3>The Preparation</h3>
      <p>Every piece starts with fabric preparation. Whether it's vintage denim or premium leather, the surface must be primed to accept the paint while remaining flexible. This initial step is crucial for longevity.</p>
      
      <h3>The Process</h3>
      <p>I use specialized fabric mediums mixed with high-quality acrylics. Layering is key. Unlike canvas where I might build thick texture, wearable art requires thin, durable layers that won't crack. It's a delicate balance of artistic vision and technical durability.</p>
    `
  },
  {
    id: 'exhibition-notes-2024',
    title: 'Exhibition Notes 2024',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb39279c71?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Reflections on the latest gallery showcase and the evolving direction of my mixed media work.',
    content: `
      <p>The 2024 exhibition season has been a whirlwind of color and connection. Showcasing my latest collection "Ethereal Silence" allowed me to explore themes of quietude amidst urban chaos.</p>
      
      <h3>Highlights</h3>
      <p>Seeing the reactions of visitors as they interacted with the textured pieces was the highlight. The large-scale works were designed to be immersive, inviting viewers to get close and observe the details.</p>
      
      <h3>What's Next</h3>
      <p>This exhibition has sparked new ideas for combining my wearable line with my fine art practice. Stay tuned for a collection that blurs these lines even further.</p>
    `
  }
];
