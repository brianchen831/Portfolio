import '../index.css';
import aboutImage from '../assets/aboutImage.jpg';

function About() {
  
  return (
    <div id='about' className='h-full w-screen pt-28 pb-28 cBackground flex justify-center flex-col lg:flex-row items-center text-white' style={{ backgroundImage: `url(/gradientPrimAcc.svg)`, backgroundSize: 'cover' }}>
        <div className='m-10 w-full h-full '>
            <h1 className='m-3 text-5xl font-extrabold secondary'>ABOUT ME</h1>
            <h1 className='m-3 text-xl font-extrabold primary'>Programming, Music, Traveling</h1>
            <p className='text-left m-4 text-xl text-gray-300'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti impedit, molestias sapiente earum quam tempore quae est dicta atque molestiae alias commodi consequuntur doloremque, magnam minus nesciunt? 
                <br />
                <br />
                Est error quos officiis maiores provident iusto id saepe aliquam velit ex delectus, neque quia, a, adipisci consequatur quibusdam animi vitae eligendi expedita quam incidunt sapiente omnis nostrum. 
                <br />
                <br />
                Molestiae minima itaque rem, accusamus libero asperiores, inventore sed blanditiis temporibus nostrum quos odio quod? Dolore, odit eum hic error, culpa voluptatibus sed aliquid voluptatum corrupti eaque animi tenetur dolorem quos officiis ullam consequuntur ex fuga voluptatem asperiores eligendi iure. Quaerat temporibus maxime repellendus cupiditate.
            </p>
        </div>
        <div className='m-10 w-full h-full'>
            <img className='rounded p-5 lg:p-0' src={`${aboutImage}`} alt="Image of Me" />
        </div>
    </div>
  );
}

export default About;
