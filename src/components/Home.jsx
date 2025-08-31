import './home.css';

function Home() {
  return (
    <div className='container section '>
      <div className='home'>
        <div className='blob blob-main'></div>
        <div className='blob2 blob-main'></div>
        <div className='hero-content'>
          <h2>
            Excellence in Care
            <br />
            <span className='hero'>Commitment to Health</span>
          </h2>
        </div>

        <div className='sub-hero'>
          <p>
            At Harmony Health, we are dedicated to providing compassionate,
            patient-centered care. Our team of experienced providers works with
            you to promote healing, wellness, and peace of mind.
          </p>

          <div className='find-doctors'>
            <button>Find doctors</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
