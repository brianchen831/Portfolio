import React, { useState, useRef } from 'react';
import '../index.css';

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

  const handleMouseLeave = () => {
    setHighlightStyle({});
  };
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav ref={navRef} onMouseLeave={handleMouseLeave} className="w-screen fixed text-white" style={{zIndex : '3'}}>
        <div className="lg:flex w-screen hidden py-5 px-3 justify-between items-center backdrop-blur fixed">
            <a
            href="/#home"
            className="px-5 py-3 relative overflow-hidden justify-start text-2xl hover:font-bold secondary"
            >
                <span className="transition-all duration-300 ease-in-out">Eric Chen</span>
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
                    <span className="transition-all duration-300 ease-in-out backdrop-blur">{item}</span>
                </a>
                ))}
            </div>
            <div className='flex gap-5 justify-end pr-5'>
                <a
                    href="https://github.com/Eric8900"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 relative overflow-hidden justify-start hover:font-bold"
                >
                    <span className="transition-all duration-300 ease-in-out">GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/echen890/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 relative overflow-hidden justify-start hover:font-bold"
                >
                    <span className="transition-all duration-300 ease-in-out">LinkedIn</span>
                </a>
            </div>
        </div>

        {/* Mobile Navbar */}
        <div className='lg:hidden visible'>
            <div className='backdrop-blur flex px-5 py-5 justify-between'>
                <a href="/#home" className="text-4xl hover:font-bold justify-start secondary">
                    <span className="transition-all duration-300 ease-in-out">Eric Chen</span>
                </a>
                <button onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}} className="lg:hidden px-3 py-2 right-2 absolute">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            <div className={`w-fit right-0 absolute flex-col bg-p rounded ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <a key={index} href={`/#${item.toLowerCase()}`} onMouseEnter={handleMouseEnter} className="block px-5 py-3 hover:font-bold">
                    <span className="transition-all duration-300 ease-in-out">{item}</span>
                </a>
                ))}
                <a
                    href="https://github.com/Eric8900"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 relative overflow-hidden hover:font-bold"
                >
                    <span className="transition-all duration-300 ease-in-out">GitHub</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/echen890/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-3 relative overflow-hidden hover:font-bold"
                >
                    <span className="transition-all duration-300 ease-in-out">LinkedIn</span>
                </a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;