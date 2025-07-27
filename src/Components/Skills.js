import React from 'react';
import html from '../assets/htmll.png';
import js from '../assets/R.png';
import php from '../assets/php.png';
import rct from '../assets/react.png';
import jv from '../assets/jv.png';
import python from '../assets/python.png';
import tensor from '../assets/tensor.png';
import mysql from '../assets/mysql.png';
import lara from '../assets/laravel.png';
import blender from '../assets/Blenderr.png';
import unr from '../assets/unr.png';
import wordpress from '../assets/word.png';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'JavaScript', icon: js },
  { name: 'PHP', icon: php },
  { name: 'React', icon: rct },
  { name: 'Java', icon: jv },
  { name: 'Python', icon: python },
  { name: 'Laravel', icon: lara },
  { name: 'MySQL', icon: mysql },
  { name: 'TensorFlow', icon: tensor },
  { name: 'Unreal Engine', icon: unr },
  { name: 'Blender', icon: blender },
  { name: 'WordPress', icon: wordpress },
];

function Skills() {
  return (
    <div
      name="Skills"
      className="w-full min-h-screen bg-gradient-to-b from-[#050513] via-[#0a0a2b] to-[#050513] text-gray-300 py-16 flex justify-center items-center"
    >
      <div className="w-11/12 max-w-6xl bg-[#0a0a2b]/70 backdrop-blur-md rounded-xl shadow-lg p-10 md:p-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 border-b-4 border-t-4 border-cyan-500 inline-block pb-2">
            Skills
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light">
            Here's some of the technologies I've worked with:
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4 drop-shadow-lg"
              />
              <p className="text-base md:text-lg font-semibold text-gray-200 group-hover:text-cyan-400">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
