import React from 'react';

const Collaborations = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="collab-hero">
        <div className="container text-center">
          <h1 className="page-title">Collaborations & Events</h1>
          <p className="page-subtitle">Expanding the boundaries of art through creative partnerships.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <h3>Weddings & Celebrations</h3>
              <p>Personalized artistic favors, live customization, and unique gifts for weddings, birthdays, and special events.</p>
            </div>
            <div className="service-card">
              <h3>Boutique Capsules</h3>
              <p>Exclusive limited-edition collections designed for luxury boutiques and concept stores.</p>
            </div>
            <div className="service-card">
              <h3>Brand Partnerships</h3>
              <p>Collaborative projects with brands to create unique artistic merchandise or campaign visuals.</p>
            </div>
            <div className="service-card">
              <h3>Live Painting</h3>
              <p>Engaging live art performances at events, creating custom pieces in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <div className="cta-box">
            <h2>Interested in Collaborating?</h2>
            <p>Let's discuss how we can create something extraordinary together.</p>
            <a href="mailto:collaborate@likithaart.com" className="btn-solid">Enquire Now</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-container {
          padding-top: 100px;
          min-height: 100vh;
        }

        .collab-hero {
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
          max-width: 600px;
          margin: 0 auto;
        }

        .services-section {
          padding: 4rem 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 2rem;
          background-color: white;
          border: 1px solid rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .service-card h3 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .service-card p {
          font-size: 0.95rem;
          opacity: 0.7;
          line-height: 1.6;
        }

        .cta-section {
          padding: 4rem 0 6rem;
        }

        .cta-box {
          background-color: var(--color-surface);
          padding: 4rem 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-box h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-box p {
          margin-bottom: 2rem;
          opacity: 0.8;
        }

        .btn-solid {
          display: inline-block;
          padding: 1rem 2.5rem;
          background-color: var(--color-text);
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: opacity 0.3s;
        }

        .btn-solid:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default Collaborations;
