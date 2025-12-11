import React from 'react';

const TermsConditions = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="content-box">
                    <h1 className="page-title">Terms & Conditions</h1>
                    <p className="last-updated">Last Updated: December 2025</p>

                    <section>
                        <h2>1. Agreement to Terms</h2>
                        <p>By accessing and using Fil d'Art's website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
                    </section>

                    <section>
                        <h2>2. Intellectual Property</h2>
                        <p>All artwork, designs, photographs, and content on this website are the intellectual property of Fil d'Art and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
                    </section>

                    <section>
                        <h2>3. Custom Orders</h2>
                        <p>Custom commissions require a design consultation and approval process:</p>
                        <ul>
                            <li>A non-refundable deposit may be required to begin work</li>
                            <li>Design mockups will be provided for your approval</li>
                            <li>Changes can be requested during the approval phase</li>
                            <li>Final artwork may have slight variations from mockups due to the hand-painted nature</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Pricing and Payment</h2>
                        <p>All prices are listed in UAE Dirhams (AED) unless otherwise stated. We accept various payment methods including credit cards, debit cards, and bank transfers. Full payment is required before shipping.</p>
                    </section>

                    <section>
                        <h2>5. Production Time</h2>
                        <p>Production times are estimates and may vary depending on order complexity and current workload. We will notify you of any significant delays. Rush orders may be available upon request for an additional fee.</p>
                    </section>

                    <section>
                        <h2>6. Ownership Rights</h2>
                        <p>Upon full payment, you own the physical artwork. However, Fil d'Art retains the right to:</p>
                        <ul>
                            <li>Photograph and display the artwork in our portfolio</li>
                            <li>Use images for marketing and promotional purposes</li>
                            <li>Showcase the work on social media and our website</li>
                        </ul>
                        <p>If you prefer your commission to remain private, please inform us at the time of order.</p>
                    </section>

                    <section>
                        <h2>7. Care and Maintenance</h2>
                        <p>Customers are responsible for following the provided care instructions. Damage resulting from improper care or normal wear is not covered under our refund policy.</p>
                    </section>

                    <section>
                        <h2>8. Limitation of Liability</h2>
                        <p>Fil d'Art is not liable for indirect, incidental, or consequential damages arising from the use of our products. Our liability is limited to the purchase price of the item.</p>
                    </section>

                    <section>
                        <h2>9. Privacy</h2>
                        <p>We respect your privacy and protect your personal information. We will not share your details with third parties except as necessary to fulfill your order.</p>
                    </section>

                    <section>
                        <h2>10. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.</p>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>If you have questions about these Terms & Conditions, please contact us at:</p>
                        <p>Email: <a href="mailto:contact@fildart.com">contact@fildart.com</a><br />
                            WhatsApp: <a href="https://wa.me/971581934037">+971 58 193 4037</a></p>
                    </section>
                </div>
            </div>

            <style jsx>{`
        .page-container {
          padding-top: 150px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .content-box {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 2rem;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border-radius: 8px;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .last-updated {
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.6;
          margin-bottom: 3rem;
        }

        section {
          margin-bottom: 2.5rem;
        }

        h2 {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        p {
          line-height: 1.8;
          opacity: 0.85;
          margin-bottom: 1rem;
        }

        ul {
          padding-left: 1.5rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        li {
          margin-bottom: 0.8rem;
          opacity: 0.85;
        }

        a {
          color: var(--color-text);
          text-decoration: underline;
        }

        a:hover {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .content-box {
            padding: 2rem 1.5rem;
          }

          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default TermsConditions;
