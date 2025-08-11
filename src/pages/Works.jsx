import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

// ...existing code...
export const Works = () => {
  return (
    <>
      <div className="max-w-full text-center m-auto px-6 md:px-32">
        <h1 className="text-3xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <hr className="bg-cyan-400 h-1 rounded-lg w-[100px] md:w-[100px] m-auto mt-3" />
        <p className="my-6 text-lg text-gray-400">
          A showcase of my work demonstrating expertise in full-stack
          development, from enterprise applications to modern web solutions.
        </p>
      </div>
      <HiOutlineDotsHorizontal className="w-full text-5xl mx-auto text-cyan-400 " />
      <div className="max-w-full grid md:grid-cols-2 grid-cols-1 gap-8 p-4 ">
        <div className=" bg-white/10 rounded-lg p-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h1 className="text-xl font-semibold">
            ZOMART: Online Grocery Store
          </h1>
          <hr className="h-[1px] bg-cyan-400 w-[75%]" />
          <p className="text-gray-400 my-2">
            Full-stack e-commerce solution For Grocery Store built with ASP.NET
            MVC archtecture. Features include user authentication, payment
            processing, and admin dashboard.
          </p>
          <div className="w-full ">
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              HTML5
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              CSS3
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              Bootstrap5
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              Javascript
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              JQuery
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              SQL Server
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              ASP.NET MVC
            </button>
          </div>
          <div className="my-2 flex gap-4 ">
            <a href="">
              <button className="flex items-center gap-2 border-2 border-cyan-400  px-4 py-1 bg-cyan-400  text-gray-900 rounded-lg  hover:scale-105 transition-all duration-300">
                <FiExternalLink className="text-lg" />
                <span>Live Demo</span>
              </button>
            </a>
            <a href="https://github.com/ikrcodes/Zomart" target="_blank">
              <button className="flex items-center gap-2 border-2 border-cyan-400  px-4 py-1 bg-transparent  text-cyan-400 rounded-lg  hover:scale-105 transition-all duration-300">
                <FaGithub className="text-lg" />
                <span>Source</span>
              </button>
            </a>
          </div>
        </div>

        <div className=" bg-white/10 rounded-lg p-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h1 className="text-xl font-semibold">
            DOZECAFE: Cafe Management System
          </h1>
          <hr className="h-[1px] bg-cyan-400 w-[75%]" />
          <p className="text-gray-400 my-2">
            Full-stack e-commerce solution For Cafe and restaurant management
            built with ASP.NET MVC archtecture. Features include user
            authentication, payment processing, and admin dashboard.
          </p>
          <div className="w-full ">
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              HTML5
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              CSS3
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              Bootstrap5
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              Javascript
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              JQuery
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              SQL Server
            </button>
            <button className="border text-[12px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">
              ASP.NET MVC
            </button>
          </div>
          <div className="my-2 flex gap-4 ">
            <a href="">
              <button className="flex items-center gap-2 border-2 border-cyan-400  px-4 py-1 bg-cyan-400  text-gray-900 rounded-lg  hover:scale-105 transition-all duration-300">
                <FiExternalLink className="text-lg" />
                <span>Live Demo</span>
              </button>
            </a>
            <a href="https://github.com/ikrcodes/dozecafe" target="_blank">
              <button className="flex items-center gap-2 border-2 border-cyan-400  px-4 py-1 bg-transparent  text-cyan-400 rounded-lg  hover:scale-105 transition-all duration-300">
                <FaGithub className="text-lg" />
                <span>Source</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
