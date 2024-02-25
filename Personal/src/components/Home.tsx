import { useState, useEffect } from 'react';
import '../index.css';
import { motion } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';

function Home() {
  const phrases = ['junior', 'web developer', 'competitive programmer', 'world traveler', 'singer', 'sprinter'];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const changePhrase = () => {
      setFade(false); 
      const nextIndex = (phrases.indexOf(currentPhrase) + 1) % phrases.length;
      setTimeout(() => {
        setCurrentPhrase(phrases[nextIndex]);
        setFade(true); 
      }, 700);
    };

    const intervalId = setInterval(changePhrase, 3000);

    return () => clearInterval(intervalId);
  }, [currentPhrase, phrases]);

  return (
    <div id='home' className={`h-screen w-screen flex justify-center items-center text-white`}>
      <Spotlight
        className="top-44 left-24 right-0 lg:left-80"
        fill="white"
      />
        <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} className='p-5 text-center'>
            <h1 className='text-4xl'>
            Hi, I'm <b className='text-4xl text-sky-300'>Eric Chen</b>, and I'm a{' '}
            <span id='changingText' className={`${fade ? 'fade-in' : 'fade-out'} text-4xl text-sky-300`}>
                {currentPhrase}
            </span>{' '}
            from Texas.
            </h1>
        </motion.div>
    </div>
  );
}

export default Home;