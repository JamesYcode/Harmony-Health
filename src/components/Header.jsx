import { useState } from 'react';

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen((prevstate) => !prevstate);
  }
  return (
    <>
      <div className='header container'>
        <h1>Harmony Health</h1>
        <div onClick={toggleNavbar} className='navbar'>
          {/* Temporary svg */}
          <svg
            width='30px'
            height='30px'
            viewBox='0 0 24.00 24.00'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              <path
                d='M4 18L20 18'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
              <path
                d='M4 12L20 12'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
              <path
                d='M4 6L20 6'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {isNavbarOpen ? (
        <div className='nav-links'>
          <p>Appointments</p>
          <p>Consultation</p>
          <p>Review</p>
          <p>Login</p>
        </div>
      ) : null}
    </>
  );
}

export default Header;
