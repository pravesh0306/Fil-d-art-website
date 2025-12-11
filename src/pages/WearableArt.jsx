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
                    <p className="category">{product.category}</p>
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
      `}</style>
    </div>
  );
};

export default WearableArt;
