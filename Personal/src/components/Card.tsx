import React from 'react';
import '../index.css';
import { PinContainer } from './ui/CardPin';

type Badge = {
  text: string;
  color: string;
};

type CardProps = {
  imageUrl?: string;
  title?: string;
  badges: Badge[];
  description?: string;
  button1Href?: string;
  button2Href?: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, badges, button1Href }) => {
  return (
      <>
      <div className="w-full lg:w-2/6 h-full flex flex-col items-center justify-center text-center">
      <PinContainer
        title={button1Href}
        href={button1Href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base md:text-lg lg:text-3xl text-slate-100">
            {title}
          </h3>
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500">
            {badges.map((badge, index) => (
              <span key={index} className={`inline-block ${badge.color} rounded px-3 py-1 bg-gray-700 font-semibold text-white mr-2 mb-2`}>
                {badge.text}
              </span>
            ))}
            </span>
          </div>
          <img src={imageUrl} alt="" className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"/>
        </div>
      </PinContainer>
    </div>
    </>
    // <div className="w-4/5 flex flex-col xl:flex-row rounded overflow-hidden text-white m-5 lg:m-0 bg-[#2F2F2F]">
    //   <img className="w-full xl:w-4/6 p-4 rounded" src={imageUrl} alt="Top Section" />
    //   <div className="w-full px-6 py-4 flex flex-col justify-between">
    //     <div>
    //       <div className="font-bold text-3xl md:text-5xl my-5 md:my-10">{title}</div>
    //       <div className="my-5 md:my-10 text-sm md:text-xl">
    //         {badges.map((badge, index) => (
    //           <span key={index} className={`inline-block ${badge.color} rounded px-3 py-1 cBackground font-semibold text-white mr-2 mb-2`}>
    //             {badge.text}
    //           </span>
    //         ))}
    //       </div>
    //       <p className="text-gray-300 my-5 md:my-10 text-sm md:text-lg">{description}</p>
    //     </div>
    //     <div className='py-5 md:py-10'>
    //       <a href={button1Href} target="_blank" rel="noopener noreferrer" className="text-md lg:text-xl hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] mr-2 px-4 rounded">
    //         Learn More
    //       </a>
          // <a href={button2Href} target="_blank" rel="noopener noreferrer" className="text-md lg:text-xl bg-a hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] ml-2 px-4 rounded">
          //   Code
          // </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
