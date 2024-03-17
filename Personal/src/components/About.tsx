import '../index.css';
import aboutImage from '../assets/aboutImage.jpg';
import { motion } from 'framer-motion';

function About() {
  
  return (
    <div id='about' className='h-full w-screen pt-28 pb-28 cBackground flex justify-center flex-col lg:flex-row items-center text-white'>
      {/* style={{ backgroundImage: `url(/blurry-gradient-haikei.png)`, backgroundSize: 'cover' }} */}
        <div className='my-3 w-full h-full '>
            <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 1 }} viewport={{once: true,}}>
              <h1 className='md:m-8 m-4 text-5xl font-extrabold bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-400 inline-block text-transparent bg-clip-text'>
                  ABOUT ME
              </h1>
            </motion.div>
            <motion.div initial={{ y : 50 }} whileInView={{ y : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }} viewport={{once: true,}}>
              <p className='text-left md:m-8 m-4 text-xl text-gray-300'>
                  I've been coding for about 3 years and am passionate about competitive programming and website development.
                  <br />
                  <br />
                  My journey in competitive programming has developed critical reading comprehsion and problem solving skills. Having participated in USACO, Codeforces, TeamsCode, LIT, CALICO, and local competitions, competitive programming is a hobby that also allows me to collaborate, have fun, and learn from others at competitions. Aside from competitive programming, I also like to create websites from time to time. They not only allow me to showcase my creativity through code but also apply my competitive programming knowledge onto an actual website.
                  <br />
                  <br />
                  Aside from coding in general, music has also been a key part in my life. I've been singing as a part of choir for 7 years, while learning piano for 3 of those years, and am currently a part of my school's varsity choir.
              </p>
            </motion.div>
        </div>
        <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 1 }} viewport={{once: true,}} className='my-3 w-full h-full'>
            <img className='rounded p-5 lg:p-0' src={`${aboutImage}`} alt="Image of Me" />
        </motion.div>
    </div>
  );
}

export default About;
