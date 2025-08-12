import React from "react";
import { FaGraduationCap, FaLocationArrow } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";

export const Qualifications = () => {
  return (
    <>
      <div className="max-w-full text-center m-auto px-6 md:px-32">
        <h1 className="text-3xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
          Academic & Professional Qualifications
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
          Diploma in Computer Science and Engineering
        </h1>
        <a href="https://gpmkheri.com/" target="_blank">
          <p className="text-gray-400 mt-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <RiAwardFill className="text-cyan-400 text-lg" />
            <span>Government Polytechnic Mohammadi-Kheri</span>
            <i>(2022-25)</i>
          </p>
          <p className="text-gray-400 mb-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
            <MdOutlineLocationOn className="text-cyan-400" />
            <span>Lakhimpur, Uttar Pradesh</span>
          </p>
        </a>
        <p className="text-gray-400 ml-6">
          Specialized in Software Engineering with focus on web development,
          database systems, and software architecture. Graduated with honors..
        </p>

        <h1 className=" font-semibold mt-4">Key Achievements</h1>
        <ul className="list-disc ml-8 text-gray-400">
          <li>Dean's list</li>
          <li>Software Engineering Award</li>
          <li>Final Year Project Excellence</li>
        </ul>
      </div>

      <div className="w-full bg-white/10 rounded-lg p-4 my-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400 text-2xl" />
          XII & X Standard
        </h1>
        <p className="text-gray-400 my-2 flex flex-wrap items-center gap-2 ml-6 text-lg">
          <RiAwardFill className="text-cyan-400 text-lg" />
          <span>Janta Inter College Kalyanpur Sitapur</span>
          <i>(2020-22)</i>
        </p>
        <p className="text-gray-400 flex flex-wrap items-center gap-2 ml-6 text-lg">
          <MdOutlineLocationOn className="text-cyan-400" />
          <span>Sitapur, Uttar Pradesh</span>
        </p>{" "}
        <p className="text-gray-400 ml-6">
          Completed Higher Secondary Education with Science stream, focusing on
          Physics, Chemistry, and Mathematics, with a strong academic record and
          active participation in technical and analytical problem-solving
          activities.
        </p>
        <h1 className=" font-semibold mt-4">Key Achievements</h1>
        <ul className="list-disc ml-8 text-gray-400">
          <li>Teachers's list</li>
          <li>Scholarship</li>
          <li>Final Year Project Excellence</li>
        </ul>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 ">
        <div className="h-[200px] flex flex-col text-center justify-center bg-white/10 rounded-lg hover:border  hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h3 className="text-6xl font-bold text-cyan-400">8</h3>
          <h3 className="text-2xl font-semibold text-gray-400 ">Final CGPA</h3>
        </div>
        <div className="h-[200px] flex flex-col text-center justify-center bg-white/10 rounded-lg hover:border  hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
          <h3 className="text-6xl font-bold text-cyan-400">5+</h3>
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
