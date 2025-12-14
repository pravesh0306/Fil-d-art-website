import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { wearableCategories, wearableProducts } from '../data';

const WearableArt = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? wearableProducts
    : wearableProducts.filter(p => p.category === activeCategory);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container text-center">
          <h1 className="page-title">Wearable Art</h1>
          <p className="page-subtitle">Unique hand-painted pieces that move with you.</p>
        </div>
      </section>

      {/* Wearable Features Strip */}
      <section className="section features-strip">
        <div className="container">
          <div className="features-grid">
            {/* Hand-painted */}
            <div className="feature-item">
              <motion.div
                className="feature-icon"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                </svg>
              </motion.div>
              <h3>Hand-painted</h3>
              <p>One-of-a-kind wearable art.</p>
            </div>

            {/* Wash with care */}
            <div className="feature-item">
              <motion.div
                className="feature-icon"
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 48 48">
                  <path d="M24 10 L24 38 M10 24 L38 24" stroke="currentColor" strokeWidth="0" fill="none" />
                  <path d="M24 8 Q32 20, 32 28 Q32 36, 24 36 Q16 36, 16 28 Q16 20, 24 8 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="22" r="1.5" fill="currentColor" />
                  <circle cx="28" cy="26" r="1.5" fill="currentColor" />
                </svg>
              </motion.div>
              <h3>Wash with care</h3>
              <p>Gentle care preserves beauty.</p>
            </div>

            {/* Finest fabric */}
            <div className="feature-item">
              <motion.div
                className="feature-icon"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 48 48">
                  <path d="M8 12 C16 8, 32 8, 40 12 L40 36 C32 32, 16 32, 8 36 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 16 C20 14, 28 14, 32 16 M16 22 C20 20, 28 20, 32 22 M16 28 C20 26, 28 26, 32 28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
              </motion.div>
              <h3>Finest fabric</h3>
              <p>Premium comfort & quality.</p>
            </div>

            {/* Artisan crafted */}
            <div className="feature-item">
              <motion.div
                className="feature-icon"
                animate={{
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M24 14 L24 34 M14 24 L34 24" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="20" y="20" width="8" height="8" transform="rotate(45 24 24)" fill="currentColor" opacity="0.2" />
                </svg>
              </motion.div>
              <h3>Artisan crafted</h3>
              <p>Handmade with precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-menu">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {wearableCategories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="product-section">
        <div className="container">
          <motion.div
            layout
            className="product-grid"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={product.id}
                className="product-card"
              >
                <Link to={`/wearable-art/${product.id}`} className="product-link-wrapper">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                    <div className="product-overlay">
                      <span className="view-btn">View Details</span>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="category">
                      {product.category === 'jackets' && product.name.toLowerCase().includes('shirt')
                        ? 'Shirts'
                        : product.category}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center mt-lg">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding-top: 100px;
          min-height: 100vh;
        }

        .category-hero {
          padding: 4rem 0 2rem;
        }

        .page-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          opacity: 0.7;
          font-style: italic;
        }

        .filter-section {
          padding: 2rem 0;
          position: sticky;
          top: 80px; /* Below navbar */
          background-color: var(--color-bg);
          z-index: 10;
          margin-bottom: 2rem;
        }

        .filter-menu {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding-bottom: 5px;
          border-bottom: 1px solid transparent;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .filter-btn:hover, .filter-btn.active {
          opacity: 1;
          border-bottom-color: var(--color-text);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3rem 2rem;
        }

        .product-card {
          cursor: pointer;
        }

        .product-image-container {
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
          aspect-ratio: 3/4;
          background-color: #e0e0e0;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .view-btn {
          background: white;
          padding: 0.8rem 1.5rem;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .product-card:hover .view-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .product-link-wrapper {
          display: block;
          color: inherit;
        }

        .product-info h3 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }

        .product-info .category {
          font-size: 0.8rem;
          text-transform: uppercase;
          opacity: 0.6;
          letter-spacing: 0.05em;
        }
        .features-strip {
          padding: 3rem 0;
          background-color: #f9f9f9;
          margin-bottom: 2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }

        .feature-item h3 {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
          opacity: 0.8;
          margin: 0;
        }

        .feature-item p {
          font-size: 0.85rem;
          opacity: 0.6;
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WearableArt;
