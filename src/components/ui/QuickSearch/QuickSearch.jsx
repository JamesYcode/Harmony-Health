import './quicksearch.css';
import { useState } from 'react';

function QuickSearch() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const specialty = e.currentTarget.specialty.value;
    const location = e.currentTarget.location.value;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        `Found 25+ doctors${specialty ? ` specializing in ${specialty}` : ''}${
          location ? ` in ${location}` : ''
        }. Redirecting to results...`
      );
    }, 1500);
  };

  return (
    <section className='quick-search'>
      <div className=' container'>
        <div className='search-card fade-in'>
          <div className='search-header'>
            <h2>Find Your Perfect Doctor</h2>
            <p>Search by specialty, location, or availability</p>
          </div>

          <form className='search-form' onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='specialty'>Medical Specialty</label>
              <select
                className='form-input'
                id='specialty'
                name='specialty'
                defaultValue=''
              >
                <option value=''>All Specialties</option>
                <option value='cardiology'>Cardiology</option>
                <option value='dermatology'>Dermatology</option>
                <option value='pediatrics'>Pediatrics</option>
                <option value='orthopedics'>Orthopedics</option>
                <option value='neurology'>Neurology</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='location'>Location</label>
              <input
                id='location'
                name='location'
                className='form-input'
                placeholder='City, state, or zip code'
              />
            </div>

            <button
              type='submit'
              className='btn-primary search-submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className='fas fa-spinner fa-spin' /> Searching...
                </>
              ) : (
                <>
                  <i className='fas fa-search' /> Search Doctors
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuickSearch;
