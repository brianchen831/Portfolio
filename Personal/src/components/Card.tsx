import React from 'react';
import '../index.css';
import { CardBody, CardContainer, CardItem } from './Card3D';

type Badge = {
  text: string;
  color: string;
};

type CardProps = {
  imageUrl: string;
  title: string;
  badges: Badge[];
  description: string;
  button1Href: string;
  button2Href: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, badges, description, button1Href, button2Href }) => {
  return (
    <>
      <CardContainer className='flex flex-col mx-5 sm:mx-0'>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
      <CardItem translateZ="80">
      <img className="w-fit h-fit p-4 rounded" src={imageUrl} alt="Top Section" />
      </CardItem>
      <CardItem translateZ="50">
      <div className="w-full px-6 py-4 flex flex-col justify-between">
        <CardItem translateZ="50">
          <div className="font-bold text-3xl my-5">{title}</div>
        </CardItem>
        <CardItem translateZ="40">
          <div className="my-5 text-sm">
            {badges.map((badge, index) => (
              <span key={index} className={`inline-block ${badge.color} rounded px-3 py-1 bg-gray-700 font-semibold text-white mr-2 mb-2`}>
                {badge.text}
              </span>
            ))}
          </div>
        </CardItem>
        <CardItem translateZ="40">
          <p className="text-gray-300 my-5 text-md md:text-lg">{description}</p>
        </CardItem>
        <div className='flex justify-start py-10'>
        <CardItem translateZ={1000}>
          <a href={button1Href} target="_blank" rel="noopener noreferrer" className="text-md bg-gray-700 hover:bg-a hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] mr-2 px-4 rounded">
              Learn More
          </a>
          </CardItem>
          <CardItem translateZ={1000}>
          <a href={button2Href} target="_blank" rel="noopener noreferrer" className="text-md bg-gray-700 hover:bg-a hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] ml-2 px-4 rounded">
                Code
          </a>
        </CardItem>
        </div>
        
          
        </div>
      </CardItem>
      </CardBody>
      </CardContainer>
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
    //       <a href={button2Href} target="_blank" rel="noopener noreferrer" className="text-md lg:text-xl bg-a hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] ml-2 px-4 rounded">
    //         Code
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
