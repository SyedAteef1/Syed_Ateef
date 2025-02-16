"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Database, Server, Globe, Cpu, BookOpen, ExternalLink } from 'lucide-react';
import mongoose from 'mongoose';
import Contact from './Contact';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    const innerfunction =async  ()=>{
      e.preventDefault();
    const created =await mod.create({name:name, email:email,message:message});
      created.save()
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    }
    innerfunction()
  };

  const skills = [
    { 
      name: 'Frontend Development', 
      icon: <Globe className="w-6 h-6" />, 
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Context API'] 
    },
    { 
      name: 'Backend Development', 
      icon: <Server className="w-6 h-6" />, 
      items: ['Node.js', 'Express.js', 'Django', 'PHP', 'RESTful APIs', 'Authentication & JWT'] 
    },
    { 
      name: 'Database Management', 
      icon: <Database className="w-6 h-6" />, 
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore', 'Database Optimization'] 
    },
    { 
      name: 'Programming', 
      icon: <Code2 className="w-6 h-6" />, 
      items: [  'JavaScript', 'Object-Oriented Programming (OOP)',"Go",'Rust',"TypeScript","Python"] 
    },
    { 
      name: 'Computer Science', 
      icon: <Cpu className="w-6 h-6" />, 
      items: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Compiler Design', 'Automata Theory'] 
    }
  ];
  

  const projects = [
    {
      title: 'ClyniCare - Affordable Healthcare by Students',
      description: 'A next-gen healthcare platform that connects paramedical and nursing students with patients for affordable home-based medical services and clinic visits.',
      tech: ['Next.js', 'React', 'MongoDB', 'Express.js', 'Node.js', 'REST API', 'Tailwind CSS'],
      image: 'https://media.istockphoto.com/id/2152985078/photo/senior-couple-medical-appointment.jpg?s=2048x2048&w=is&k=20&c=briWmqPjFcu7pI_bFLQP5_GSvOWJRcIogm14QZ5vCBA='
    },
    {
      title: 'Smart India Hackathon Project - Conveyor Belt Detection',
      description: 'An AI-powered automatic conveyor belt detection system with real-time traffic visualization and ML-powered accuracy improvements.',
      tech: ['Streamlit', 'Django', 'PHP', 'Machine Learning'],
      image: 'https://www.sih.gov.in/img1/logo/SIH_logo_2024_horizontal.png'
    },
    {
      title: 'Grocery Management & Recipe Generator',
      description: 'A web app that helps users manage groceries efficiently and suggests recipes based on available ingredients.',
      tech: ['React', 'JavaScript', 'API Integration'],
      image: 'https://plus.unsplash.com/premium_photo-1683121938935-118d0a16a469?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww'
    },
    {
      title: 'Facial Emotion Detection',
      description: 'A Computer Graphics project leveraging OpenCV for real-time facial emotion detection and sentiment analysis.',
      tech: ['Python', 'OpenCV', 'Machine Learning'],
      image: 'https://media.springernature.com/lw1200/springer-static/image/art%3A10.1007%2Fs11042-022-13558-9/MediaObjects/11042_2022_13558_Fig2_HTML.png'
    }
  ];
  

  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1),transparent)] animate-pulse"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <img
                src="/atf-removebg.png"
                alt="Syed Ateef"
                className="rounded-full w-full h-full object-cover shadow-2xl border-4 border-blue-500"
              />
              <motion.div 
                animate={{ 
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-blue-400 -m-4"
              ></motion.div>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Syed Ateef
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-200 mb-8"
          >
            Computer Science & Engineering Student
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/SyedAteef1" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/syed-ateef-quadri-v-4a55ab318/" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:vsyedateefquadri@gmail.com" className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all">
              <Mail className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">About Me</h2>
            <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-blue-900/50">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a 21-year-old Computer Science and Engineering student passionate about building innovative solutions 
                and exploring new technologies. With a strong foundation in both theoretical computer science and practical 
                software development, I'm constantly learning and growing in this ever-evolving field.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.05),transparent)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 shadow-xl border border-blue-900/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4 text-blue-400">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-2">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-blue-900/50 group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                <a href='http://clynicare.com/'>
                <h3 className="text-xl font-semibold mb-2 text-blue-400 flex items-center">
                    {project.title}
                    <ExternalLink className="w-4 h-4 ml-2 " href='http://clynicare.com/' />
                  </h3>
                </a>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-900/50 text-blue-200 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">Education</h2>
            <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-blue-900/50">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-200">Bachelor of Technology</h3>
                  <p className="text-blue-400">Computer Science and Engineering</p>
                </div>
              </div>
              <p className="text-gray-400">Currently Pursuing</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact></Contact>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-blue-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>© 2024 Syed Ateef. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;