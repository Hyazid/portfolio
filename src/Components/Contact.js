import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-[#050513] via-[#0a0a2b] to-[#050513] p-6 text-gray-300"
    >
      <div className="w-full max-w-2xl bg-[#0a0a2b]/70 backdrop-blur-lg shadow-2xl rounded-xl p-8 md:p-12 animate-fadeIn space-y-10">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-pink-400">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="space-y-6 text-lg md:text-xl text-gray-300">
          <div className="flex items-center gap-4">
            <HiMail className="text-pink-400 text-2xl" />
            <span>yazid.hanniche.me@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <HiPhone className="text-pink-400 text-2xl" />
            <span>+213 (772)598101</span>
          </div>
          <div className="flex items-center gap-4">
            <HiLocationMarker className="text-pink-400 text-2xl" />
            <span>Algerie</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-pink-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-pink-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-pink-400 transition text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
