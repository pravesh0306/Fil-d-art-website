import React, { useState } from 'react';

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'jacket',
    description: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using FormSubmit.co - a free form submission service
      // You can replace this with your own email service or backend
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Category: formData.category,
          Description: formData.description,
          Timeline: formData.timeline,
          _subject: 'New Custom Order Enquiry - Fil d\'Art',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          category: 'jacket',
          description: '',
          timeline: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="container">

        <div className="content-wrapper">
          <div className="text-section">
            <h1 className="page-title">Create Something Personal</h1>
            <p className="intro-text">
              Commission a unique wearable masterpiece or a custom fine art canvas.
              The process involves a collaborative dialogue to bring your vision to life
              through Likitha's artistic lens.
            </p>

            <div className="process-steps">
              <div className="step">
                <span className="step-number">01</span>
                <h3>Initial Consultation</h3>
                <p>Share your ideas, inspiration, and partialities.</p>
              </div>
              <div className="step">
                <span className="step-number">02</span>
                <h3>Design & Sketch</h3>
                <p>Review and approve the proposed design concept.</p>
              </div>
              <div className="step">
                <span className="step-number">03</span>
                <h3>Creation</h3>
                <p>The artwork is meticulously hand-painted.</p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit} className="custom-form">
              <h2 className="form-title">Enquiry Form</h2>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Interested In</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="jacket">Wearable Art - Jacket</option>
                  <option value="shirt">Wearable Art - Shirt</option>
                  <option value="bag">Wearable Art - Bag</option>
                  <option value="shoes">Wearable Art - Shoes</option>
                  <option value="canvas">Fine Art Canvas</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description of Idea</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your vision, colors, themes..."
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Preferred Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g. Need by end of October"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  ✓ Thank you for your enquiry! We will get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  ✗ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>

      </div>

      <style jsx>{`
        .page-container {
          padding-top: 120px;
          padding-bottom: 4rem;
          min-height: 100vh;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .page-title {
          font-size: 3rem;
          margin-bottom: 2rem;
        }

        .intro-text {
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 500px;
        }

        .process-steps {
          margin-top: 3rem;
        }

        .step {
          margin-bottom: 2rem;
          padding-left: 1rem;
          border-left: 1px solid var(--color-text);
        }

        .step-number {
          font-family: var(--font-serif);
          font-size: 0.9rem;
          opacity: 0.5;
          display: block;
          margin-bottom: 0.2rem;
        }

        .step h3 {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }

        .step p {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .form-section {
          background-color: white;
          padding: 3rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.03);
        }

        .form-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          font-family: var(--font-sans);
          font-size: 1rem;
          background-color: #fafafa;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-text);
          background-color: white;
        }

        .alert {
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .alert-success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background-color: var(--color-text);
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 1rem;
          transition: opacity 0.3s, background-color 0.3s;
          cursor: pointer;
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .form-section {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomOrders;
