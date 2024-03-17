import '../index.css';
import Card from './Card';
import projectData from '../data/projects.json';
import { WordSection } from './WordSection';
// import { motion } from 'framer-motion';

function Projects() {
  
  return (
    <div id='projects' className='w-screen pt-28 pb-40 cBackground flex justify-center flex-col cBackground items-center text-white'>
        <div className='text-center my-20'>
            <h1 className='m-3 text-5xl font-extrabold bg-gradient-to-r from-sky-300 via-cyan-300 to-sky-400 inline-block text-transparent bg-clip-text'>PROJECTS AND ACHIEVEMENTS</h1>
        </div>
        <div className='flex flex-row flex-wrap w-full justify-center items-center gap-10'>
            {projectData.map((project, index) => (
                <Card
                    key={index}
                    imageUrl={project.imageUrl}
                    title={project.title}
                    badges={project.badges}
                    button1Href={project.button1Href}
                />
            ))}
        </div>
        <div className='flex flex-col gap-y-40 py-60 text-6xl sm:text-7xl md:text-8xl lg:text-9xl flex-wrap mx-5 md:mx-0'>
          <WordSection words={`In terms of `}>
            <><span className="inline font-[800] text-5xl bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 text-transparent bg-clip-text">competitive programming</span></>
          </WordSection>
          <WordSection words={`I have reached the`}>
            {/* <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} viewport={{ once : true}} className='p-5 text-center'> */}
            <h1 className={`font-[800] text-sky-400 inline`}>USACO Gold Division</h1>
            {/* </motion.div> */}
          </WordSection>
          <WordSection words={`and was a part of `}>
            {/* <motion.div initial={{ opacity : 0 }} whileInView={{ opacity : 1 }} transition={{ ease: "easeInOut", duration: 0.7 }} viewport={{ once : true}} className='p-5 text-center'> */}
            <h1 className={`font-[800] text-sky-400 inline`}>UCF's CPSI</h1>
            {/* </motion.div> */}
          </WordSection>
        </div>
    </div>
  );
}

export default Projects;
