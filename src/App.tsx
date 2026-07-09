import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ExitIntentPopup from './components/ExitIntentPopup';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { regions } from './data/regions';
import { productRegions } from './data/product-regions';
import { ExitPopupProvider, useExitPopupSuppressed } from './context/ExitPopupContext';

// Pages chargées à la demande (code splitting) — réduit le bundle initial.
const OffersPage = lazy(() => import('./pages/OffersPage'));
const QuotePage = lazy(() => import('./pages/QuotePage'));
const PremiumPage = lazy(() => import('./pages/PremiumPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const MutuelleHealthPage = lazy(() => import('./pages/MutuelleHealthPage'));
const AssuranceEmprunteurPage = lazy(() => import('./pages/AssuranceEmprunteurPage'));
const AssuranceAutoPage = lazy(() => import('./pages/AssuranceAutoPage'));
const Assurance2RouesPage = lazy(() => import('./pages/Assurance2RouesPage'));
const PrevoyancePage = lazy(() => import('./pages/PrevoyancePage'));
const AssuranceBateauPage = lazy(() => import('./pages/AssuranceBateauPage'));
const ExpatriesPage = lazy(() => import('./pages/ExpatriesPage'));
const PERPage = lazy(() => import('./pages/PERPage'));
const AssuranceViePage = lazy(() => import('./pages/AssuranceViePage'));
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'));
const PolitiqueConfidentialitePage = lazy(() => import('./pages/PolitiqueConfidentialitePage'));
const ConditionsGeneralesPage = lazy(() => import('./pages/ConditionsGeneralesPage'));
const GestionCookiesPage = lazy(() => import('./pages/GestionCookiesPage'));
const AssuranceHabitationPage = lazy(() => import('./pages/AssuranceHabitationPage'));
const AssuranceProfessionnellePage = lazy(() => import('./pages/AssuranceProfessionnellePage'));
const AssuranceDecennalePage = lazy(() => import('./pages/AssuranceDecennalePage'));
const SantePrevoyanceCollectivePage = lazy(() => import('./pages/SantePrevoyanceCollectivePage'));
const CapitalObsequesPage = lazy(() => import('./pages/CapitalObsequesPage'));
const RegionLandingPage = lazy(() => import('./pages/RegionLandingPage'));
const ProductRegionPage = lazy(() => import('./pages/ProductRegionPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const ExitPopupController: React.FC = () => {
  const suppressed = useExitPopupSuppressed();
  const [showExitPopup, setShowExitPopup] = useState(false);
  const suppressedRef = useRef(suppressed);

  useEffect(() => {
    suppressedRef.current = suppressed;
    if (suppressed) setShowExitPopup(false);
  }, [suppressed]);

  useEffect(() => {
    // Affiche le popup de sortie : après 10s, à 50% de scroll, ou sur mouse-leave.
    // Supprimé via sessionStorage.popupClosed (comportement inchangé). Jamais déclenché
    // sur les pages produit / produit×région (voir suppressedRef, alimenté par ProductPageLayout).
    const openPopup = () => {
      if (suppressedRef.current) return;
      if (!sessionStorage.getItem('popupClosed')) {
        setShowExitPopup(true);
      }
    };

    const showTimer = setTimeout(openPopup, 10000);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (window.pageYOffset / docHeight) * 100 : 0;
        if (scrollPercent >= 50) {
          openPopup();
        }
        ticking = false;
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        openPopup();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />;
};

function App() {
  return (
    <ExitPopupProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Suspense fallback={<div className="min-h-screen" />}>
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
                <Route path="/assurance-habitation" element={<AssuranceHabitationPage />} />
                <Route path="/assurance-professionnelle" element={<AssuranceProfessionnellePage />} />
                <Route path="/assurance-decennale" element={<AssuranceDecennalePage />} />
                <Route path="/sante-prevoyance-collective" element={<SantePrevoyanceCollectivePage />} />
                <Route path="/capital-obseques" element={<CapitalObsequesPage />} />
                <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
                <Route path="/conditions-generales" element={<ConditionsGeneralesPage />} />
                <Route path="/gestion-cookies" element={<GestionCookiesPage />} />
                {/* Landing pages régionales de campagne (générées depuis le registre, /<slug>). */}
                {regions.map((r) => (
                  <Route key={r.slug} path={`/${r.slug}`} element={<RegionLandingPage data={r} />} />
                ))}
                {/* Pages produit × région de campagne géo, noindex (générées depuis le registre, /<produit>/<ville>). */}
                {productRegions.map((r) => (
                  <Route key={r.slug} path={`/${r.slug}`} element={<ProductRegionPage data={r} />} />
                ))}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
          <ExitPopupController />
          <CookieConsent />
        </div>
      </Router>
    </ExitPopupProvider>
  );
}

export default App;
