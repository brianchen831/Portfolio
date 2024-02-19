import React from 'react';
import '../index.css';

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

const CardRight: React.FC<CardProps> = ({ imageUrl, title, badges, description, button1Href, button2Href }) => {
  return (
    <div className="w-4/5 flex flex-col xl:flex-row rounded overflow-hidden text-white m-5 lg:m-0 bg-[#2F2F2F]">
      <img className="w-full block p-4 xl:hidden" src={imageUrl} alt="Top Section" />
      <div className="w-full px-6 py-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-3xl md:text-5xl my-5 md:my-10">{title}</div>
          <div className="my-5 md:my-10 text-sm md:text-xl">
            {badges.map((badge, index) => (
              <span key={index} className={`inline-block ${badge.color} rounded px-3 py-1 cBackground font-semibold text-white mr-2 mb-2`}>
                {badge.text}
              </span>
            ))}
          </div>
          <p className="text-gray-300 my-5 md:my-10 text-sm md:text-lg">{description}</p>
        </div>
        <div className='py-5 md:py-10'>
          <a href={button1Href} target="_blank" rel="noopener noreferrer" className="text-md lg:text-xl bg-a hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] mr-2 px-4 rounded">
            Learn More
          </a>
          <a href={button2Href} target="_blank" rel="noopener noreferrer" className="text-md lg:text-xl bg-a hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-[0.8rem] ml-2 px-4 rounded">
            Code
          </a>
        </div>
      </div>
      <img className="w-full hidden xl:w-4/6 p-4 xl:block" src={imageUrl} alt="Top Section" />
    </div>
  );
};

export default CardRight;
