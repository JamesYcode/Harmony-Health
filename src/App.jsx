import './App.css';
import Header from './components/Header';
import Home from './components/Home';

const data = [
  {
    image: {
      profile: '/src/assets/images/patient_1.jpg',
    },
    name: 'John',
    testimony:
      'The doctors at Harmony Health truly listened to my concerns and created a treatment plan that worked for me.',
    id: 1,
  },
  {
    image: {
      profile: '/src/assets/images/patient_2.jpg',
    },
    name: 'Jennifer',
    testimony:
      'From the moment I walked in, the staff made me feel comfortable and cared for.',
    id: 2,
  },
  {
    image: {
      profile: '/src/assets/images/patient_3.jpg',
    },
    name: 'Amber',
    testimony:
      'Scheduling an appointment was easy, and I was able to see a provider the same week.',
    id: 3,
  },
  {
    image: {
      profile: '/src/assets/images/patient_4.jpg',
    },
    name: 'Lin',
    testimony:
      'Thanks to Harmony Health, I feel healthier, supported, and more confident in my care.The doctors at Harmony Health truly listened to my concerns and created a treatment plan that worked for me.',
    id: 4,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Home data={data} />
    </div>
  );
}

export default App;
