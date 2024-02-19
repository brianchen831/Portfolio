import React, { useState, useRef } from 'react';
import '../index.css';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setHighlightStyle({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0, delay: 0 } // Exit transition
    }
  };   

  const handleMouseLeave = () => {
    setHighlightStyle({});
  };
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav ref={navRef} onMouseLeave={handleMouseLeave} className="w-screen fixed text-white" style={{zIndex : '3'}}>
        <div className="lg:flex w-screen hidden py-5 px-3 justify-between items-center backdrop-blur fixed">
            <a
            href="/#home"
            className="px-5 py-3 relative overflow-hidden text-2xl hover:font-bold secondary"
            >
                <motion.div initial={{ width : 0 }} animate={{ width : '100%'}} transition={{ ease: "easeInOut", duration: 1.5 }} className='whitespace-nowrap overflow-hidden tracking-normal'>
                    <span className="transition-all duration-300 ease-in-out">Eric Chen</span>
                </motion.div>
            </a>
            <div className="flex gap-5 justify-center">
                <div className="absolute bottom-0 h-1 bg-a transition-all" style={highlightStyle} />
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <a
                    key={index}
                    href={`/#${item.toLowerCase()}`}
                    onMouseEnter={handleMouseEnter}
                    className="px-5 py-3 relative overflow-hidden backdrop-blur hover:font-extrabold"
                >
                    <motion.div initial={{ width : 0 }} animate={{ width : '100%'}} transition={{ ease: "easeInOut", delay: (0.3 + index * 0.3), duration: 0.7 }} className='whitespace-nowrap overflow-hidden tracking-normal'>
                        <span className="transition-all duration-300 ease-in-out backdrop-blur">{item}</span>
                    </motion.div>
                </a>
                ))}
            </div>
            <div className='flex gap-5 justify-end pr-5'>
                <a
                    href="https://github.com/Eric8900"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-3 relative overflow-hidden justify-start hover:font-bold"
                >
                    <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1}} transition={{ ease: "easeInOut", duration: 1.5 }} className='whitespace-nowrap overflow-hidden tracking-normal'>
                        <svg className="h-10 w-10 fill-white transition-all duration-300 ease-in-out hover:fill-s hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                    </motion.div>
                </a>
                <a
                    href="https://www.linkedin.com/in/echen890/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-3 relative overflow-hidden justify-start hover:font-bold"
                >
                    <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1}} transition={{ ease: "easeInOut", duration: 1.5 }} className='whitespace-nowrap overflow-hidden tracking-normal'>
                        <svg className="h-10 w-10 fill-white transition-all duration-300 ease-in-out hover:fill-s hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </motion.div>
                </a>
            </div>
        </div>

        {/* Mobile Navbar */}
        <div className='lg:hidden visible'>
            <div className='backdrop-blur flex px-5 py-5 justify-between'>
                <a href="/#home" className="text-4xl hover:font-bold justify-start secondary">
                    <motion.div initial={{ width : 0 }} animate={{ width : '100%'}} transition={{ ease: "easeInOut", duration: 1.5 }} className='whitespace-nowrap overflow-hidden tracking-normal'>
                        <span className="transition-all duration-300 ease-in-out">Eric Chen</span>
                    </motion.div>    
                </a>
                <button onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}} className="lg:hidden px-3 py-2 right-2 absolute">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height : 0}}
                    transition={{ ease: [0.1, 1, 0.2, 1], type : "spring", duration : 0.5 }}
                    className="w-fit h-fit right-0 absolute flex flex-col items-center bg-a rounded"
                    >   
                            <motion.div initial="hidden" animate="visible" exit="exit" variants={variants} className='flex flex-col items-center bg-a rounded'>
                                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                                <a key={index} href={`/#${item.toLowerCase()}`} onMouseEnter={handleMouseEnter} className="block px-5 py-3 hover:font-bold">
                                    <span className="transition-all duration-300 ease-in-out">{item}</span>
                                </a>
                                ))}
                                <svg className='w-20 h-2 stroke-white' xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="5" x2="100" y2="5" stroke-width="2" />
                                </svg>

                                <a
                                    href="https://github.com/Eric8900"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="justify-center px-5 py-3 relative overflow-hidden hover:font-bold"
                                >
                                    {/* <span className="transition-all duration-300 ease-in-out">GitHub</span> */}
                                    <svg className="h-10 w-10 fill-white transition-all duration-300 ease-in-out hover:fill-p hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/echen890/"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 relative overflow-hidden hover:font-bold"
                                >
                                    <svg className="h-10 w-10 fill-white transition-all duration-300 ease-in-out hover:fill-p hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </nav>
  );
}

export default Navbar;