import React from "react";
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <section id="contact" 
    className="py-20 bg-gray-800 text-center">
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.2}}
      viewport={{once:true}}
      className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Have a project in mind? Let's discuss how we can work together.</p>
        <a
          href="mailto:vsyedateefquadri@gmail.com"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
