import React from 'react';

const ShippingPolicy = () => {
    return (
        <div className="page-container">
            <div className="container">
                <div className="content-box">
                    <h1 className="page-title">Shipping Policy</h1>
                    <p className="last-updated">Last Updated: December 2025</p>

                    <section>
                        <h2>Delivery Times</h2>
                        <p>All orders are carefully hand-painted and customized to your specifications. Please allow the following timeframes:</p>
                        <ul>
                            <li><strong>Wearable Art:</strong> 2-4 weeks from order confirmation</li>
                            <li><strong>Canvas Art:</strong> 3-5 weeks from order confirmation</li>
                            <li><strong>Custom Commissions:</strong> 4-8 weeks depending on complexity</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Shipping Locations</h2>
                        <p>We currently ship within the United Arab Emirates and internationally to select countries. Shipping fees will be calculated at checkout based on your location.</p>
                    </section>

                    <section>
                        <h2>Packaging</h2>
                        <p>Each piece is carefully packaged to ensure it arrives in perfect condition. We use protective materials and secure packaging methods to safeguard your artwork during transit.</p>
                    </section>

                    <section>
                        <h2>Tracking</h2>
                        <p>Once your order ships, you will receive a tracking number via email to monitor your delivery status.</p>
                    </section>

                    <section>
                        <h2>International Shipping</h2>
                        <p>For international orders, please note that customs fees and import duties may apply. These charges are the responsibility of the recipient and are not included in our shipping fees.</p>
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

        ul {
          padding-left: 1.5rem;
          line-height: 1.8;
        }

        li {
          margin-bottom: 0.8rem;
          opacity: 0.85;
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

export default ShippingPolicy;
