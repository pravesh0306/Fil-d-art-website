import fashion1back from './assets/fashion/1_back.webp';
import fashion2 from './assets/fashion/2.png';
import fashion3 from './assets/fashion/3.png';
import fashion4 from './assets/fashion/4.png';
import fashion5 from './assets/fashion/5.png';
import fashion6 from './assets/fashion/6.png';
import fashion7 from './assets/fashion/7.png';
import fashion8 from './assets/fashion/8.JPG';
import fashion9 from './assets/fashion/9.png';
import fashion10 from './assets/fashion/10.jpg';
import fashion11 from './assets/fashion/11.jpg';
import fashion12 from './assets/fashion/12.jpg';
import fashion13 from './assets/fashion/13.jpg';
import fashion14 from './assets/fashion/14.jpg';
import fashion15 from './assets/fashion/15.png';
import fashion16 from './assets/fashion/16.jpeg';
import fashion17 from './assets/fashion/17.jpg';
import fashion18 from './assets/fashion/18.jpg';
import fashion19 from './assets/fashion/19.png';
import fashion20 from './assets/fashion/20.jpg';
import fashion21 from './assets/fashion/21.jpg';
import fashion22 from './assets/fashion/22.jpg';
import fashion23 from './assets/fashion/23.jpg';
import fashion24 from './assets/fashion/24.jpg';
import fashion25 from './assets/fashion/25.jpeg';
import fashion26 from './assets/fashion/26.jpeg';
import fashion27 from './assets/fashion/27.jpg';
import fashion28 from './assets/fashion/28.png';

// Keep canvas imports
import canvas1 from './assets/canvas/1.jpg';
import canvas2 from './assets/canvas/2.jpg';
import canvas3 from './assets/canvas/3.jpg';
import canvas4 from './assets/canvas/4.jpg';
import canvas5 from './assets/canvas/5.png';
import canvas7 from './assets/canvas/7.JPG';
import canvas8 from './assets/canvas/8.png';
import canvas9 from './assets/canvas/9.jpeg';

export const wearableCategories = [
  { id: 'jackets', name: 'Jackets & Shirts', image: fashion2 },
  { id: 'bags', name: 'Bags', image: fashion7 },
  { id: 'shoes', name: 'Shoes', image: 'https://images.unsplash.com/photo-1560769625-ed5961594540?auto=format&fit=crop&q=80&w=800' },
  { id: 'accessories', name: 'Accessories', image: fashion9 }
];

