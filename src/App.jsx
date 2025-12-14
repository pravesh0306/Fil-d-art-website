import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WearableArt from './pages/WearableArt';
import CanvasArt from './pages/CanvasArt';
import CustomOrders from './pages/CustomOrders';
import Collaborations from './pages/Collaborations';

import ProductDetail from './pages/ProductDetail';
import ArtworkDetail from './pages/ArtworkDetail';

import CareInstructions from './pages/CareInstructions';
import AboutArtist from './pages/AboutArtist';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsConditions from './pages/TermsConditions';
import ContactUs from './pages/ContactUs';
import JournalPost from './pages/JournalPost';

// Scroll to top on route change
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutArtist />} />
            <Route path="/wearable-art" element={<WearableArt />} />
            <Route path="/wearable-art/:id" element={<ProductDetail />} />
            <Route path="/canvas-art" element={<CanvasArt />} />
            <Route path="/canvas-art/:id" element={<ArtworkDetail />} />
            <Route path="/custom-orders" element={<CustomOrders />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/care-instructions" element={<CareInstructions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/journal/:slug" element={<JournalPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
