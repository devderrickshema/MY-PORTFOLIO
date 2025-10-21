'use client';

import React, { useState, useEffect } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize dark mode on client side
  useEffect(() => {
    setIsMounted(true);
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle theme change
  useEffect(() => {
    if (!isMounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isMounted]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900"></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-8 mx-auto w-48 h-48 relative overflow-hidden rounded-full border-4 border-emerald-500 shadow-xl">
            <Image
              src="/facecard.jpg"
              alt="SHEMA Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-emerald-600 dark:text-emerald-400">Hello, I&apos;m</span> SHEMA
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            A passionate Full Stack Developer with expertise in React, Next.js, and Java. 
            I build modern web applications with clean code, responsive design, and seamless user experiences.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Link 
              href="https://github.com/devderrickshema" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </Link>
            <Link 
              href="https://linkedin.com/in/shederrick03"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </Link>
            <Link 
              href="mailto:shederrick03@gmail.com" 
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
              aria-label="Email"
            >
              <FiMail size={24} />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 font-medium rounded-lg border border-emerald-600 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('highlights')}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg focus:outline-none transition-transform hover:scale-110"
            aria-label="Scroll down"
          >
            <FiArrowDown className="text-emerald-600 dark:text-emerald-400" size={24} />
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              My <span className="text-emerald-600 dark:text-emerald-400">Expertise</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the areas I specialize in, combining both design and technical skills.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive and interactive UIs with React, Next.js, and Tailwind CSS.',
                icon: '💻'
              },
              {
                title: 'Backend Development',
                description: 'Creating robust server-side applications with Java, Spring, and RESTful APIs.',
                icon: '⚙️'
              },
              {
                title: 'Web Design',
                description: 'Designing modern, user-friendly interfaces with a focus on accessibility and user experience.',
                icon: '🎨'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 bg-emerald-100 dark:bg-emerald-900/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Interested in working together?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help you achieve your goals with my technical expertise and creative problem-solving skills.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100 transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
