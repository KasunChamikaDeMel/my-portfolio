import { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import GradientBackground from './animations/GradientBackground';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const projects = [{
    title: 'Portfolio Website',
    category: 'web',
    image: '/images/1.png',
    description: 'A portfolio website for Mr. Manura Aluthge, CEO of Sun and Moon (Pvt) Ltd.',
    technologies: ['React', 'Next.js'],
    liveLink: 'https://manuraaluthge.vercel.app',
    githubLink: 'https://github.com/KasunChamikaDeMel/portfolio-9'
  }, {
    title: 'Website Construction Company',
    category: 'web',
    image: '/images/2.png',
    description: 'Website for Shantharathna Constructions (Pvt) Ltd, showcasing their projects and services.',
    technologies: ['React', 'Next.js'],
    liveLink: 'https://shantharathnaconstructions.vercel.app',
    githubLink: 'https://github.com/KasunChamikaDeMel/shantharathna-constructions'
  }, {
    title: 'My Portfolio',
    category: 'web',
    image: '/images/4.png',
    description: 'My personal portfolio website, showcasing my skills, projects, and experiences.',
    technologies: ['Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    liveLink: 'https://kasunchamikademel.vercel.app',
    githubLink: 'https://github.com/KasunChamikaDeMel/my-portfolio'
  }, {
    title: 'NIC Decoder App',
    category: 'app',
    image: '/images/3.png',
    description: 'A mobile app to decode National Identity Cards (NIC) in Sri Lanka, providing user-friendly access to personal information.',
    technologies: ['C++'],
    liveLink: '#',
    githubLink: 'https://github.com/KasunChamikaDeMel/nic_decorder_app0'
  }, {
    title: 'Network Intrusion Detection System',
    category: 'app',
    image: '',
    description: 'A system to detect and prevent unauthorized access to computer networks, enhancing security protocols.',
    technologies: ['Jupyter Notebook', 'Python', 'Flask', 'Machine Learning', 'HTML', 'CSS'],
    liveLink: '#',
    githubLink: 'https://github.com/KasunChamikaDeMel/Network-Intrusion-System-1'
  }, {
    title: 'Moodmate',
    category: 'app',
    image: '',
    description: 'A mental health app designed to help users track their mood, and provide real-time support through virtual pets.',
    technologies: ['Jupyter Notebook', 'Python', 'Machine Learning'],
    liveLink: '#',
    githubLink: 'https://github.com/KasunChamikaDeMel/Moodmate'
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