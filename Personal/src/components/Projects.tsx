import '../index.css';
import Card from './Card';

function Projects() {
  
  return (
    <div id='projects' className='w-screen pt-28 pb-40 cBackground flex justify-center flex-col cBackground items-center text-white'>
        <div className='text-center m-20'>
            <h1 className='m-3 text-5xl font-extrabold secondary'>PROJECTS AND ACHIEVEMENTS</h1>
            <h1 className='m-3 text-xl font-extrabold primary'>Websites, School Projects, Competitive Programming</h1>
        </div>
        <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-10'>
            <Card
            imageUrl="https://fakeimg.pl/600x400"
            title="Interstellar"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'JavaScript', color: 'cBackground' }, { text: 'Bootstrap', color: 'cBackground' }, { text: 'ThreeJS', color: 'cBackground' }]}
            description="This is the website for my Webmaster project in Technology Student Association (TSA). It is intended to promote space exploration and tourism."
            button1Href='https://santiago11234.github.io/InterStellar/'
            button2Href='https://github.com/Eric8900/InterStellar'
            />
            <Card
            imageUrl="https://fakeimg.pl/600x400"
            title="GPT Plus"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'JavaScript', color: 'cBackground' }, { text: 'Bootstrap', color: 'cBackground' }, { text: 'OpenAI API', color: 'cBackground' }]}
            description="I created this project to not only save money on GPT-4 but also to learn more about APIs and front-end development with Bootstrap."
            button1Href='https://gptplus.onrender.com/'
            button2Href='https://github.com/Eric8900'
            />
            <Card
            imageUrl="https://fakeimg.pl/600x400"
            title="Maze Builder"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'JavaScript', color: 'cBackground' }, { text: 'Bootstrap', color: 'cBackground' }, { text: 'A* Algorithm', color: 'cBackground' }]}
            description="This is my maze builder project in which I worked with HTML Canvas to create a maze, and I learned about and implemented the A* algorithm for the maze solution."
            button1Href='eric8900.github.io/Maze-Builder/'
            button2Href='https://github.com/Eric8900/Maze-Builder'
            />
            <Card
            imageUrl="https://fakeimg.pl/600x400"
            title="Wordle Game"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'JavaScript', color: 'cBackground' }]}
            description="This is my recreation of the popular word guessing game Wordle for a school project."
            button1Href='https://eric8900.github.io/Wordle-Clone/'
            button2Href='https://github.com/Eric8900/Wordle-Clone'
            />
        </div>
    </div>
  );
}

export default Projects;
