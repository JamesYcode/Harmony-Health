import './hero.css';

function Hero() {
  return (
    <div className='hero container section'>
      <div className='blob blob-main'></div>
      <div className='blob2 blob-main'></div>
      <div className='hero-content'>
        <h2>
          Excellence in Care
          <br />
          <span className='hero-heading'>Commitment to Health</span>
        </h2>
        <div className='hero-doctors'></div>
      </div>

      <div className='sub-hero'>
        <p>
          At Harmony Health, we are dedicated to providing compassionate,
          patient-centered care. Our team of experienced providers works with
          you to promote healing, wellness, and peace of mind.
        </p>
        <div className='more-info'>
          <button className='button'>Find doctors</button>
          <button className='button'>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
