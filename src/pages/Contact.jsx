
import emailjs from "emailjs-com";
import React, { useRef } from 'react'
import { FaEnvelopeOpen, FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
// ...existing code...
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_u183jp1",      // Service ID
      "template_8lh8ten",     // Template ID
      form.current,           // Form reference
      "VV1OeVn4JkDBs0w3P"       // Public Key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Failed to send message, try again!");
        console.log(error.text);
      }
    );
  };

  return (
    <>
    <h1 className="text-center text-3xl md:text-5xl font-semibold font-sans bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <hr className="bg-cyan-400 h-1 rounded-lg w-[100px] md:w-[100px] m-auto mt-3" />
            <p className="text-center my-4 text-lg text-gray-400">
I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to chat about technology, feel free to reach out.
   </p>
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white/10">
<div className="flex justify-center items-center text-2xl ">
    <div className="hidden md:block mr-10 text-cyan-400">
                <h1 className="flex items-center space-x-4 my-8"><FaEnvelopeOpen /> <i>ikrcodes@gmail.com</i></h1>
                <h1 className="flex items-center space-x-4 my-8"><FaPhone/> <i>7007830887</i></h1>
                <h1 className="flex items-center space-x-4 my-8"><IoLocationSharp/> <i>Lucknow, Uttar Pradesh, India.</i></h1>
              </div>
</div>

        <div className="max-w-md mx-auto shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border-2 bg-transparent border-gray-300  hover:border-cyan-400  rounded px-3 py-2"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full border-2 bg-transparent border-gray-300  hover:border-cyan-400  rounded px-3 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border-2 bg-transparent border-gray-300  hover:border-cyan-400  rounded px-3 py-2"
          rows="5"
          
          required
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
    </>
  );
}
