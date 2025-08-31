function NavOverlay({ isNavbarOpen }) {
  return (
    <nav
      className={`mobile-panel ${isNavbarOpen ? 'open' : ''}`}
      id='mobile-menu'
    >
      <ul className='nav-list'>
        <li>Appointments</li>
        <li>Consultation</li>
        <li>Review</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default NavOverlay;
