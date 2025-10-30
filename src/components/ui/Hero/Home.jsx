import './home.css';

function Home({ data }) {
  const randomTestimony = data[Math.floor(Math.random() * data.length)];

  return (
    <div className='container section '>
      <div className='home'>
        <div className='hero'>
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
              <span className='blockquote'>"</span>
              {randomTestimony.testimony}
              <span className='blockquote'>"</span>
            </p>
          </div>
          <button className='appointment-btn button'>
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
