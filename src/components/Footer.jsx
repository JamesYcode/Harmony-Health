import './footer.css';

function Footer() {
  return (
    <div className='container section'>
      <hr className='footer-hr' />

      <div className='footer-container'>
        <div className='footer-contact'>
          <h4>Contact Us</h4>
          <p>Address:</p>
          <p>123 Harmony Health ave</p>
          <p>New York,</p>
          <p>NY 12345</p>
        </div>
        <div className='footer-navigate'>
          <h4>Navigate</h4>
          <p>Appointments</p>
          <p>Consultation</p>
          <p>Review</p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
