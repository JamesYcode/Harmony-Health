import './header.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import NavOverlay from './NavOverlay';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const viewport = window.matchMedia('(min-width: 768px)');
    function handleChange(e) {
      if (e.matches) setIsNavbarOpen(false);
    }

    viewport.addEventListener('change', handleChange);
    return () => viewport.removeEventListener('change', handleChange);
  }, []);

  function toggleNavbar() {
    setIsNavbarOpen((prevstate) => !prevstate);
  }

  // function closeNavbar() {
  //   setIsNavbarOpen(false);
  // }

  return (
    <>
      <div className='header container'>
        <h2>Harmony Health</h2>
        <Navbar toggleNavbar={toggleNavbar} />
      </div>

      {/* Mobile Overlay */}
      <NavOverlay isNavbarOpen={isNavbarOpen} />
    </>
  );
}

export default Header;
