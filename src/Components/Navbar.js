import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About' },
    { id: 'Skills', label: 'Skills' },
    { id: 'Work', label: 'Work' },
    { id: 'Contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/yazid-hanniche-4b7443213',
      label: 'LinkedIn',
      icon: <FaLinkedin size={30} />,
      bg: 'bg-blue-600',
    },
    {
      href: 'https://github.com/Hyazid',
      label: 'GitHub',
      icon: <FaGithub size={30} />,
      bg: 'bg-[#333333]',
    },
    {
      href: 'mailto:yazid.hanniche.me@gmail.com',
      label: 'Email',
      icon: <HiOutlineMail size={30} />,
      bg: 'bg-[#6fc2b0]',
    },
    {
      href: '/resume.pdf',
      label: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      bg: 'bg-[#565f69]',
    },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center w-full h-20 px-6 md:px-12 bg-gradient-to-r from-[#0a0a2b] to-[#050513]/80 backdrop-blur-lg">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-cyan-400 italic font-serif">
            Yazid.dev
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-gray-300 hover:text-cyan-400 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            >
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden text-gray-300 cursor-pointer z-50"
        >
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#050513] via-[#0a0a2b] to-[#050513] flex flex-col justify-center items-center transform transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="py-6 text-4xl text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            <Link
              onClick={handleClick}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map((social, index) => (
            <li
              key={index}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.bg}`}
            >
              <a
                href={social.href}
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noreferrer"
              >
                {social.label} {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
