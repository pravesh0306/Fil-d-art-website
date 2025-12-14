import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wearableProducts, canvasArtworks, journalPosts } from '../data';
import julieReview from '../assets/julie-review.jpg';

const Home = () => {
  const featuredWearable = wearableProducts.slice(0, 3);
  const featuredCanvas = canvasArtworks.slice(0, 2);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Art You Wear.<br />Art You Live With.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Hand-painted wearable art and fine art by Likitha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-buttons"
          >
            <Link to="/wearable-art" className="btn">Wearable Art</Link>
            <Link to="/canvas-art" className="btn">Canvas Art</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-secondary"
          >
            <Link to="/custom-orders" className="btn-text">Get Yours Customised &rarr;</Link>
          </motion.div>
        </div>

        {/* Placeholder for Hero Image */}
        <div className="hero-image-placeholder"></div>
      </section>

      {/* About Snippet */}
      <section className="section about-snippet">
        <div className="container text-center">
          <p className="about-text">
            "My work bridges the gap between the canvas and the closet, bringing art into everyday life through textured details and wearable indulgence."
          </p>
        </div>
      </section>


      {/* Featured Wearable Art */}
      <section className="section featured-wearable">
        <div className="container">
          <h2 className="section-title text-center">Wearable Art</h2>
          <div className="grid-3">
            {featuredWearable.map((item) => (
              <Link to="/wearable-art" key={item.id} className="product-card">
                <div className="image-container">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/wearable-art" className="btn">View Collection &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Featured Canvas Art */}
      <section className="section featured-canvas">
        <div className="container">
          <h2 className="section-title text-center">Canvas Art</h2>
          <div className="grid-2">
            {featuredCanvas.map((item) => (
              <Link to="/canvas-art" key={item.id} className="art-card">
                <div className="image-container landscape">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <h3>{item.title}</h3>
                <p>Mixed Media on Canvas</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/canvas-art" className="btn">Explore Canvas Art &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Custom Order Section */}
      <section className="section custom-order-section">
        <div className="container text-center">
          <div className="custom-block">
            <h2>Get Your Custom Piece</h2>
            <p>Collaborate to create a unique wearable masterpiece or fine art commission.</p>
            <Link to="/custom-orders" className="btn">Start Customizing</Link>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="section journal-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">From the Journal</h2>
            <p className="section-subtitle">Stories, process, and inspiration behind the art.</p>
          </div>

          <div className="journal-grid">
            {journalPosts.map((post) => (
              <Link to={`/journal/${post.id}`} key={post.id} className="journal-card">
                <div className="journal-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="journal-content">
                  <span className="journal-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read Story &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section reviews-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Customer Reviews</h2>
            <p className="section-subtitle">What our clients say about Fil d'Art</p>
          </div>

          {/* Featured Review - Julie */}
          <motion.div
            className="featured-review"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="featured-review-image">
              <img src={julieReview} alt="Julie wearing hand-painted jacket" />
            </div>
            <div className="featured-review-content">
              <div className="review-stars large">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="star">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="featured-review-text">
                "I received this stunning hand-painted jacket as a gift from my dear friend, and I couldn't be more thrilled! The craftsmanship is extraordinary, and it traveled all the way from Dubai to France in perfect condition. The artwork is absolutely breathtaking, and I wear it with so much pride. A true wearable masterpiece!"
              </p>
              <div className="featured-reviewer">
                <h4 className="reviewer-name-large">Julie</h4>
                <p className="reviewer-title">WCS LA 2024 Winner</p>
                <p className="reviewer-location-large">France</p>
              </div>
              <div className="review-badge">
                <span>✓ Verified International Customer</span>
              </div>
            </div>
          </motion.div>

          {/* Other Reviews Grid */}
          <div className="reviews-grid">
            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="star">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="review-text">
                "The hand-painted jacket I ordered is absolutely stunning. Likitha's attention to detail and artistic vision exceeded my expectations. I receive compliments every time I wear it!"
              </p>
              <div className="reviewer">
                <img src="/src/assets/review1.png" alt="Sarah Mitchell" className="reviewer-image" />
                <div className="reviewer-info">
                  <h4 className="reviewer-name">Sarah Mitchell</h4>
                  <p className="reviewer-location">Dubai, UAE</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="star">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="review-text">
                "Commissioned a custom canvas piece for my office and it's become the centerpiece of conversation. The unique style and premium quality make it worth every dirham."
              </p>
              <div className="reviewer">
                <img src="/src/assets/review2.png" alt="Ahmed Al-Rashid" className="reviewer-image" />
                <div className="reviewer-info">
                  <h4 className="reviewer-name">Ahmed Al-Rashid</h4>
                  <p className="reviewer-location">Abu Dhabi, UAE</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="star">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="review-text">
                "I wear wearable art from Fil d'Art to all my important events. The designs are unique, elegant, and truly one-of-a-kind. Highly recommend for anyone who appreciates fine craftsmanship."
              </p>
              <div className="reviewer">
                <img src="/src/assets/review3.png" alt="Layla Hassan" className="reviewer-image" />
                <div className="reviewer-info">
                  <h4 className="reviewer-name">Layla Hassan</h4>
                  <p className="reviewer-location">Sharjah, UAE</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 60px; /* offset for navbar */
          overflow: hidden;
        }

        .hero-content {
          z-index: 2;
          position: relative;
          max-width: 800px;
          padding: 0 1rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .hero-secondary {
          margin-top: 1rem;
        }

        .hero-image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, var(--color-bg)), 
                      url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          z-index: 1;
          opacity: 0.15;
        }

        .about-text {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 3rem;
          letter-spacing: 0.05em;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
        }

        .product-card, .art-card {
          text-align: center;
          display: block;
        }

        .image-container {
          width: 100%;
          height: 400px;
          background-color: #e0e0e0;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .image-container.landscape {
          height: 300px;
        }

        .product-card:hover img, .art-card:hover img {
          transform: scale(1.05);
        }

        .product-card h3, .art-card h3 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .product-card p, .art-card p {
          font-size: 0.8rem;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .mt-lg { margin-top: 3rem; }

        .custom-block {
          background-color: var(--color-surface);
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .custom-block h2 {
          margin-bottom: 1.5rem;
        }

        .custom-block p {
          margin-bottom: 2.5rem;
        }

        .reviews-section {
          background-color: var(--color-surface);
          padding: 5rem 0;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-subtitle {
          font-size: 1rem;
          opacity: 0.7;
          margin-top: 0.5rem;
        }

        .featured-review {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .featured-review-image {
          width: 100%;
          height: 600px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .featured-review-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .featured-review-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .review-stars.large {
          display: flex;
          gap: 0.5rem;
        }

        .review-stars.large .star {
          width: 28px;
          height: 28px;
          fill: #FFB800;
        }

        .featured-review-text {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--color-text);
          font-style: italic;
        }

        .featured-reviewer {
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }

        .reviewer-name-large {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .reviewer-title {
          font-size: 1rem;
          color: #666;
          margin-bottom: 0.2rem;
          font-weight: 500;
        }

        .reviewer-location-large {
          font-size: 0.95rem;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .review-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .review-badge span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .review-card {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .review-stars {
          display: flex;
          gap: 0.3rem;
        }

        .star {
          width: 20px;
          height: 20px;
          fill: #FFB800;
        }

        .review-text {
          font-family: var(--font-serif);
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text);
          font-style: italic;
          flex-grow: 1;
        }

        .reviewer {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }

        .reviewer-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-surface);
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .reviewer-name {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .reviewer-location {
          font-size: 0.85rem;
          opacity: 0.6;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .review-card {
            padding: 2rem;
          }

          .featured-review {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
            margin-bottom: 3rem;
          }

          .featured-review-image {
            height: 500px;
          }

          .featured-review-text {
            font-size: 1.1rem;
          }

          .reviewer-name-large {
            font-size: 1.5rem;
          }
        }

        .journal-section {
          padding: 5rem 0;
          background-color: #fafafa;
        }

        .journal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .journal-card {
          display: block;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .journal-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .journal-image {
          height: 240px;
          overflow: hidden;
        }

        .journal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .journal-card:hover .journal-image img {
          transform: scale(1.05);
        }

        .journal-content {
          padding: 1.5rem;
        }

        .journal-date {
          display: block;
          font-size: 0.8rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .journal-content h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        .journal-content p {
          font-size: 0.95rem;
          opacity: 0.7;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .read-more {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div >
  );
};

export default Home;
