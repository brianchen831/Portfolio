import '../index.css';

function Contact() {
  
  return (
    <div id='contact' className='h-screen w-screen pt-28 pb-28 cBackground flex justify-center flex-col cBackground items-center text-white'>
        <div className='text-center m-20'>
            <h1 className='m-3 text-5xl font-extrabold bg-gradient-to-t from-gray-600 to-gray-500 inline-block text-transparent bg-clip-text'>CONTACT</h1>
            <h1 className='m-3 text-xl font-extrabold opacity-60'>Want to work with me? Lets Connect.</h1>
            <a href="mailto:ericchen890@gmail.com" className='hover:underline hover:font-bold transition-all duration-300 ease-in-out'>ericchen890@gmail.com</a>
        </div>
    </div>
  );
}

export default Contact;
