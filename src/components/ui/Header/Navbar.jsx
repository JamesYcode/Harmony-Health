function Navbar({ toggleNavbar }) {
  return (
    /* Desktop Version */
    <div className='navbar'>
      <ul className='nav-list'>
        <li>Appointments</li>
        <li>Consultation</li>
        <li>Review</li>
        <li>Login</li>
      </ul>

      {/* Mobile version Hamburger*/}
      <button type='button' onClick={toggleNavbar} className='hamburger-icon'>
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
      </button>
    </div>
  );
}

export default Navbar;
