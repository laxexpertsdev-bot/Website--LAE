import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OffersPage from './pages/OffersPage';
import QuotePage from './pages/QuotePage';
import PremiumPage from './pages/PremiumPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import MutuelleHealthPage from './pages/MutuelleHealthPage';
import AssuranceEmprunteurPage from './pages/AssuranceEmprunteurPage';
import AssuranceAutoPage from './pages/AssuranceAutoPage';
import Assurance2RouesPage from './pages/Assurance2RouesPage';
import PrevoyancePage from './pages/PrevoyancePage';
import AssuranceBateauPage from './pages/AssuranceBateauPage';
import ExpatriesPage from './pages/ExpatriesPage';
import PERPage from './pages/PERPage';
import AssuranceViePage from './pages/AssuranceViePage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import ConditionsGeneralesPage from './pages/ConditionsGeneralesPage';
import GestionCookiesPage from './pages/GestionCookiesPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import ReviewBanner from './components/ReviewBanner';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);

  React.useEffect(() => {
    let timeInterval: NodeJS.Timeout;
    
    // Timer pour affichage après 10 secondes
    const showTimer = setTimeout(() => {
      if (!sessionStorage.getItem('popupClosed')) {
        setShowExitPopup(true);
      }
    }, 10000); // 10 secondes

    // Tracking du scroll
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);
      
      // Affichage à 50% de scroll
      if (scrollPercent >= 50 && !sessionStorage.getItem('popupClosed')) {
        setShowExitPopup(true);
      }
    };

    // Exit intent (mouse leave)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('popupClosed')) {
        setShowExitPopup(true);
      }
    };

    // Tracking du temps passé
    timeInterval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(showTimer);
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offres" element={<OffersPage />} />
            <Route path="/devis" element={<QuotePage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mutuelle-sante" element={<MutuelleHealthPage />} />
            <Route path="/assurance-emprunteur" element={<AssuranceEmprunteurPage />} />
            <Route path="/assurance-auto" element={<AssuranceAutoPage />} />
            <Route path="/assurance-2-roues" element={<Assurance2RouesPage />} />
            <Route path="/prevoyance" element={<PrevoyancePage />} />
            <Route path="/assurance-bateau" element={<AssuranceBateauPage />} />
            <Route path="/expatries" element={<ExpatriesPage />} />
            <Route path="/per" element={<PERPage />} />
            <Route path="/assurance-vie" element={<AssuranceViePage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
            <Route path="/conditions-generales" element={<ConditionsGeneralesPage />} />
            <Route path="/gestion-cookies" element={<GestionCookiesPage />} />
          </Routes>
        </main>
        <ReviewBanner />
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup 
          isOpen={showExitPopup} 
          onClose={() => setShowExitPopup(false)} 
        />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;