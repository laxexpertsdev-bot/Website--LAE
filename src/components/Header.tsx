import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, User, Building, Heart, Shield, Home, Car, Bike, Plane, Anchor, PiggyBank, Briefcase, HardHat, Globe, Users, Flower2, Landmark } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Particuliers',
      icon: <User className="w-4 h-4" />,
      items: [
        { name: 'Mutuelle santé', path: '/mutuelle-sante', icon: <Heart className="w-4 h-4" /> },
        { name: 'Assurance emprunteur', path: '/assurance-emprunteur', icon: <Landmark className="w-4 h-4" /> },
        { name: 'Habitation', path: '/assurance-habitation', icon: <Home className="w-4 h-4" /> },
        { name: 'Prévoyance', path: '/prevoyance', icon: <Shield className="w-4 h-4" /> },
        { name: 'Auto', path: '/assurance-auto', icon: <Car className="w-4 h-4" /> },
        { name: '2 Roues', path: '/assurance-2-roues', icon: <Bike className="w-4 h-4" /> },
        { name: 'Bateau', path: '/assurance-bateau', icon: <Anchor className="w-4 h-4" /> },
        { name: 'Expatriés', path: '/expatries', icon: <Plane className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Patrimoine',
      icon: <PiggyBank className="w-4 h-4" />,
      items: [
        { name: 'PER (Plan Épargne Retraite)', path: '/per', icon: <PiggyBank className="w-4 h-4" /> },
        { name: 'Assurance Vie', path: '/assurance-vie', icon: <Shield className="w-4 h-4" /> },
        { name: 'Capital Obsèques', path: '/capital-obseques', icon: <Flower2 className="w-4 h-4" /> }
      ]
    },
    {
      name: 'Pro & Entreprises',
      icon: <Building className="w-4 h-4" />,
      items: [
        { name: 'Assurance professionnelle (RC Pro)', path: '/assurance-professionnelle', icon: <Briefcase className="w-4 h-4" /> },
        { name: 'Décennale / BTP', path: '/assurance-decennale', icon: <HardHat className="w-4 h-4" /> },
        { name: 'Santé & Prévoyance collective', path: '/sante-prevoyance-collective', icon: <Users className="w-4 h-4" /> },
        { name: 'Prévoyance dirigeant / TNS', path: '/prevoyance', icon: <Shield className="w-4 h-4" /> },
        { name: 'Expatriés / International', path: '/expatries', icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  const staticLinks = [
    { name: 'Nos assurances', path: '/offres' },
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
          <div className="flex justify-between items-center gap-x-8 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo-assureurs-experts.png"
                alt="LES ASSUREURS EXPERTS"
                width="121"
                height="128"
                className="h-14 w-auto object-contain md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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

              <a
                href="tel:+33162171111"
                aria-label="Appeler le +33 1 62 17 11 11"
                className="hidden lg:flex items-center justify-center text-blue-700 hover:text-blue-800 transition-colors flex-shrink-0"
              >
                <Phone className="w-5 h-5" />
              </a>

              <Link
                to="/devis"
                className="bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex-shrink-0"
              >
                Devis gratuit
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
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
              <div className="pb-5 border-b border-gray-200 space-y-3">
                <Link
                  to="/devis"
                  className="block bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-center text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="mb-1">Devis gratuit</div>
                  <div className="text-xs font-normal text-blue-100">
                    Réponse rapide • Sans engagement
                  </div>
                </Link>
                <a
                  href="tel:+33162171111"
                  className="flex items-center justify-center gap-2.5 border-2 border-blue-600 text-blue-700 px-6 py-3.5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +33 1 62 17 11 11
                </a>
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