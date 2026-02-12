'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, payment processing, and user authentication.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    image: '/ecommerce.png',
    demoLink: 'https://example.com/demo1',
    githubLink: 'https://github.com/username/project1'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team assignment, and progress tracking.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    image: '/task management app image.png',
    demoLink: 'https://example.com/demo2',
    githubLink: 'https://github.com/username/project2'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple locations using weather API data.',
    technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
    image: '/weather app image.png',
    demoLink: 'https://example.com/demo3',
    githubLink: 'https://github.com/username/project3'
  },
  {
    id: 4,
    title: 'Expense Tracker System',
    description: 'A web-based expense tracker application that helps users manage their income, expenses, and budgets effectively, with features like user registration, transaction logging, and financial reports',
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: '/expensetracker.png',
    demoLink: 'https://financetracking.page.gd/',
    githubLink: 'https://github.com/devderrckshema/Expense-Tracker-System'
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Here&apos;s a selection of my recent work that showcases my skills and passion for building exceptional web applications.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                <Image
                  src={projects[0].image || '/project-placeholder-1.jpg'}
                  alt={projects[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {projects[0].title}
                  </h2>
                  <div className="flex space-x-3">
                    <Link 
                      href={projects[0].githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={20} />
                    </Link>
                    <Link 
                      href={projects[0].demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={20} />
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href="/register"
                    className="inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    View Registration Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <Image
                  src={project.image || `/project-placeholder-${index+2}.jpg`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <Link 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={18} />
                    </Link>
                    <Link 
                      href={project.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={18} />
                    </Link>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Interested in seeing how I build a registration form? Check out my live demo:
          </p>
          <Link
            href="/register"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Go to Registration Form
          </Link>
        </motion.div>
      </div>
    </div>
  );
}