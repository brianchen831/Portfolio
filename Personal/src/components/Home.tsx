import { useState, useEffect } from 'react';
import '../index.css';

function Home() {
  const phrases = ['junior', 'web developer', 'competitive programmer', 'singer', 'runner'];
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

    const intervalId = setInterval(changePhrase, 3000); // Change text every 1.5 seconds

    return () => clearInterval(intervalId);
  }, [currentPhrase]);

  return (
    <div id='home' className='h-screen w-screen cBackground flex justify-center items-center text-white'>
        <div className='p-5 text-center'>
            <h1 className='text-4xl'>
            Hi, I'm <b className='secondary'>Eric Chen</b>, and I'm a{' '}
            <span id='changingText' className={`${fade ? 'fade-in' : 'fade-out'} accent`}>
                {currentPhrase}
            </span>{' '}
            from Texas.
            </h1>
        </div>
    </div>
  );
}

export default Home;
