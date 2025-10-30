import './App.css';
import Footer from './components/ui/Footer/Footer';
import Header from './components/ui/Header/Header';
import Hero from './components/ui/Hero/Hero';
import Home from './components/ui/Hero/Home';
import Insurance from './components/ui/Insurance/Insurance';

const data = [
  {
    image: {
      profile: '/images/patient_1.jpg',
      insurance: '/images/anthem.svg',
    },
    name: 'John',
    testimony:
      'The doctors at Harmony Health truly listened to my concerns and created a treatment plan that worked for me.',
    id: 1,
  },
  {
    image: {
      profile: '/images/patient_2.jpg',
      insurance: '/images/Aetna_logo.svg',
    },
    name: 'Jennifer',
    testimony:
      'From the moment I walked in, the staff made me feel comfortable and cared for.',
    id: 2,
  },
  {
    image: {
      profile: '/images/patient_3.jpg',
      insurance: '/images/cigna-3.svg',
    },
    name: 'Amber',
    testimony:
      'Scheduling an appointment was easy, and I was able to see a provider the same week.',
    id: 3,
  },
  {
    image: {
      profile: '/images/patient_4.jpg',
      insurance: '/images/uhc.svg',
    },
    name: 'Douglas',
    testimony:
      'Thanks to Harmony Health, I feel healthier, supported, and more confident in my care.The doctors at Harmony Health truly listened to my concerns and created a treatment plan that worked for me.',
    id: 4,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Insurance data={data} />
      <Home data={data} />
      <Footer />
    </div>
  );
}

export default App;
