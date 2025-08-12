import React from "react";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";

export const Certifications = () => {
  return (
    <>
      <div className="max-w-full text-center m-auto px-6 md:px-32">
        <h1 className="text-3xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
          Professional Certifcates
        </h1>
        <hr className="bg-cyan-400 h-1 rounded-lg w-[100px] md:w-[100px] m-auto mt-3" />
        <p className="my-6 text-lg text-gray-400">
          My academic journey and professional certifications that shaped my
          expertise in full-stack development
        </p>
      </div>
      <HiOutlineDotsHorizontal className="max-w-full text-5xl mx-auto text-cyan-400 " />
      <div className="w-full bg-white/10 rounded-lg p-4 my-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400 text-2xl" />
          ASP.NET Certificates
        </h1>
        <a href="https://apinfotech.org/" target="_blank">
          <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <RiAwardFill className="text-lg text-cyan-400"/>
            <span>Arcane Programming infotech pvt. ltd.</span>
            <i>(2025)</i>
          </p>
          <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <MdOutlineLocationOn className="text-lg text-cyan-400"/> 
            <span>Lucknow,Uttar Pradesh.</span>
          </p>
        </a>
        <p className="text-gray-400 ml-6">
          Advanced certification in ASP.NET Core development, covering MVC, Web
          APIs, Entity Framework, and cloud deployment.
        </p>

        <h1 className=" font-semibold mt-4">Key Achievements</h1>
        <ul className="list-disc ml-8 text-gray-400">
          <li>Project Of the Batch Award</li>
          <li>Software Engineering Award</li>
          <li>Project Excellence</li>
        </ul>
      </div>
      <div className="w-full bg-white/10 rounded-lg p-4 my-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400 text-2xl" />
          Summer Internship <i>(45 Days)</i> 2024
        </h1>
        <a href="https://apinfotech.org/" target="_blank">
          <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <RiAwardFill className="text-lg text-cyan-400"/>
            <span>Arcane Programming infotech pvt. ltd.</span>
            <i>(2024)</i>
          </p>
          <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <MdOutlineLocationOn className="text-lg text-cyan-400"/> 
            <span>Lucknow,Uttar Pradesh.</span>
          </p>
        </a>
        <p className="text-gray-400 ml-6">
          Completed a 45-day summer internship, gaining practical exposure to
          real-world projects, enhancing technical skills, and applying
          theoretical knowledge to industry-relevant solutions.
        </p>

        <h1 className=" font-semibold mt-4">Key Achievements</h1>
        <ul className="list-disc ml-8 text-gray-400">
          <li>Learn Technologies</li>
          <li>Build Projects</li>
        </ul>
      </div>
      <div className="w-full bg-white/10 rounded-lg p-4 my-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400 text-2xl" />
          Summer Internship <i>(45 Days)</i> 2023
        </h1>
        <a href="https://apinfotech.org/" target="_blank">
          <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <RiAwardFill className="text-lg text-cyan-400"/>
            <span>Arcane Programming infotech pvt. ltd.</span>
            <i>(2023)</i>
          </p>
          <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <MdOutlineLocationOn className="text-lg text-cyan-400"/> 
            <span>Lucknow,Uttar Pradesh.</span>
          </p>
        </a>
        <p className="text-gray-400 ml-6">
          Completed a 45-day summer internship, gaining practical exposure to
          real-world projects, enhancing technical skills, and applying
          theoretical knowledge to industry-relevant solutions.
        </p>

        <h1 className=" font-semibold mt-4">Key Achievements</h1>
        <ul className="list-disc ml-8 text-gray-400">
          <li>Learn Technologies</li>
          <li>Build Projects</li>
        </ul>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 ">
        <div className="h-[200px] flex flex-col text-center justify-center bg-white/10 rounded-lg hover:border  hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h3 className="text-6xl font-bold text-cyan-400">10+</h3>
          <h3 className="text-2xl font-semibold text-gray-400 ">Projects</h3>
        </div>
        <div className="h-[200px] flex flex-col text-center justify-center bg-white/10 rounded-lg hover:border  hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h3 className="text-6xl font-bold text-cyan-400">3+</h3>
          <h3 className="text-2xl font-semibold text-gray-400 ">
            Certificates
          </h3>
        </div>
        <div className="h-[200px] flex flex-col text-center justify-center bg-white/10 rounded-lg hover:border  hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h3 className="text-6xl font-bold text-cyan-400">3+</h3>
          <h3 className="text-2xl font-semibold text-gray-400 ">Awards</h3>
        </div>
      </div>
    </>
  );
};
