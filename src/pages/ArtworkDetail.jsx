import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { canvasArtworks } from '../data';

const ArtworkDetail = () => {
    const { id } = useParams();
    const artwork = canvasArtworks.find(p => p.id === parseInt(id));

    if (!artwork) {
        return (
            <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
                <h2>Artwork not found</h2>
                <Link to="/canvas-art" className="btn-text">Back to Gallery</Link>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="container">
                <Link to="/canvas-art" className="back-link">
                    <ArrowLeft size={16} /> Back to Gallery
                </Link>

                <div className="artwork-detail-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="artwork-view"
                    >
                        <div className="matte-frame">
                            <img src={artwork.image} alt={artwork.title} className="artwork-full" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="artwork-info-panel"
                    >
                        <h1 className="artwork-title">{artwork.title}</h1>
                        <p className="artwork-meta">{artwork.year}</p>

                        <div className="specs-list">
                            <div className="spec-item">
                                <span className="label">Medium</span>
                                <span className="value">{artwork.medium}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Dimensions</span>
                                <span className="value">{artwork.dimensions}</span>
                            </div>
                            <div className="spec-item">
                                <span className="label">Status</span>
                                <span className="value">{artwork.available ? 'Available' : 'Sold'}</span>
                            </div>
                        </div>

                        <div className="inspiration-block">
                            <h3>Inspiration</h3>
                            <p>A textural exploration of form and emotion. This piece was created using multiple layers to achieve depth and narrative, reflecting the intersection of traditional technique and modern expression.</p>
                        </div>

                        <div className="cta-block">
                            <button className="enquire-btn-outline">Enquire Potential Acquisition</button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        .page-container {
          padding-top: 120px;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 1;
        }

        .artwork-detail-grid {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .artwork-view {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 2rem;
          background-color: #f8f8f8;
        }

        .matte-frame {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          max-height: 70vh;
          background: white;
          padding: 1rem;
        }

        .artwork-full {
          max-height: calc(70vh - 2rem);
          max-width: 100%;
          display: block;
        }

        .artwork-info-panel {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .artwork-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .artwork-meta {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          opacity: 0.6;
          margin-bottom: 2rem;
        }

        .specs-list {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          border-top: 1px solid rgba(0,0,0,0.1);
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding: 1.5rem 0;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .spec-item .label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.5;
        }

        .spec-item .value {
          font-size: 0.95rem;
        }

        .inspiration-block {
          margin-bottom: 3rem;
          text-align: left;
        }

        .inspiration-block h3 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .inspiration-block p {
          line-height: 1.8;
          opacity: 0.8;
          text-align: center;
        }

        .enquire-btn-outline {
          padding: 1rem 3rem;
          border: 1px solid var(--color-text);
          background: transparent;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          transition: all 0.3s;
        }

        .enquire-btn-outline:hover {
          background-color: var(--color-text);
          color: white;
        }

        @media (max-width: 768px) {
          .specs-list {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default ArtworkDetail;
