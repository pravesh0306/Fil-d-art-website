import React from 'react';
import { motion } from 'framer-motion';

const CareInstructions = () => {
  // SVG Icon Components
  const WashIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M20 32 Q32 20, 44 32 Q32 44, 20 32 Z" fill="currentColor" opacity="0.2" />
      <path d="M28 26 Q32 22, 36 26" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M26 32 Q32 28, 38 32" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M24 38 Q32 34, 40 38" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );

  const IronIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M15 25 L40 25 L45 30 L45 42 Q45 45, 42 45 L18 45 Q15 45, 15 42 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M40 25 L55 20 Q58 19, 58 22 L58 28 Q58 30, 56 30 L45 30" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="25" cy="35" r="2" fill="currentColor" />
      <circle cx="35" cy="35" r="2" fill="currentColor" />
    </svg>
  );

  const AirDryIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M20 15 L25 10 L30 15" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="27" y1="12" x2="27" y2="45" stroke="currentColor" strokeWidth="2" />
      <rect x="15" y="45" width="24" height="15" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M45 20 Q48 18, 51 20 M45 28 Q49 26, 53 28 M45 36 Q48 34, 51 36" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );

  const PaintIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M25 15 L30 10 Q32 8, 34 10 L39 15 L35 50 Q35 54, 32 54 Q29 54, 29 50 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="32" cy="13" rx="5" ry="3" fill="currentColor" />
      <path d="M20 45 Q22 42, 24 45 M28 48 Q30 45, 32 48 M36 48 Q38 45, 40 48" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none" />
    </svg>
  );

  const SunIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <circle cx="32" cy="32" r="12" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="10" x2="32" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="48" x2="32" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="10" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="17" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="43" y1="43" x2="47" y2="47" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="17" x2="43" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="21" y1="43" x2="17" y2="47" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );

  const CleanIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M25 20 L39 20 L42 50 Q42 54, 38 54 L26 54 Q22 54, 22 50 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20 L44 20 L44 15 Q44 12, 41 12 L23 12 Q20 12, 20 15 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      <circle cx="28" cy="35" r="1.5" fill="currentColor" />
      <circle cx="36" cy="30" r="1.5" fill="currentColor" />
      <circle cx="32" cy="42" r="1.5" fill="currentColor" />
    </svg>
  );

  const HandIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M30 45 L30 20 Q30 17, 32 17 Q34 17, 34 20 L34 25" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M34 25 L34 15 Q34 12, 36 12 Q38 12, 38 15 L38 25" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M38 25 L38 17 Q38 14, 40 14 Q42 14, 42 17 L42 28" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M42 28 L42 22 Q42 19, 44 19 Q46 19, 46 22 L46 35 Q46 45, 40 50 L30 50 Q22 50, 20 42 L18 35 Q17 32, 19 30 Q21 28, 24 29 L30 31" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const ShieldIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M32 10 L50 18 L50 32 Q50 45, 32 54 Q14 45, 14 32 L14 18 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M26 32 L30 36 L38 26" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const DropIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <path d="M32 10 Q42 25, 42 35 Q42 45, 32 45 Q22 45, 22 35 Q22 25, 32 10 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M28 30 Q30 28, 32 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );

  const FrameIcon = () => (
    <svg viewBox="0 0 64 64" className="care-icon">
      <rect x="12" y="12" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="18" y="18" width="28" height="28" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M25 30 L30 25 L35 30 L39 26" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="27" cy="24" r="2" fill="currentColor" />
    </svg>
  );

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="care-hero">
        <div className="container text-center">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Care Instructions
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Preserve the beauty of your hand-painted pieces.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="care-content">
        <div className="container">

          {/* Wearable Art */}
          <motion.div
            className="care-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Wearable Art</h2>
            <p className="section-intro">Each wearable piece is hand-painted with high-quality fabric paints and heat-set for durability. Follow these guidelines to ensure longevity:</p>

            <div className="instructions-grid">
              <div className="instruction-item">
                <WashIcon />
                <h3>Washing</h3>
                <p>Gentle hand wash in cold water is recommended. If machine washing, turn inside out and use delicate cycle with cold water.</p>
              </div>

              <div className="instruction-item">
                <DropIcon />
                <h3>Detergent</h3>
                <p>Use mild detergents only. Avoid bleach or harsh chemicals that can damage the painted artwork.</p>
              </div>

              <div className="instruction-item">
                <AirDryIcon />
                <h3>Drying</h3>
                <p>Air dry is best. Avoid tumble drying as high heat can affect the paint's longevity and vibrancy.</p>
              </div>

              <div className="instruction-item">
                <IronIcon />
                <h3>Ironing</h3>
                <p>Iron on the reverse side of the painted area. Never place the iron directly on the artwork.</p>
              </div>
            </div>
          </motion.div>

          {/* Canvas Art */}
          <motion.div
            className="care-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="section-heading">Canvas Art</h2>
            <p className="section-intro">Fine art canvases are delicate and require proper care to maintain their vibrancy and condition:</p>

            <div className="instructions-grid">
              <div className="instruction-item">
                <SunIcon />
                <h3>Placement</h3>
                <p>Avoid direct sunlight or high humidity areas (like bathrooms). This prevents fading and warping over time.</p>
              </div>

              <div className="instruction-item">
                <CleanIcon />
                <h3>Cleaning</h3>
                <p>Dust lightly with a soft, dry brush or microfiber cloth. Do not use water or cleaning solutions.</p>
              </div>

              <div className="instruction-item">
                <FrameIcon />
                <h3>Handling</h3>
                <p>Hold by the frame or canvas edges when moving. Avoid touching the painted surface to prevent damage.</p>
              </div>
            </div>
          </motion.div>

          {/* Leather Goods */}
          <motion.div
            className="care-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-heading">Leather Goods (Bags/Shoes)</h2>
            <p className="section-intro">Custom painted leather items are sealed with a protective finisher for durability:</p>

            <div className="instructions-grid">
              <div className="instruction-item">
                <HandIcon />
                <h3>Cleaning</h3>
                <p>Wipe gently with a damp cloth if needed. Avoid harsh leather cleaners on painted areas.</p>
              </div>

              <div className="instruction-item">
                <ShieldIcon />
                <h3>Protection</h3>
                <p>Avoid prolonged exposure to extreme heat or water. Store in a cool, dry place when not in use.</p>
              </div>

              <div className="instruction-item">
                <PaintIcon />
                <h3>Painted Surface</h3>
                <p>Treat with care to avoid scratching against sharp objects. The paint is sealed but still delicate.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding-top: 150px;
          min-height: 100vh;
          padding-bottom: 4rem;
          background: linear-gradient(to bottom, #fafafa 0%, white 100%);
        }

        .care-hero {
          padding: 3rem 0 4rem;
          margin-bottom: 2rem;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          opacity: 0.7;
          font-style: italic;
        }

        .care-section {
          margin-bottom: 5rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-heading {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          margin-bottom: 1rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }

        .section-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: var(--color-text);
        }

        .section-intro {
          text-align: center;
          font-size: 1.05rem;
          line-height: 1.7;
          opacity: 0.8;
          max-width: 700px;
          margin: 2rem auto 3rem;
        }

        .instructions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .instruction-item {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .instruction-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
        }

        .care-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          color: var(--color-text);
          display: block;
          transition: transform 0.3s ease;
        }

        .instruction-item:hover .care-icon {
          transform: scale(1.1);
        }

        .instruction-item h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .instruction-item p {
          font-size: 0.95rem;
          line-height: 1.7;
          opacity: 0.8;
          margin: 0;
        }

        @media (max-width: 768px) {
          .instructions-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .instruction-item {
            padding: 2rem 1.5rem;
          }

          .care-icon {
            width: 70px;
            height: 70px;
          }

          .section-heading {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .care-hero {
            padding: 2rem 0 3rem;
          }

          .instructions-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CareInstructions;
