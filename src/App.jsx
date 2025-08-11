import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import { Summary } from "./pages/Summary";
import { Qualifications } from "./pages/Qualifications";
import { Skills } from "./pages/Skills";
import { Works } from "./pages/Works";
import { Certifications } from "./pages/Certifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Contact } from "./pages/Contact";
import { FaEnvelopeOpen, FaPhone } from "react-icons/fa6";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        
        {/* Top Navbar */}
        <div className=" flex items-center justify-between bg-gray-800 p-4 border-b border-cyan-400">
          <h1 className="text-xl font-semibold font-serif ms-4 md:ms-16 md:text-3xl text-cyan-400">IkrCodes</h1>
          <div className="hidden md:block mr-10 text-cyan-400">
            <h1 className="flex items-center space-x-4"><FaEnvelopeOpen /> <i>ikrcodes@gmail.com</i></h1>
            <h1 className="flex items-center space-x-4"><FaPhone/> <i>7007830887</i></h1>
          </div>
          <button
            className="md:hidden text-cyan-400 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}  />

          {/* Main Content */}
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Summary />} />
              <Route path="/qualifications" element={<Qualifications />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/works" element={<Works />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/get-in-touch" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
