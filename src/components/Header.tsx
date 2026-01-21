import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, User, Building, Heart, Shield, Home, Car, Bike, Plane, Anchor, PiggyBank, Briefcase, HardHat, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Particuliers',
      icon: <User className="w-4 h-4" />,
      items: [
        { name: 'Santé', path: '/mutuelle-sante', icon: <Heart className="w-4 h-4" /> },
        { name: 'Emprunteur', path: '/assurance-emprunteur', icon: <Home className="w-4 h-4" /> },
        { name: 'Prévoyance', path: '/prevoyance', icon: <Shield className="w-4 h-4" /> },
        { name: 'Expatriés', path: '/expatries', icon: <Plane className="w-4 h-4" /> },
        { name: 'Auto', path: '/assurance-auto', icon: <Car className="w-4 h-4" /> },
        { name: '2 Roues', path: '/assurance-2-roues', icon: <Bike className="w-4 h-4" /> },
        { name: 'Bateau', path: '/assurance-bateau', icon: <Anchor className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Patrimoine',
      icon: <PiggyBank className="w-4 h-4" />,
      items: [
        { name: 'PER (Plan Épargne Retraite)', path: '/per', icon: <PiggyBank className="w-4 h-4" /> },
        { name: 'Assurance Vie', path: '/assurance-vie', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Pro & Entreprises',
      icon: <Building className="w-4 h-4" />,
      items: [
        { name: 'Chefs d\'entreprise / TNS', path: '/prevoyance', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Salariés', path: '/mutuelle-sante', icon: <User className="w-4 h-4" /> },
        { name: 'Construction / BTP', path: '/prevoyance', icon: <HardHat className="w-4 h-4" /> },
        { name: 'International', path: '/expatries', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const staticLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (menuName: string) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    // Set a delay before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 400); // 400ms delay for better UX
    setHoverTimeout(timeout);
  };

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white/98 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 md:py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/chatgpt_image_21_janv._2026,_14_24_38.png"
                alt="LES ASSUREURS EXPERTS"
                className="h-36 w-auto object-contain md:h-48"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
              {menuItems.map((menu) => (
                <div
                  key={menu.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-2 font-semibold text-slate-800 hover:text-blue-700 transition-all duration-300 py-2 text-lg group">
                    {menu.name}
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === menu.name && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-3 px-5 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 text-base font-medium"
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {staticLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-semibold transition-all duration-300 text-lg py-2 relative group ${
                    isActive(item.path)
                      ? 'text-blue-700'
                      : 'text-slate-800 hover:text-blue-700'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform origin-left transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}

              <Link
                to="/devis"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2.5 text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 ml-4"
              >
                <Phone className="w-5 h-5" />
                Demande de devis
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-5 space-y-5 max-h-[80vh] overflow-y-auto">
              {/* CTA en premier pour conversion mobile */}
              <div className="pb-5 border-b border-gray-200">
                <Link
                  to="/devis"
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-center text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center gap-2.5 mb-1">
                    <Phone className="w-5 h-5" />
                    Demande de devis
                  </div>
                  <div className="text-xs font-normal text-blue-100">
                    Réponse rapide • Sans engagement
                  </div>
                </Link>
              </div>

              {menuItems.map((menu) => (
                <div key={menu.name} className="space-y-3">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === menu.name ? null : menu.name)}
                    className="flex items-center justify-between w-full py-3 font-semibold text-slate-800 hover:text-blue-700 text-lg"
                  >
                    <div className="flex items-center gap-3">
                      {menu.name}
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === menu.name ? 'rotate-180' : ''}`} />
                  </button>

                  {activeDropdown === menu.name && (
                    <div className="pl-4 space-y-2 pb-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-3 py-3 text-base text-slate-700 hover:text-blue-700 font-medium transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {staticLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 font-semibold text-lg transition-colors duration-200 ${
                    isActive(item.path) ? 'text-blue-700' : 'text-slate-800 hover:text-blue-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Fixed Links */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/espace-assure"
                  className="flex items-center gap-2 py-3 text-slate-700 font-semibold text-base hover:text-blue-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  Espace assuré
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;