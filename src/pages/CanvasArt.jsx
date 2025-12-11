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
        }
      `}</style>
    </div>
  );
};

export default CanvasArt;
