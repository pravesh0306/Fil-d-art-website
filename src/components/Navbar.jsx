import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import '../index.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="brand-section">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Fil d'Art" className="logo-img" />
          </Link>
          <p className="brand-tagline">fil d' art</p>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link to="/about" className="nav-link">About the Artist</Link>
          <Link to="/wearable-art" className="nav-link">Wearable Art</Link>
          <Link to="/canvas-art" className="nav-link">Canvas Art</Link>
          <Link to="/custom-orders" className="nav-link">Custom Orders</Link>
          <Link to="/collaborations" className="nav-link">Collaborations</Link>
          <Link to="/care-instructions" className="nav-link">Care Instructions</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-link">Home</Link>
          <Link to="/about" className="mobile-link">About the Artist</Link>
          <Link to="/wearable-art" className="mobile-link">Wearable Art</Link>
          <Link to="/canvas-art" className="mobile-link">Canvas Art</Link>
          <Link to="/custom-orders" className="mobile-link">Custom Orders</Link>
          <Link to="/collaborations" className="mobile-link">Collaborations</Link>
          <Link to="/care-instructions" className="mobile-link">Care Instructions</Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background-color: transparent;
        }

        .navbar.scrolled {
          background-color: rgba(245, 243, 238, 0.95);
          padding: 0.5rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          backdrop-filter: blur(5px);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-section {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center text under logo */
        }

        .logo-link {
          display: block;
          line-height: 0;
          margin-bottom: 0.2rem;
        }

        .logo-img {
          height: 60px;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        
        .brand-tagline {
           font-family: var(--font-serif);
           font-size: 0.8rem;
           letter-spacing: 0.2em;
           text-transform: uppercase;
           color: var(--color-text);
           opacity: 0.8;
           margin-top: 2px;
        }

        .navbar.scrolled .logo-img {
          height: 45px;
        }
        
        .navbar.scrolled .brand-tagline {
           display: none;
        }

        .desktop-menu {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
            gap: 2rem;
            align-items: center;
          }
          .mobile-toggle {
            display: none;
          }
        }
        
        /* Mobile adjustments */
        @media (max-width: 767px) {
           .nav-container {
             padding: 0 1rem;
           }
           
           .brand-section {
             align-items: flex-start;
           }
           
           .brand-tagline {
             font-size: 0.6rem;
             letter-spacing: 0.1em;
           }
           
           .logo-img {
             height: 40px;
           }
        }

        .nav-link {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-text);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color-bg);
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-link {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-text);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
