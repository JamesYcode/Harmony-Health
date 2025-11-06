import React from 'react';
import './cta.css';

function Cta() {
  return (
    <section className='cta-section section-pad'>
      <div className='cta-container fade-in'>
        <h2>Ready to Experience Better Healthcare?</h2>
        <p>
          Join thousands of patients who trust Harmony Health for their medical
          needs.
        </p>
        <div className='cta-actions'>
          <a href='#appointment' className='btn-white'>
            Book an Appointment
          </a>
          <a href='#learn-more' className='btn-outline-white'>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
