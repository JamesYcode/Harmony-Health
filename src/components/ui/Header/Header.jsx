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

  // Locks scroll when navbar overlay is toggled.
  useEffect(() => {
    if (isNavbarOpen) {
      document.body.classList.add('nav-open');
      document.documentElement.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
      document.documentElement.classList.remove('nav-open');
    }
  }, [isNavbarOpen]);

  function toggleNavbar() {
    setIsNavbarOpen((prevstate) => !prevstate);
  }

  // Locks Scroll without useEffect
  // function toggleNavbar() {
  //   setIsNavbarOpen((prev) => {
  //     const next = !prev;
  //     document.documentElement.classList.toggle('nav-open', next);
  //     document.body.classList.toggle('nav-open', next);
  //     return next;
  //   });
  // }

  // function closeNavbar() {
  //   setIsNavbarOpen(false);
  // }

  return (
    <>
      <div className='header container'>
        <div className='logo'>
          <h2>Harmony Health</h2>
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path
              fill='#2190ff'
              d='M224 8a120 120 0 1 0 0 240 120 120 0 1 0 0-240zm60 312.8c-5.4-.5-11-.8-16.6-.8l-86.9 0c-5.6 0-11.1 .3-16.6 .8l0 67.5c16.5 7.6 28 24.3 28 43.6 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-19.4 11.5-36.1 28-43.6l0-58.4C61 353 16 413.6 16 484.6 16 499.7 28.3 512 43.4 512l361.1 0c15.1 0 27.4-12.3 27.4-27.4 0-71-45-131.5-108-154.6l0 37.4c23.3 8.2 40 30.5 40 56.6l0 32c0 11-9 20-20 20s-20-9-20-20l0-32c0-11-9-20-20-20s-20 9-20 20l0 32c0 11-9 20-20 20s-20-9-20-20l0-32c0-26.1 16.7-48.3 40-56.6l0-46.6z'
            />
          </svg>
        </div>
        <Navbar toggleNavbar={toggleNavbar} />
      </div>

      {/* Mobile Overlay */}
      <NavOverlay isNavbarOpen={isNavbarOpen} />
    </>
  );
}

export default Header;
