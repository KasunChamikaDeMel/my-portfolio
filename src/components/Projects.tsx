import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import GradientBackground from './animations/GradientBackground';
const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = [{
    title: 'E-commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A full-featured e-commerce platform with product management, cart, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Task Management App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    description: 'A productivity app for managing tasks, projects, and team collaboration.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Portfolio Website',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1455&q=80',
    description: 'A responsive portfolio website with modern design and animations.',
    technologies: ['HTML', 'SASS', 'JavaScript', 'AOS'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Real Estate Listing',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    description: 'A real estate platform for property listings, search, and inquiries.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MapBox'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Health & Fitness App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    description: 'A health tracking app with workout plans, nutrition tracking, and progress monitoring.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Corporate Website Redesign',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    description: 'A complete redesign of a corporate website with improved UX and modern aesthetics.',
    technologies: ['Figma', 'Adobe XD', 'HTML', 'CSS'],
    liveLink: '#',
    githubLink: '#'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A showcase of my recent work, projects, and design explorations.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center" data-aos="zoom-in" data-aos-duration="600">
            <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-blue-600 text-white scale-105' : 'bg-white hover:bg-gray-100 text-gray-800 hover:-translate-y-1 hover:shadow-md'}`}>
              All
            </button>
            <button onClick={() => setFilter('web')} className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'web' ? 'bg-blue-600 text-white scale-105' : 'bg-white hover:bg-gray-100 text-gray-800 hover:-translate-y-1 hover:shadow-md'}`}>
              Web Development
            </button>
            <button onClick={() => setFilter('app')} className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'app' ? 'bg-blue-600 text-white scale-105' : 'bg-white hover:bg-gray-100 text-gray-800 hover:-translate-y-1 hover:shadow-md'}`}>
              App Development
            </button>
            <button onClick={() => setFilter('design')} className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'design' ? 'bg-blue-600 text-white scale-105' : 'bg-white hover:bg-gray-100 text-gray-800 hover:-translate-y-1 hover:shadow-md'}`}>
              Design
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm bg-opacity-90" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="800">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs transition-all hover:bg-blue-200">
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between">
                  <a href={project.liveLink} className="flex items-center text-blue-600 hover:text-blue-800 transition-all group" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={16} className="mr-1 transition-transform group-hover:translate-x-1" />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center text-gray-800 hover:text-gray-900 transition-all group" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={16} className="mr-1 transition-transform group-hover:rotate-12" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;