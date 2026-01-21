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
          <div className="flex justify-between items-center py-2 md:py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/chatgpt_image_21_janv._2026,_14_24_38.png"
                alt="LES ASSUREURS EXPERTS"
                className="h-36 w-auto object-contain md:h-48"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((menu) => (
                <div
                  key={menu.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-700 transition-colors duration-200 py-1 text-sm">
                    {menu.icon}
                    {menu.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === menu.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
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
                  className={`font-medium transition-colors duration-200 text-sm ${
                    isActive(item.path)
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/devis"
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Devis gratuit
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-4 max-h-96 overflow-y-auto">
              {menuItems.map((menu) => (
                <div key={menu.name} className="space-y-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === menu.name ? null : menu.name)}
                    className="flex items-center justify-between w-full py-2 font-medium text-gray-700 hover:text-blue-700"
                  >
                    <div className="flex items-center gap-2">
                      {menu.icon}
                      {menu.name}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === menu.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === menu.name && (
                    <div className="pl-6 space-y-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-blue-700"
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
                  className={`block py-2 font-medium ${
                    isActive(item.path) ? 'text-blue-700' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  to="/devis"
                  className="block bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📞 Devis gratuit
                </Link>
              </div>
              
              {/* Fixed Links */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link
                  to="/espace-assure"
                  className="block py-2 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🔐 Espace assuré
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