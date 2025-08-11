import React from 'react'
import { FiServer } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { LuDatabase } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export const Summary = () => {
  return (
    <>
    <div className='max-w-full text-center m-auto px-6 md:px-32'>
      <h1 className='text-3xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent'>About Me</h1>
      <hr className='bg-cyan-400 h-1 rounded-lg w-[100px] md:w-[100px] m-auto mt-3'/>
      <p className='my-6 text-lg text-gray-400'>With a passion for clean code and scalable solutions, I specialize in building robust web applications that solve real-world problems. My expertise spans the entire development stack, with a particular focus on <span className='text-cyan-400'>ASP.NET</span> technologies and modern web development practices...</p>
    </div>
    <HiOutlineDotsHorizontal className='w-full text-5xl mx-auto text-cyan-400 '/>
    <div className='max-w-full mx-auto  grid grid-cols-2  md:grid-cols-4 gap-4 px-4 my-6 '>
      <div className='mx-auto w-full text-center border border-gray-500 rounded-lg p-4 flex flex-col items-center bg-white/10  shadow-lg hover:shadow-lg hover:shadow-cyan-400 transition-all ease-linear duration-300'>
        <FiServer className='text-2xl text-cyan-400 '/>
        <h1 className='text-[16px] font-semibold my-2 '>Backend Development</h1>
        <p className='text-gray-400 mt-1'>Expert in ASP.NET Core MVC, Web APIs, and microservices architecture</p>
      </div>

      <div className='mx-auto w-full text-center border border-gray-500 rounded-lg p-4 flex flex-col items-center bg-white/10  hover:shadow-lg hover:shadow-cyan-400 transition-all ease-linear duration-300'>
        <FaCode className='text-2xl text-cyan-400 '/>
        <h1 className='text-[16px] font-semibold my-2 '>Frontend Development</h1>
        <p className='text-gray-400 mt-1'> Modern React, JavaScript, and responsive web applications</p>
      </div>

      <div className='mx-auto w-full text-center border border-gray-500 rounded-lg p-4 flex flex-col items-center bg-white/10  shadow-lg hover:shadow-lg hover:shadow-cyan-400 transition-all ease-linear duration-300'>
        <LuDatabase className='text-2xl text-cyan-400 '/>
        <h1 className='text-[16px] font-semibold my-2 '>Database Design</h1>
        <p className='text-gray-400 mt-1'>Expert in SQL Server, Entity Framework, and optimized data solutions</p>
      </div>

      <div className='mx-auto w-full text-center border border-gray-500 rounded-lg p-4 flex flex-col items-center bg-white/10  shadow-lg hover:shadow-lg hover:shadow-cyan-400 transition-all ease-linear duration-300'>
        <FaLaptopCode className='text-2xl text-cyan-400 '/>
        <h1 className='text-[16px] font-semibold my-2 '>Full stack Solutions</h1>
        <p className='text-gray-400 mt-1'>End-to-end application development and deployment</p>
      </div>
    </div>

    <div className='max-w-full mx-4   px-4 my-10 border border-gray-500 rounded-lg p-4  bg-white/10  grid grid-cols-1 md:grid-cols-2  '>
      <div className='p-2 '>
        <h1 className='text-3xl  font-bold '>My Journey...</h1>
        <p className='text-gray-400 mt-2 '>Started my development journey with a strong foundation in computer science and quickly fell in love with the power of ASP.NET for building enterprise-level applications.</p>
        <p className='text-gray-400 mt-3'>Over the years, I've evolved into a full-stack developer, combining backend expertise with modern frontend technologies to deliver complete, user-centric solutions.</p>
      </div>
      <div className='grid grid-cols-2  gap-4'>
      <div className='rounded-md bg-cyan-400/10 border border-md border-gray-300 text-center space-y-2 hover:shadow-md hover:shadow-cyan-400 transition-all ease-in duration-300'>
          <h1 className='mt-4 text-3xl font-bold text-cyan-400'>3+</h1>
          <h3>Years Of Experience</h3>
        </div>
        <div className='rounded-md bg-cyan-400/10 border border-md border-gray-300 text-center space-y-2 hover:shadow-md hover:shadow-cyan-400 transition-all ease-in duration-300'>
          <h1 className='mt-4 text-3xl font-bold text-cyan-400'>20+</h1>
          <h3>Projects Completed</h3>
        </div>
        <div className='rounded-md bg-cyan-400/10 border border-md border-gray-300 text-center space-y-2 hover:shadow-md hover:shadow-cyan-400 transition-all ease-in duration-300'>
          <h1 className='mt-4 text-3xl font-bold text-cyan-400'>10+</h1>
          <h3>Technologies Known</h3>
        </div>
        <div className='rounded-md bg-cyan-400/10 border border-md border-gray-300 text-center space-y-2 hover:shadow-md hover:shadow-cyan-400 transition-all ease-in duration-300'>
          <h1 className='mt-4 text-3xl font-bold text-cyan-400'>100%</h1>
          <h3>Client Satisfaction</h3>
        </div>
      </div>
      
    </div>
    </>
  )
}
