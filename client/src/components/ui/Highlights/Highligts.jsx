import './highlights.css';

function Highlights() {
  const items = [
    {
      icon: 'fa-calendar-check',
      title: 'Easy Scheduling',
      text: 'Book appointments instantly with real-time availability. No more waiting on hold or playing phone tag.',
    },
    {
      icon: 'fa-video',
      title: 'Telemedicine',
      text: 'Connect with your doctor from anywhere. Secure video consultations available 24/7 for your convenience.',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Secure Records',
      text: 'Your medical information is protected with bank-level security and HIPAA compliance standards.',
    },
    {
      icon: 'fa-pills',
      title: 'Prescription Management',
      text: 'Manage prescriptions, set reminders, and request refills all from your personalized dashboard.',
    },
  ];

  return (
    <section className='features-section' id='features'>
      <div className='container'>
        <div className='section-header fade-in'>
          <h2>Why Choose Harmony Health?</h2>
          <p>
            Experience healthcare the modern way with our comprehensive digital
            platform.
          </p>
        </div>

        {/* --- Wrapper for swipeable carousel --- */}
        <div className='features-grid'>
          {items.map((it) => (
            <article key={it.title} className='feature-card fade-in'>
              <div className='feature-icon'>
                <i className={`fas ${it.icon}`} aria-hidden='true' />
              </div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
