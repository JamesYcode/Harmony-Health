import Marquee from 'react-fast-marquee';
import './insurance.css';

function Insurance({ data }) {
  return (
    <div className='partners'>
      <div className='container section'>
        <div className='partners-container'>
          <p>Trusted by Leading Insurance Providers</p>
          <Marquee speed={25} autoFill={true}>
            {data.map((el) => (
              <div key={el.id} className='partners-wrapper'>
                <img src={el.image.insurance} alt='' />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
