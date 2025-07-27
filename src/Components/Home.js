import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpg';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-[#050513] via-[#0a0a2b] to-[#050513] text-white relative overflow-hidden"
    >
      {/* Overlay effect (Optional) */}
      {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}

      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-6 py-8">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center md:w-1/2 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fadeIn">
            I'm a <span className="text-cyan-400">Full Stack Web Developer</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 font-light animate-fadeIn delay-200">
            Greetings,
            <br /><br />
            I'm <span className="font-bold text-cyan-300">YAZID</span>, a skilled Full Stack Developer and Game Developer. I excel in crafting interactive web applications and captivating games. Let's build something extraordinary together.
            <br /><br />
            Best,
          </p>
          
          <div className="animate-fadeIn delay-400">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-8 py-4 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={24} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center z-10">
          <img
            src={me}
            alt="My profile"
            className="rounded-2xl w-72 md:w-96 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
