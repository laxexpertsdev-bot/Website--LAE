import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Ne pas remonter si on navigue vers une ancre
    if (hash) {
      return;
    }

    // Remonter en haut avec animation fluide
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;