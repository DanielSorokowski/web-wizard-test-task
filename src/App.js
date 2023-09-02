import { useState } from 'react';
import './App.scss'
import { About } from './Components/About/About';
import { Banner } from './Components/Banner/Banner';
import { Header } from './Components/Header/Header';
import { Modal } from './Components/Modal/Modal';
import { Slider } from './Components/Slider/Slider';

const App = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="app">
      <Header setIsModal={setIsModal} />
      {isModal && <Modal setIsModal={setIsModal} />}
      <main className='main'>
        <Banner />
        <About />
        <Slider />
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