export const wearableProducts = [
  {
    id: 1,
    name: 'Angel in Purgatory',
    category: 'jackets',
    price: 'Custom',
    image: fashion1back,
    description: 'Reimagines classical art (like Venus) with a surrounding cast of cherubs and the bold silver text "ANGEL IN PURGATORY," giving the classical imagery a rebellious, streetwear twist.',
    keywords: 'Classical Art, Renaissance Remix, Streetwear, Denim, Angel, Custom Art, Unique'
  },
  {
    id: 2,
    name: 'The Golden Deity Jacket',
    category: 'jackets',
    price: 'Custom',
    image: fashion2,
    description: 'A stunning statement piece featuring a highly detailed, monochrome portrait of a crowned figure, adorned with an elaborate gold halo and empowering gold calligraphy. The contrast between matte black denim and shimmering gold creates a regal, luxurious aesthetic.',
    keywords: 'Denim, Hand-Painted, Gold, Streetwear, Statement, Custom Art, Beyoncé Style, Calligraphy'
  },
  {
    id: 3,
    name: 'The Off-Road Gypsy T-Shirt',
    category: 'jackets',
    price: 'Custom',
    image: fashion3,
    description: 'A minimalist yet detailed tribute to off-road culture, featuring a realistic painting of a modified black 4x4 (resembling a Maruti Gypsy/Suzuki Jimny) on a white tee.',
    keywords: 'T-Shirt, Hand-Painted, Automotive, Off-Road, 4x4, Car Art, Adventure'
  },
  {
    id: 4,
    name: 'Vibrant Street Sass',
    category: 'jackets',
    price: 'Custom',
    image: fashion4,
    description: 'This jacket bursts with energy, featuring a vivid, pop-art style portrait of a confident woman. The design uses bright neon greens, pinks, and blues for a playful, urban look.',
    keywords: 'Pop Art, Neon, Street Style, Denim, Custom Art, Urban, Bold Colors'
  },
  {
    id: 5,
    name: '"Think of Me" Statement Shirt',
    category: 'jackets',
    price: 'Custom',
    image: fashion5,
    description: 'A piece of wearable modern art with a charcoal-style painting of an intimate couple on the pocket, juxtaposed with bold stenciled text: "DO YOU STILL THINK OF ME".',
    keywords: 'Conceptual Art, Button-Down, Text Art, Hand-Painted, Modern, Narrative, Romance'
  },
  {
    id: 6,
    name: 'Innocent Wonder Shirt',
    category: 'jackets',
    price: 'Custom',
    image: fashion6,
    description: 'A white button-down featuring a hyper-realistic portrait of a young child with a surprised expression, providing a sweet, emotive focus on childhood curiosity.',
    keywords: 'Realistic Portrait, Childhood, Button-Down, Hand-Painted, Emotive, Yellow'
  },
  {
    id: 7,
    name: 'Starry Muse Tote',
    category: 'bags',
    price: 'Custom',
    image: fashion7,
    description: 'A functional accessory with a profile of a mythical figure whose hair flows into a starry, Van Gogh-style night sky, using vibrant blues and yellows.',
    keywords: 'Tote Bag, Impressionist, Van Gogh Style, Starry Night, Art Lover, Functional Art'
  },
  {
    id: 8,
    name: 'The Golden Lift',
    category: 'jackets',
    price: 'Custom',
    image: fashion8,
    description: 'A dynamic celebration of movement featuring a painted duo performing a dance lift, accented by delicate line art and a surreal "melting" effect in yellow paint.',
    keywords: 'Dance Art, Movement, Denim, Custom Art, Fluidity, Surreal, Mixed Media'
  },
  {
    id: 9,
    name: 'Celestial Trishul',
    category: 'accessories',
    price: 'Custom',
    image: fashion9,
    description: 'A unique accessory featuring a trident (Trishul) glowing with ethereal blue light, set against a vibrant cosmic background of purples and stars. Blends mythology with galaxy art.',
    keywords: 'Phone Case, Spiritual, Trishul, Galaxy Art, Custom Painted, Mystical, Starry'
  },
  {
    id: 10,
    name: 'The Iron Eagle',
    category: 'jackets',
    price: 'Custom',
    image: fashion10,
    description: 'A classic homage to biker culture and freedom. Features a massive spread-winged eagle clutching a stylized V-twin motorcycle engine in silver and yellow tones.',
    keywords: 'Biker, Denim, Eagle, V-Twin, Motorcycle, Custom Art, Freedom'
  },
  {
    id: 11,
    name: 'Silver Baroque Scroll',
    category: 'jackets',
    price: 'Custom',
    image: fashion11,
    description: 'An elegant black jacket covered in an intricate, all-over silver scroll and floral pattern. The metallic paint pops against the dark fabric, giving it a luxurious, baroque, or rococo-inspired aesthetic suitable for evening wear.',
    keywords: 'Baroque, Silver, Metallic, Floral Scroll, Elegant, Black Denim, Patterned'
  },
  {
    id: 12,
    name: 'The Subversive Lux',
    category: 'jackets',
    price: 'Custom',
    image: fashion12,
    description: 'A grunge-style black jacket featuring a moody portrait obscured by a Louis Vuitton pattern mask. The sleeves feature bold, graffiti-style text reading "THIS IS NOT" and "Louis Vuitton," creating a rebellious, anti-fashion statement piece.',
    keywords: 'Grunge, Street Art, Graffiti, Statement Piece, Black Jacket, Urban, Edgy'
  },
  {
    id: 13,
    name: 'Heart of Gold',
    category: 'jackets',
    price: 'Custom',
    image: fashion13,
    description: 'A black denim jacket featuring a striking illustration of an anatomical heart bound in chains. The gritty yellow and black art is complemented by the bold, stenciled text "HEART OF GOLD," creating a metaphor for guarded emotions.',
    keywords: 'Anatomical Heart, Grunge, Graphic, Denim Jacket, Streetwear, Text Art'
  },
  {
    id: 14,
    name: 'The Kintsugi Lion',
    category: 'jackets',
    price: 'Custom',
    image: fashion14,
    description: 'A majestic black denim jacket featuring a hyper-realistic lion portrait. The lion is detailed with "cracks" filled in gold paint, inspired by the Japanese art of Kintsugi (repairing with gold), symbolizing strength in healing. Finished with gold "FIL D\'ART" lettering.',
    keywords: 'Lion, Kintsugi, Gold, Black Denim, Wildlife Art, Streetwear, Custom Jacket'
  },
  {
    id: 15,
    name: 'Desi Pop Fusion',
    category: 'jackets',
    price: 'Custom',
    image: fashion15,
    description: 'A vibrant blue denim jacket blending traditional and modern vibes. Features a woman in traditional Indian jewelry and sunglasses holding a cocktail, surrounded by colorful stylized flowers and foliage. A fun, sassy celebration of cultural fusion.',
    keywords: 'Fusion Art, Desi Pop, Denim Jacket, Colorful, Portrait, Floral, Cocktail'
  },
  {
    id: 16,
    name: 'The Solitary Path Shirt',
    category: 'jackets',
    price: 'Custom',
    image: fashion16,
    description: 'A white linen button-down shirt featuring a serene, monochrome painting of a tree-lined path. The artwork spans the right side of the shirt, resembling a charcoal or ink sketch, perfect for a sophisticated, artistic look.',
    keywords: 'Linen Shirt, Landscape, Trees, Monochrome, Sketch Style, Nature, Minimalist'
  },
  {
    id: 17,
    name: 'Tropical Pop Bangles',
    category: 'accessories',
    price: 'Custom',
    image: fashion17,
    description: 'A lively set of wooden bangles featuring hand-painted designs. One showcases a juicy watermelon motif on green, while the other features delicate floral sketches on pink/coral, perfect for a summer statement.',
    keywords: 'Bangles, Jewelry, Tropical, Watermelon, Floral, Summer, Hand-Painted'
  },
  {
    id: 18,
    name: 'Sunflower L\'Amour',
    category: 'accessories',
    price: 'Custom',
    image: fashion18,
    description: 'A charming olive green wallet customized with a bright, sunny yellow sunflower. Next to the bloom, the word "l\'amour" (love) is written in white script, making it a sweet and romantic accessory.',
    keywords: 'Wallet, Sunflower, Floral, French, L\'Amour, Cute, Custom Leather'
  },
  {
    id: 19,
    name: 'Gilded Peony & Butterfly',
    category: 'bags',
    price: 'Custom',
    image: fashion19,
    description: 'A sophisticated customization on a black tote bag. Features a rectangular art panel with delicately painted white peonies, golden fruit, and butterflies. The design uses gold outlines to create a stained-glass or embroidery effect.',
    keywords: 'Tote Bag, Floral, Peony, Butterfly, Gold, Elegant, Custom Accessories'
  },
  {
    id: 20,
    name: 'Sacred Nandi & Lotus',
    category: 'accessories',
    price: 'Custom',
    image: fashion20,
    description: 'A culturally rich phone case design featuring a white Nandi (sacred bull) adorned in gold jewelry, set against a background of vibrant pink lotus flowers and blue sky. A beautiful blend of traditional devotion and modern utility.',
    keywords: 'Phone Case, Nandi, Lotus, Indian Art, Spiritual, Traditional, Hand-Painted'
  },
  {
    id: 21,
    name: 'Wild Duo Tablet Case',
    category: 'accessories',
    price: 'Custom',
    image: fashion21,
    description: 'A striking folio case for tablets featuring a Black Panther and a Leopard nestled among lush tropical foliage. The contrast between the dark predator and the spotted cat against the green leaves creates a vibrant, wild aesthetic.',
    keywords: 'iPad Case, Tablet Cover, Panther, Leopard, Jungle, Wildlife Art, Tech Accessories'
  },
  {
    id: 22,
    name: 'The Dapper Pup',
    category: 'jackets',
    price: 'Custom',
    image: fashion22,
    description: 'A heartwarming custom denim jacket featuring a realistic portrait of a Shih Tzu wearing its own denim shirt. The attention to detail in the fur texture and the "denim-on-denim" concept makes this a cute, meta-fashion statement.',
    keywords: 'Dog Portrait, Shih Tzu, Pet Art, Cute, Denim Jacket, Custom Art, Realistic'
  },
  {
    id: 23,
    name: 'Majestic Lion Shirt',
    category: 'jackets',
    price: 'Custom',
    image: fashion23,
    description: 'A bold black button-down shirt featuring a massive, hyper-realistic portrait of a lion\'s face spanning one side. The golden mane and piercing blue eyes create an intense and regal focal point.',
    keywords: 'Men\'s Shirt, Lion, Wildlife, Realistic, Statement Wear, Black Shirt, King of Jungle'
  },
  {
    id: 24,
    name: 'Nature\'s Stag Tote',
    category: 'bags',
    price: 'Custom',
    image: fashion24,
    description: 'A bright yellow tote bag featuring a stylized deer head where the antlers transform into blooming branches. The blend of animal and botanical elements creates a whimsical, nature-loving design.',
    keywords: 'Tote Bag, Deer, Stag, Floral, Nature, Yellow, Whimsical, Accessories'
  },
  {
    id: 25,
    name: 'The Storyteller Jacket',
    category: 'jackets',
    price: 'Custom',
    image: fashion25,
    description: 'A custom black jacket paying homage to "How I Met Your Mother." It features iconic symbols like the yellow umbrella, blue French horn, and quotes like "Suit Up," creating a nostalgic collage for fans of the series.',
    keywords: 'TV Show, HIMYM, Pop Culture, Collage, Fan Art, Custom Jacket, Tribute'
  },
  {
    id: 26,
    name: 'Soul of Music Jacket',
    category: 'jackets',
    price: 'Custom',
    image: fashion26,
    description: 'A black denim jacket dedicated to music lovers. Features a painting of a guitarist with a colorful abstract background and the text "MUSIC SETS US FREE" and "DJ" with a crown, embodying the passion of live performance.',
    keywords: 'Music, Guitar, DJ, Colorful, Statement Jacket, Custom Denim, Streetwear'
  },
  {
    id: 27,
    name: 'Hummingbird Grace',
    category: 'jackets',
    price: 'Custom',
    image: fashion27,
    description: 'A sleek black shirt featuring a delicate painting of a hummingbird hovering near a branch. The iridescent colors of the bird contrast beautifully with the dark fabric, offering a subtle yet artistic touch.',
    keywords: 'Hummingbird, Bird Art, Nature, Black Shirt, Elegant, Minimalist Art'
  },
  {
    id: 28,
    name: 'Forever Us Keychain',
    category: 'accessories',
    price: 'Custom',
    image: fashion28,
    description: 'A personalized hand-painted wooden keychain featuring a charming portrait of a couple. A perfect keepsake that turns a cherished memory into a portable piece of art.',
    keywords: 'Keychain, Couple Portrait, Gift, Personalized, Small Leather Goods, Romantic'
  }
];

