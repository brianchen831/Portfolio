import '../index.css';
import Card from './Card';
import CardRight from './CardRight';

function Projects() {
  
  return (
    <div id='projects' className='w-screen pt-28 pb-40 cBackground flex justify-center flex-col cBackground items-center text-white'>
        <div className='text-center m-20'>
            <h1 className='m-3 text-5xl font-extrabold secondary'>PROJECTS AND ACHIEVEMENTS</h1>
            <h1 className='m-3 text-xl font-extrabold primary'>Websites, School Projects, Competitive Programming</h1>
        </div>
        <div className='flex flex-col w-full justify-center items-center gap-20'>
            <Card
            imageUrl="/Interstellar.png"
            title="Interstellar"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'JavaScript', color: 'cBackground' }, { text: 'Bootstrap', color: 'cBackground' }, { text: 'ThreeJS', color: 'cBackground' }]}
            description="This is the website for my Webmaster project in Technology Student Association (TSA). It is intended to promote space exploration and tourism."
            button1Href='https://santiago11234.github.io/InterStellar/'
            button2Href='https://github.com/Eric8900/InterStellar'
            />
            <CardRight
            imageUrl="https://fakeimg.pl/600x400"
            title="Personal Website"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'TypeScript', color: 'cBackground' }, { text: 'React', color: 'cBackground' }, { text: 'Tailwind CSS', color: 'cBackground' }, { text: 'Vite', color: 'cBackground' }, { text: 'Framer Motion', color: 'cBackground' }]}
            description="This is the website that you are on, and I used ReactTS along with Tailwind. In developing this website, I further expanded my React and Tailwind knowledge by learning how to make components such as the Navbar and optimize the website for mobile devices."
            button1Href='https://personal-eric8900.vercel.app/'
            button2Href='https://github.com/Eric8900/Personal'
            />
            <Card
            imageUrl="https://fakeimg.pl/600x400"
            title="Pigeon Project (Non-Profit)"
            badges={[{ text: 'HTML', color: 'cBackground' }, { text: 'CSS', color: 'cBackground' }, { text: 'TypeScript', color: 'cBackground' }, { text: 'React', color: 'cBackground' }, { text: 'Tailwind CSS', color: 'cBackground' }, { text: 'Vite', color: 'cBackground' }, { text: 'Framer Motion', color: 'cBackground' }]}
            description="This is the website created in ReactTS for a non-profit aimed at providing academic support to underprivileged children in my local community, bridging the socio-economic gap in our community."
            button1Href='https://pigeonproject.vercel.app/'
            button2Href='https://github.com/AshmeetC/PigeonProject'
            />
            <CardRight
            imageUrl="/GPTPlus.png"
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
            button1Href='https://eric8900.github.io/Maze-Builder/'
            button2Href='https://github.com/Eric8900/Maze-Builder'
            />
            <CardRight
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
