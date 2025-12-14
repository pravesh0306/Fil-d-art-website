import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { canvasArtworks } from '../data';

const CanvasArt = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container text-center">
          <h1 className="page-title">Canvas Art Gallery</h1>
          <p className="page-subtitle">Textured contemporary pieces with cultural influences.</p>
        </div>
      </section>

      {/* Canvas Features Strip */}
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
              <p>One-of-a-kind original art.</p>
            </div>

            {/* Textured Depth */}
            <div className="feature-item">
              <motion.div
                className="feature-icon"
                animate={{
                  y: [-2, 2, -2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 48 48">
                  <path d="M4 24 L24 34 L44 24 L24 14 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 16 L24 26 L44 16" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 32 L24 42 L44 32" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </motion.div>
              <h3>Textured Depth</h3>
              <p>Rich, tactile layers.</p>
            </div>

            {/* Museum Grade */}
            <div className="feature-item">
              <motion.div
                className="feature-icon"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 48 48">
                  <rect x="8" y="8" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="14" width="20" height="20" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
                  <path d="M8 8 L14 14 M40 8 L34 14 M40 40 L34 34 M8 40 L14 34" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </motion.div>
              <h3>Museum Grade</h3>
              <p>Professional quality canvas.</p>
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
              <p>Created with passion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {canvasArtworks.map((artwork, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={artwork.id}
                className="artwork-card"
              >
                <Link to={`/canvas-art/${artwork.id}`} className="artwork-link-wrapper">
                  <div className="artwork-image-container">
                    <img src={artwork.image} alt={artwork.title} className="artwork-image" loading="lazy" />
                    <div className="artwork-overlay">
                      <span className="artwork-status">
                        {artwork.available ? 'Available' : 'Sold'}
                      </span>
                    </div>
                  </div>
                  <div className="artwork-info text-center">
                    <h3 className="artwork-title">{artwork.title}</h3>
                    <p className="artwork-details">{artwork.year} • {artwork.medium}</p>
                    <p className="artwork-dimensions">{artwork.dimensions}</p>
                    <span className="enquire-btn">View Details</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding-top: 100px;
          min-height: 100vh;
        }

        .gallery-hero {
          padding: 4rem 0 3rem;
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

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .artwork-link-wrapper {
          display: block;
          color: inherit;
        }

        .artwork-image-container {
          margin-bottom: 2rem;
          position: relative;
          background-color: #f0f0f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .artwork-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .artwork-overlay {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .artwork-status {
          background-color: white;
          padding: 0.3rem 0.8rem;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--color-text);
        }

        .artwork-info {
          padding: 0 1rem;
        }

        .artwork-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .artwork-details, .artwork-dimensions {
          font-size: 0.9rem;
          opacity: 0.7;
          margin-bottom: 0.3rem;
        }

        .enquire-btn {
          margin-top: 1rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-bottom: 1px solid var(--color-text);
          padding-bottom: 2px;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .enquire-btn:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
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
      `}</style>
    </div>
  );
};

export default CanvasArt;
