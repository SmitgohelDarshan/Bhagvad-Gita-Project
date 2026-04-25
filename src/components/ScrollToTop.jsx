import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This effect runs whenever the pathname (URL) changes
    // It scrolls the window to the top (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // The effect is re-run when `pathname` changes

  return null; // This component doesn't render anything, it's just for its side effect
}

export default ScrollToTop;