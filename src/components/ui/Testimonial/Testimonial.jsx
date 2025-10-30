import './testimonial.css';
function Testimonial({ data }) {
  const randomTestimony = data[Math.floor(Math.random() * data.length)];
  return (
    <div>
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
    </div>
  );
}

export default Testimonial;
