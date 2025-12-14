import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, Menu, X } from 'lucide-react';

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <Link to="/">FIL D'ART</Link>
        </div>


        <div className="footer-social">
          <a href="https://www.instagram.com/fildart.customshop" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/971581934037" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Phone size={20} />
          </a>
          <a href="mailto:contact@fildart.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div ref={menuRef}>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/shipping-policy" onClick={() => setMenuOpen(false)}>Shipping Policy</Link>
            <Link to="/refund-policy" onClick={() => setMenuOpen(false)}>Refund Policy</Link>
            <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Fil d'Art. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 4rem 0;
          background-color: var(--color-surface);
          margin-top: 4rem;
          position: relative;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
          position: relative;
        }

        .footer-logo {
          font-family: var(--font-serif);
          font-size: 4rem;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .footer-social {

        .footer-social {
          display: flex;
          gap: 1.5rem;
          margin: 1rem 0;
        }

        .menu-toggle {
          position: absolute;
          top: 0;
          right: 0;
          background: white;
          border: 2px solid var(--color-text);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 100;
        }

        .menu-toggle:hover {
          background: var(--color-text);
          color: white;
          transform: scale(1.05);
        }

        .dropdown-menu {
          position: absolute;
          top: 60px;
          right: 0;
          background: white;
          border: 2px solid var(--color-text);
          border-radius: 8px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          min-width: 220px;
          padding: 1rem 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 99;
        }

        .dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu a {
          display: block;
          padding: 0.9rem 1.5rem;
          font-size: 0.95rem;
          color: var(--color-text);
          text-decoration: none;
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }

        .dropdown-menu a:hover {
          background-color: #f5f5f5;
          border-left-color: var(--color-text);
          padding-left: 1.8rem;
        }

        .copyright {
          font-size: 0.8rem;
          opacity: 0.6;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .footer-links {
            gap: 1.2rem;
          }

          .footer-links a {
            font-size: 0.85rem;
          }

          .menu-toggle {
            width: 44px;
            height: 44px;
          }

          .dropdown-menu {
            right: -10px;
            min-width: 200px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 3rem 0;
          }

          .footer-logo {
            font-size: 1.3rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }

          .dropdown-menu {
            right: 0;
            left: 0;
            margin: 0 1rem;
            width: auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
