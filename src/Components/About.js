import React from 'react'
import ue from '../assets/ue.jpg'

function About() {
  return (
    <div
      name="About"
      id="about"
      className="w-full h-screen bg-gradient-to-b from-[#050513] via-[#0a0a2b] to-[#050513] text-gray-300 flex justify-center items-center"
    >
      <div className="w-11/12 max-w-6xl bg-[#0a0a2b]/60 backdrop-blur-md shadow-lg rounded-xl p-10 md:p-16 flex flex-col items-center animate-fadeIn">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-wide border-b-4 border-cyan-500 inline-block pb-2">
            About
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="w-full flex justify-center">
            <img
              src={ue}
              alt="profile"
              className="rounded-2xl w-10/12 md:w-full transition-transform duration-300 hover:scale-105 shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="text-lg md:text-xl font-light leading-relaxed text-gray-200">
            <p className="font-semibold text-2xl md:text-3xl text-cyan-400 mb-4">
              Passion & Creativity
            </p>
            <p>
              I’m a passionate <span className="font-bold text-cyan-300">Full Stack Developer</span> and <span className="font-bold text-cyan-300">Game Developer</span> dedicated to crafting exceptional digital experiences. From interactive websites to immersive games, I thrive on pushing boundaries and bringing creativity to life through code. Let’s build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
