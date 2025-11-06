import './hero.css';

export default function Hero() {
  return (
    <div className='hero'>
      <section className='hero-wrapper container' id='home'>
        <div className='hero-grid'>
          {/* LEFT CONTENT */}
          <div className='hero-content fade-in-up'>
            <h1>
              Excellence in Care
              <br />
              <span className='highlight-blue'>Commitment to</span>
              <br />
              <span className='highlight-purple'>Health</span>
            </h1>

            <p>
              At Harmony Health, we are dedicated to providing compassionate,
              patient-centered care. Our team of experienced providers works
              with you to promote healing, wellness, and peace of mind.
            </p>

            <div className='hero-actions'>
              <a href='#book' className='btn-primary'>
                Find doctors
                <span aria-hidden='true'>→</span>
              </a>
              <a href='#about' className='btn-secondary'>
                More Info
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className='hero-visual fade-in-delay' aria-hidden='true'>
            <div className='hero-image'>
              {/* background photo */}
              <img
                src='/images/doctors.png'
                alt='Clinic interior'
                className='hero-bg-photo'
              />

              {/* floating badge (optional) */}
              <div className='hero-badge'>
                <span className='hero-badge-dot' aria-hidden='true'></span>
                Online appointments available
              </div>

              {/* overlay with stats */}
              <div className='stats-overlay fade-overlay'>
                <div className='stats-grid'>
                  <div className='stat-item'>
                    <h3>1,200+</h3>
                    <p>Doctors</p>
                  </div>
                  <div className='stat-item'>
                    <h3>50+</h3>
                    <p>Specialties</p>
                  </div>
                  <div className='stat-item'>
                    <h3>24/7</h3>
                    <p>Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
