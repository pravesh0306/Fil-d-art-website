import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { wearableProducts } from '../data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = wearableProducts.find(p => p.id === parseInt(id));
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImage, setActiveImage] = useState(product ? product.image : null);

  // Effect to update activeImage if product changes or on initial load
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/wearable-art" className="btn-text">Back to Collection</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="container">
        <Link to="/wearable-art" className="back-link">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="product-detail-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="detail-gallery"
          >
            <div className={`main-image-container ${isZoomed ? 'zoomed-container' : ''}`}>
              <img
                src={activeImage}
                alt={product.name}
                className="main-image"
                onClick={() => setIsZoomed(!isZoomed)}
                style={{
                  transform: isZoomed ? 'scale(2)' : 'scale(1)',
                  cursor: isZoomed ? 'zoom-out' : 'zoom-in'
                }}
              />
            </div>
            {/* Gallery Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="thumbnail-grid">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="detail-info"
          >
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price">{product.price}</p>

            <div className="divider"></div>

            <div className="info-block">
              <h3>Description</h3>
              <p>{product.description} This piece is a one-of-a-kind creation, hand-painted with specialized paints that are heat-set for durability.</p>
            </div>

            <div className="info-block">
              <h3>Material & Care</h3>
              <p>
                <strong>Material:</strong> {product.material || 'Premium quality materials'}<br />
                <strong>Care:</strong> {product.care || 'Follow care instructions provided with your piece.'}
              </p>
            </div>

            <div className="cta-block">
              <Link to="/custom-orders" className="enquire-btn">Enquire / Custom Order</Link>
              <p className="note">Each piece is unique. Contact us to customize this design on your preferred size or garment.</p>
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

        .product-detail-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
        }

        .main-image-container {
          width: 100%;
          aspect-ratio: 3/4;
          background-color: #f0f0f0;
          margin-bottom: 1rem;
          overflow: hidden;
          transition: aspect-ratio 0.3s ease;
        }

        .main-image-container.zoomed-container {
           overflow: auto;
           aspect-ratio: auto;
           max-height: 90vh;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease-in-out;
          transform-origin: center center;
        }

        .thumbnail-grid {
          display: flex;
          gap: 1rem;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          background-color: #eee;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .thumbnail.active {
          border-color: var(--color-text);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .product-price {
          font-size: 1.2rem;
          opacity: 0.7;
          margin-bottom: 2rem;
        }

        .divider {
          height: 1px;
          background-color: rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        .info-block {
          margin-bottom: 2rem;
        }

        .info-block h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.8rem;
          opacity: 0.8;
        }

        .info-block p {
          font-size: 0.95rem;
          line-height: 1.7;
          opacity: 0.9;
        }

        .enquire-btn {
          display: block;
          width: 100%;
          padding: 1rem;
          background-color: var(--color-text);
          color: white;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          transition: opacity 0.3s;
        }

        .enquire-btn:hover {
          opacity: 0.9;
        }

        .note {
          font-size: 0.8rem;
          font-style: italic;
          opacity: 0.6;
          text-align: center;
        }

        @media (max-width: 900px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
