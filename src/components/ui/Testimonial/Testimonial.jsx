import './testimonial.css';

export default function Testimonial({ data }) {
  // const randomTestimony = data[Math.floor(Math.random() * data.length)];
  return (
    <section className='testimonial-section section-pad'>
      <div className='testimonial-container fade-in'>
        <div className='testimonial-card'>
          <p className='testimonial-text'>
            The doctors at Harmony Health truly listened to my concerns and
            created a treatment plan that worked for me.
          </p>

          <div className='testimonial-author' aria-label='Author'>
            <div className='author-image' aria-hidden='true'>
              <i className='fas fa-user' />
            </div>
            <div className='author-info'>
              <h4>John</h4>
              <p>Verified Patient</p>
            </div>
          </div>

          {/* Place holders */}
          <div className='rating' aria-label='5 out of 5 stars'>
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
            <i className='fas fa-star' />
          </div>
        </div>
      </div>
    </section>
  );
}
