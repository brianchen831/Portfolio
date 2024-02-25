import '../index.css';
import aboutImage from '../assets/aboutImage.jpg';
import { motion } from 'framer-motion';

function About() {
  
  return (
    <div id='about' className='h-full w-screen pt-28 pb-28 cBackground flex justify-center flex-col lg:flex-row items-center text-white'>
      {/* style={{ backgroundImage: `url(/blurry-gradient-haikei.png)`, backgroundSize: 'cover' }} */}
        <div className='m-10 w-full h-full '>
            <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 1 }} viewport={{once: true,}}>
              <h1 className='m-3 text-5xl font-extrabold text-4xl bg-gradient-to-t from-gray-600 to-gray-500 inline-block text-transparent bg-clip-text'>
                  ABOUT ME
              </h1>
              <h1 className='m-3 text-xl font-extrabold opacity-60'>Programming, Music, Traveling</h1>
            </motion.div>
            <motion.div initial={{ y : 50 }} whileInView={{ y : 0 }} transition={{ ease: "easeInOut", duration: 0.3 }} viewport={{once: true,}}>
              <p className='text-left m-4 text-xl text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti impedit, molestias sapiente earum quam tempore quae est dicta atque molestiae alias commodi consequuntur doloremque, magnam minus nesciunt? 
                  <br />
                  <br />
                  Est error quos officiis maiores provident iusto id saepe aliquam velit ex delectus, neque quia, a, adipisci consequatur quibusdam animi vitae eligendi expedita quam incidunt sapiente omnis nostrum. 
                  <br />
                  <br />
                  Molestiae minima itaque rem, accusamus libero asperiores, inventore sed blanditiis temporibus nostrum quos odio quod? Dolore, odit eum hic error, culpa voluptatibus sed aliquid voluptatum corrupti eaque animi tenetur dolorem quos officiis ullam consequuntur ex fuga voluptatem asperiores eligendi iure. Quaerat temporibus maxime repellendus cupiditate.
              </p>
            </motion.div>
        </div>
        <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 1 }} viewport={{once: true,}} className='m-10 w-full h-full'>
            <img className='rounded p-5 lg:p-0' src={`${aboutImage}`} alt="Image of Me" />
        </motion.div>
    </div>
  );
}

export default About;