export const canvasArtworks = [
  {
    id: 1,
    title: 'Hanuman\'s Drench',
    year: '2024',
    dimensions: '48" x 60"',
    medium: 'Acrylic and texture on canvas',
    image: canvas1,
    description: 'A highly realistic close-up painting of Lord Hanuman\'s face, with water drops running over him, emphasizing the texture of the water and his fur/hair.',
    available: true
  },
  {
    id: 2,
    title: 'Golden Garuda of the Gulf',
    year: '2023',
    dimensions: '36" x 36"',
    medium: 'Mixed media',
    image: canvas2,
    description: 'An intricate, mixed-media artwork featuring a golden, bejeweled Garuda-like eagle over a red background, surrounded by iconic Middle Eastern and possibly South-East Asian architecture, with figures in traditional attire.',
    available: false
  },
  {
    id: 3,
    title: 'Decorated Bull',
    year: '2024',
    dimensions: '40" x 50"',
    medium: 'Oil on canvas',
    image: canvas3,
    description: 'A richly detailed painting of a white bull (perhaps an Indian Nandi/Pongal bull) decorated with colorful cloth, bells, and ornaments against a dark, vibrant background.',
    available: true
  },
  {
    id: 4,
    title: 'Seven Scents of Dubai',
    year: '2023',
    dimensions: '24" x 24"',
    medium: 'Acrylic with gold leaf',
    image: canvas4,
    description: 'A painting featuring a series of ornate, golden, perfume-bottle-shaped frames, each containing a scene (e.g., Burj Khalifa, desert, boat) against a red background, with a falcon on the left.',
    available: true
  },
  {
    id: 5,
    title: 'New Collection Piece',
    year: '2024',
    dimensions: '30" x 30"',
    medium: 'Mixed Media',
    image: canvas5,
    description: 'A striking new addition to the collection, featuring bold composition and expressive textures.',
    available: true
  },
  {
    id: 7,
    title: 'Ganesha\'s Palette',
    year: '2024',
    dimensions: '30" x 40"',
    medium: 'Acrylic on Canvas',
    image: canvas7,
    description: 'A painting of a closed-eye blue deity (likely Ganesha or Krishna) surrounded by red flowers, painted directly onto a wooden artist\'s palette.',
    available: true
  },
  {
    id: 8,
    title: 'Black Velocity',
    year: '2024',
    dimensions: '24" x 36"',
    medium: 'Mixed Media',
    image: canvas8,
    description: 'A dark, highly glossy artwork featuring a small, raised 3D black model of a Lamborghini against a dark, smoky background, with the name "Lamborghini" written on the side.',
    available: true
  },
  {
    id: 9,
    title: 'Mushroom Crown',
    year: '2024',
    dimensions: '16" x 20"',
    medium: 'Texture Paste & Acrylic',
    image: canvas9,
    description: 'A surreal, colorful painting of a person with eyes closed, crying, with a crown of vibrant mushrooms and flowers.',
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
