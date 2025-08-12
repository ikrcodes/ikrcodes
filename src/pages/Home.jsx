import React from "react";

import profile from "../img/profile-photo.png";
import { FiDownload } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 overflow-x-auto ">
        <div className=" md:mt-16 mt-10">
          <h1 className="text-5xl md:text-6xl font-bold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
            Ikrar Ahmad
          </h1>
          <div className="mt-2 h-[6px] w-[100px] bg-cyan-400 rounded-md"></div>
          <h3 className="text-2xl my-2 text-gray-400">
            Full Stack Web Developer
          </h3>
          <p className="text-[18px] p-2 text-gray-400">
            passioniate about creating robust, scalable, and dynamic web
            applications using{" "}
            <span className="text-cyan-400">ASP.NET MVC</span> framework. Also
            proficient in frontend technologies like{" "}
            <i className="text-cyan-400">React JS </i>and{" "}
            <i className="text-cyan-400"> Talwind CSS</i>...
          </p>
          <br />
          <p className="text-xl text-cyan-400">
            <i>
              " transform your ideas into powerfull digital solutions that drive
              business growth."
            </i>
          </p>
          <div className="button-section flex gap-10 my-8">
            <a href="/get-in-touch"><button className="flex items-center gap-2 border-2 border-cyan-400  px-6  py-2 bg-cyan-400  text-gray-900 rounded-lg hover:bg-transparent hover:text-cyan-400 hover:shadow-sm hover:shadow-cyan-400 transition-all duration-300">
              <FaRegEnvelope className="text-lg" />
              <span>Get In Touch</span>
            </button>
            </a>
            <a href="../../public/content/IkrarsCV.pdf" download="IkrarsCV.pdf">
              <button  className="flex items-center gap-2 border-2 border-cyan-400  px-6  py-2 bg-transparent  text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 hover:shadow-sm hover:shadow-cyan-400 transition-all duration-300">
              <FiDownload className="text-lg" />
              <span>Download CV</span>
            </button>
            </a>
          </div>
        </div>
        <div className="md:mt-16 py-10">
          <img
            src={profile}
            alt="Profile"
            className="h-[350px] w-[350px] md:h-[350px] md:w-[350px] mx-auto rounded-full shadow-[0_0_25px_rgba(34,211,238,0.7)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)] hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
