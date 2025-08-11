import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const Skills = () => {
  return (
    <>
      <div className="max-w-full text-center m-auto px-6 md:px-32">
        <h1 className="text-3xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <hr className="bg-cyan-400 h-1 rounded-lg w-[100px] md:w-[100px] m-auto mt-3" />
        <p className="my-6 text-lg text-gray-400">
          A comprehensive toolkit of modern technologies and frameworks, with
          expertise in both frontend and backend development, focused on
          creating scalable and maintainable solutions. Backend Technologies
          ASP.NET Core C# Web API Entity Framework SignalR Azure Frontend
          Technologies
        </p>
      </div>
      <HiOutlineDotsHorizontal className="w-full text-5xl mx-auto text-cyan-400 " />
      <div className="max-w-full grid md:grid-cols-2 grid-cols-1 gap-8 p-4 ">
        <div className="bg-white/10 rounded-lg p-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold">Frontend Technologies</h1>
        <div className="w-full ">
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> React</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Javascript</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> HTML5</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> CSS3</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Bootstrap</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Talwind</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> JQuery</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Ajax</button>
        </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold">Backend Technologies</h1>
        <div className="w-full ">
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> ASP.NET Core</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> C#</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">Web API</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Entity Framework</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> PHP</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Node JS</button>
        </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold">Database & Tools</h1>
        <div className="w-full ">
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> SQL Server</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> MySQL</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Git & Github</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Visual Studio</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2">Postman</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Docker</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> AI Tools</button>
        </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4 hover:border hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400 transition-all duration-300 ">
        <h1 className="text-xl font-semibold">Architecture & Patterns</h1>
        <div className="w-full ">
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> MVC</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Clean Architecture</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Solid Principles</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Microservices</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> Rest APIs</button>
          <button className="border-[2px] border-cyan-400  rounded-3xl px-4 py-1 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 mx-2 my-2"> CRUD Operations</button>
        </div>
        </div>
      </div>
    </>
  );
};
