import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../img/profile-photo.png";
import {
  faInstagram,
  faLinkedin,
  faServicestack,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileLines,
  faLightbulb,
  faGraduationCap,
  faAward,
  faLaptopCode,
  faTrophy,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 max-h-full w-[75%] max-w-[250px] bg-gray-900 border-r-2 border-cyan-400 p-5 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:max-w-[22%] md:p-5
        transition-transform duration-300 ease-in-out overflow-x-auto `}
    >
      {/* Profile Section */}
      <div className="text-center ">
        <img
          src={profile}
          alt="Profile"
          className="h-[120px] w-[120px] mx-auto rounded-full border-4 border-cyan-400 hover:shadow-lg transition-all duration-300"
        />
        <h1 className="text-cyan-400 text-[25px] mt-1">Ikrar Ahmad</h1>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-1 text-cyan-400">
  {[
    { icon: faLinkedin, link: "https://www.linkedin.com/in/ikrar-ahmad-7881a02a2" },
    { icon: faGithub, link: "https://github.com/ikrcodes" },
    { icon: faInstagram, link: "https://www.instagram.com/iamikrarr?igsh=cmo4MmJzaGh5dmI3" },
    { icon: faXTwitter, link: "" }
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-3 rounded-full text-[20px] hover:shadow-md hover:shadow-cyan-400 transition-all duration-300"
    >
      <FontAwesomeIcon icon={item.icon} />
    </a>
  ))}
</div>

      </div>

      <hr className="bg-cyan-400 h-[2px] max-w-[90%] mx-auto" />

      {/* Navigation Links */}
      <ul className="mt-2  text-lg text-gray-300">
        {[
          { icon: faFileLines, text: "Home", link: "/" },
          { icon: faFileLines, text: "About me", link: "/about" },
          { icon: faGraduationCap, text: "Qualification", link: "/qualifications" },
          { icon: faLightbulb, text: "Skills", link: "/skills" },
          { icon: faLaptopCode, text: "Works on", link: "/works" },
          { icon: faAward, text: "Certifications", link: "/certifications" },
          { icon: faEnvelope, text: "Get in Touch", link: "/get-in-touch" },
        ].map((item, i) => (
          <li
            key={i}
            className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 py-2 space-x-4"
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3" />
            <a href={item.link} onClick={() => setIsOpen(false)}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
