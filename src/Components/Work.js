import React from 'react';
import img from '../images/imf04.png';
import img2 from '../images/imp05.png';
import img3 from '../images/django.png';
import img4 from '../images/Capture.PNG';
import img5 from '../images/game.png';
import img6 from '../images/project.png'

const projects = [
  {
    title: 'project Management System',
    description: 'project Management System built with react and django',
    image: img6,
    link: 'https://github.com/Hyazid/project_management_app',
    buttonLabel: 'Code'
  },
  {
    title: 'Farm Management System',
    description: 'Farm Management System built with PHP and MySQL',
    image: img,
    link: '/',
    buttonLabel: 'Code'
  },
  {
    title: 'Personal Management System',
    description: 'Personal Management System web application built with Tailwind and Django',
    image: img2,
    link: 'https://github.com/Hyazid/adminMang',
    buttonLabel: 'Code'
  },
  {
    title: 'News Website',
    description: 'News website built with Django',
    image: img3,
    link: 'https://github.com/Hyazid/newsWebSite',
    buttonLabel: 'Code'
  },
  {
    title: '3D Modeling',
    description: '3D modeling and game assets using Blender',
    image: img4,
    link: 'https://www.youtube.com/@yazidhanniche',
    buttonLabel: 'Demo'
  },
  {
    title: 'Game Developer',
    description: 'Game development using Unreal Engine',
    image: img5,
    link: 'https://www.youtube.com/@yazidhanniche',
    buttonLabel: 'Demo'
  },
];

function Work() {
  return (
    <div name="Work" className="w-full min-h-screen bg-gradient-to-b from-[#050513] via-[#0a0a2b] to-[#050513] text-gray-300 py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 border-b-4 border-cyan-500 inline-block pb-2">
            Work
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light max-w-2xl">
            Check out some of my most significant projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-60 transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3 text-center px-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base text-center px-4 mb-4">
                  {project.description}
                </p>
                <a href={project.link}>
                  <button className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition">
                    {project.buttonLabel}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
