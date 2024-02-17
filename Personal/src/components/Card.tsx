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

const Card: React.FC<CardProps> = ({ imageUrl, title, badges, description, button1Href, button2Href }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden text-gray-900 m-5 lg:m-0 bg-p flex flex-col justify-between">
      <img className="w-full" src={imageUrl} alt="Top Section" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="mb-4">
          {badges.map((badge, index) => (
            <span key={index} className={`inline-block ${badge.color} rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}>
              {badge.text}
            </span>
          ))}
        </div>
        <p className="text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-5">
        <a href={button1Href} target="_blank" rel="noopener noreferrer" className="cBackground hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-2 mr-2 px-4 rounded">
          Learn More
        </a>
        <a href={button2Href} target="_blank" rel="noopener noreferrer" className="cBackground hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-300 text-white font-bold py-2 ml-2 px-4 rounded">
          Code
        </a>
      </div>
    </div>
  );
};

export default Card;
