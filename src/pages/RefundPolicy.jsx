import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="content-box">
                    <h1 className="page-title">Refund & Return Policy</h1>
                    <p className="last-updated">Last Updated: December 2025</p>

                    <section>
                        <h2>Custom & Personalized Items</h2>
                        <p>Due to the bespoke and hand-painted nature of our artwork, all custom orders are <strong>final sale</strong> and cannot be returned or refunded once production has begun.</p>
                    </section>

                    <section>
                        <h2>Damaged or Defective Items</h2>
                        <p>If your item arrives damaged or with a manufacturing defect, please contact us within <strong>48 hours</strong> of delivery with photos of the damage. We will:</p>
                        <ul>
                            <li>Assess the damage and determine the best solution</li>
                            <li>Offer a replacement or repair at no additional cost</li>
                            <li>Process a full refund if replacement is not possible</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Wrong Item Received</h2>
                        <p>If you receive an incorrect item, please contact us immediately. We will arrange for the correct item to be sent to you at no additional charge and provide a prepaid return label for the wrong item.</p>
                    </section>

                    <section>
                        <h2>Cancellations</h2>
                        <p>Order cancellations are only accepted within <strong>24 hours</strong> of order placement, before production begins. Once the artwork process has started, cancellations cannot be accommodated.</p>
                    </section>

                    <section>
                        <h2>How to Request a Return</h2>
                        <p>To initiate a return for damaged or defective items:</p>
                        <ol>
                            <li>Email us at <a href="mailto:contact@fildart.com">contact@fildart.com</a></li>
                            <li>Include your order number and clear photos of the issue</li>
                            <li>Our team will respond within 2 business days with next steps</li>
                        </ol>
                    </section>

                    <section>
                        <h2>Refund Processing</h2>
                        <p>Approved refunds will be processed within 5-7 business days and credited to your original payment method.</p>
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
          max-width: 800px;
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

        ul, ol {
          padding-left: 1.5rem;
          line-height: 1.8;
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

export default RefundPolicy;
