import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="page-container">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle">We'd love to hear from you. Reach out for custom commissions, inquiries, or collaborations.</p>

                <div className="contact-grid">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="info-card">
                            <Mail className="icon" />
                            <h3>Email</h3>
                            <a href="mailto:contact@fildart.com">contact@fildart.com</a>
                            <p>We typically respond within 24-48 hours</p>
                        </div>

                        <div className="info-card">
                            <Phone className="icon" />
                            <h3>WhatsApp</h3>
                            <a href="https://wa.me/971581934037" target="_blank" rel="noopener noreferrer">+971 58 193 4037</a>
                            <p>Available 9 AM - 6 PM GST</p>
                        </div>

                        <div className="info-card">
                            <Instagram className="icon" />
                            <h3>Instagram</h3>
                            <a href="https://www.instagram.com/fildart.customshop" target="_blank" rel="noopener noreferrer">@fildart.customshop</a>
                            <p>Follow us for latest works and updates</p>
                        </div>

                        <div className="info-card">
                            <MapPin className="icon" />
                            <h3>Location</h3>
                            <p>United Arab Emirates</p>
                            <p className="sub-text">Available for international shipping</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="quick-links-box">
                        <h3>Quick Information</h3>
                        <div className="links-section">
                            <div className="link-item">
                                <h4>Custom Orders</h4>
                                <p>Interested in a custom piece? Visit our <a href="/custom-orders">Custom Orders</a> page to submit an enquiry.</p>
                            </div>

                            <div className="link-item">
                                <h4>Collaborations</h4>
                                <p>For brand partnerships and collaboration opportunities, please email us directly with your proposal.</p>
                            </div>

                            <div className="link-item">
                                <h4>Care Instructions</h4>
                                <p>Need help caring for your artwork? Check our <a href="/care-instructions">Care Instructions</a> page.</p>
                            </div>

                            <div className="link-item">
                                <h4>Returns & Shipping</h4>
                                <p>Questions about shipping or returns? See our policies in the footer menu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .page-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          text-align: center;
          font-size: 1.1rem;
          opacity: 0.7;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .icon {
          width: 40px;
          height: 40px;
          margin: 0 auto 1rem;
          color: var(--color-text);
        }

        .info-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .info-card a {
          color: var(--color-text);
          text-decoration: none;
          font-weight: 500;
          display: block;
          margin-bottom: 0.5rem;
        }

        .info-card a:hover {
          text-decoration: underline;
        }

        .info-card p {
          font-size: 0.9rem;
          opacity: 0.6;
          margin: 0;
        }

        .sub-text {
          font-size: 0.85rem !important;
          opacity: 0.5 !important;
        }

        .quick-links-box {
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .quick-links-box h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .links-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .link-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .link-item p {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.8;
          margin: 0;
        }

        .link-item a {
          color: var(--color-text);
          text-decoration: underline;
        }

        .link-item a:hover {
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .info-card {
            padding: 1.5rem;
          }

          .quick-links-box {
            padding: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default ContactUs;
