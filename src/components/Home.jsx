import './home.css';

function Home({ data }) {
  const randomTestimony = data[Math.floor(Math.random() * data.length)];

  return (
    <div className='container section '>
      <div className='home'>
        <div className='blob blob-main'></div>
        <div className='blob2 blob-main'></div>
        <div className='hero'>
          <div className='hero-content'>
            <h2>
              Excellence in Care
              <br />
              <span className='hero-heading'>Commitment to Health</span>
            </h2>
          </div>

          <div className='sub-hero'>
            <p>
              At Harmony Health, we are dedicated to providing compassionate,
              patient-centered care. Our team of experienced providers works
              with you to promote healing, wellness, and peace of mind.
            </p>
            <div className='more-info'>
              <button>Find doctors</button>
              <button>More Info</button>
            </div>
          </div>
          <div className='partners-container'></div>

          <div className='testimony-slide'>
            <div className='testimony-container'>
              <img
                className='testimony-img'
                src={randomTestimony.image.profile}
                alt={randomTestimony.name}
              />
              <p className='testimony-name'>{randomTestimony.name}</p>
            </div>
            <p className='testimony-quote'>
              <blockquote>"</blockquote>
              {randomTestimony.testimony}
              <blockquote>"</blockquote>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
