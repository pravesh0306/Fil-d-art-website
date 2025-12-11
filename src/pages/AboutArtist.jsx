import React from 'react';
import { motion } from 'framer-motion';
import artistPhoto from '../assets/artist-photo.jpg';

const AboutArtist = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container text-center">
          <h1 className="page-title">The Artist Behind Fil d'Art</h1>
          <p className="page-subtitle">Likitha — Weaving stories onto canvas and cloth.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="artist-image-container"
            >
              <img src={artistPhoto} alt="Likitha - Artist at work" className="artist-image" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="artist-bio"
            >
              <h2>A Fusion of Tradition & Modernity</h2>
              <p>
                Welcome to Fil d'Art. I am Likitha, the hands and heart behind every piece you see here.
                My journey began with a simple fascination for how colors interact with different textures.
                What started as painting on canvas quickly evolved into an exploration of wearable art—transforming
                everyday garments into walking masterpieces.
              </p>
              <p>
                I believe that art shouldn't be confined to galleries. It should be lived in, worn, and experienced.
                Each stroke on a denim jacket or a linen shirt is a testament to this belief. My style is deeply
                influenced by nature, abstract expressionism, and the vibrant culture that surrounds me.
              </p>
              <p>
                Whether it's a bespoke commissioned jacket or a large-scale canvas for a modern home, my goal is
                to create pieces that resonate emotionally with their owners. Thank you for being a part of this
                artistic journey.
              </p>

              <div className="signature">
                <p>- Likitha</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding-top: 150px;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .about-hero {
          padding: 3rem 0;
          margin-bottom: 2rem;
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

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .artist-image-container {
          height: 600px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        
        .artist-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .artist-image:hover {
          transform: scale(1.05);
        }

        .artist-bio h2 {
          font-family: var(--font-serif);
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .artist-bio p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1rem;
          opacity: 0.9;
        }

        .signature {
          margin-top: 2rem;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.5rem;
          text-align: right;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .artist-image-container {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutArtist;
