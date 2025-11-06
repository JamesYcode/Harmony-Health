import './footer.css';

function Footer() {
  return (
    <footer className='footer' id='footer'>
      <div className='footer-container container section'>
        {/* Brand / Contact */}
        <div className='footer-section footer-section-left'>
          <h4>Harmony Health</h4>
          <div className='contact-info'>
            <p>
              <strong>Address:</strong>
            </p>
            <p>123 Harmony Health Ave</p>
            <p>New York, NY 12345</p>
          </div>
          <p className='footer-desc'>
            Your trusted partner in healthcare, connecting you with quality
            medical professionals.
          </p>
          <div className='social-links' aria-label='Social links'>
            <a href='#' aria-label='Facebook'>
              <i className='fab fa-facebook' />
            </a>
            <a href='#' aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </a>
            <a href='#' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </a>
            <a href='#' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className='footer-section' aria-label='Navigate'>
          <h4>Navigate</h4>
          <ul>
            <li>
              <a href='#appointments'>Appointments</a>
            </li>
            <li>
              <a href='#consultation'>Consultation</a>
            </li>
            <li>
              <a href='#review'>Review</a>
            </li>
            <li>
              <a href='#login'>Login</a>
            </li>
            <li>
              <a href='#about'>About Us</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className='footer-section' aria-label='Support'>
          <h4>Support</h4>
          <ul>
            <li>
              <a href='#help'>Help Center</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
            <li>
              <a href='#privacy'>Privacy Policy</a>
            </li>
            <li>
              <a href='#terms'>Terms of Service</a>
            </li>
            <li>
              <a href='#insurance'>Insurance Info</a>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2025 Harmony Health. All rights reserved.</p>
        <p>BY: James Y </p>
      </div>
    </footer>
  );
}

export default Footer;
