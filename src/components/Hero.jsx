// Hero.js
import React, { useContext } from 'react';
import heroImg from '../assets/rightHero.png';
import { FaSquareXTwitter, FaLinkedin, FaGithub, FaRegMoon } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import CV from '../assets/SeshaSaiCV.pdf';
import { ThemeContext } from './ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <section id='hero' className={`min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
        <div className='relative flex flex-col items-center mt-6'>
          <img src={heroImg} alt='hero' className='rounded-2xl w-60 h-60 lg:w-72 lg:h-72 object-cover'/>
          <div 
            className='absolute top-0 right-[-15%] h-7 cursor-pointer'
            onClick={toggleTheme}
          >
            {theme === 'light' ? <IoSunnySharp size={24} /> : <FaRegMoon size={24} />}
          </div>
        </div>
        <div className='text-center lg:mt-6 lg:ml-8'>
          <h1 className='text-4xl font-bold'>Sesha Sai</h1>
          <h2 className={`text-2xl ${theme === 'light' ? 'text-gray-600' : 'text-cyan-400'}`}>Frontend Developer</h2>
          <span className='flex justify-center space-x-4 mt-4'>
            <a href='https://x.com/' target='_blank' rel='noopener noreferrer'>
              <FaSquareXTwitter size={30}/>
            </a>
            <a href='https://www.linkedin.com/in/seshasai14/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={30}/>
            </a>
            <a href='https://github.com/Seshasai14' target='_blank' rel='noopener noreferrer'>
              <FaGithub size={30}/>
            </a>
          </span>
          <p className='font-Robo mt-6 px-4 font-light'>
            With a passion for developing modern React web apps for commercial businesses.
          </p>
          <a href={CV} download='SeshaSaiCV.pdf' className='shadow-xl mt-6 inline-block hover:animate-bounce'>
            <button className='bg-blue-500 text-white px-6 py-2 rounded-lg'>Resume</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
