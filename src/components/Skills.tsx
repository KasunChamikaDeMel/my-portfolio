import React from 'react';
import { CodeIcon, LayoutIcon, ServerIcon, DatabaseIcon, PenToolIcon, GitBranchIcon } from 'lucide-react';
import MovingGridBackground from './animations/MovingGridBackground';
const Skills = () => {
  const skillCategories = [{
    title: 'Frontend Development',
    icon: <LayoutIcon size={28} className="text-blue-600" />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'SASS']
  }, {
    title: 'Backend Development',
    icon: <ServerIcon size={28} className="text-blue-600" />,
    skills: ['Node.js', 'Express', 'PHP', 'Java', 'Python', 'RESTful APIs', 'GraphQL']
  }, {
    title: 'Database',
    icon: <DatabaseIcon size={28} className="text-blue-600" />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis']
  }, {
    title: 'Design',
    icon: <PenToolIcon size={28} className="text-blue-600" />,
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design', 'Wireframing']
  }, {
    title: 'Programming',
    icon: <CodeIcon size={28} className="text-blue-600" />,
    skills: ['TypeScript', 'Java', 'Python', 'C++', 'OOP', 'Data Structures', 'Algorithms']
  }, {
    title: 'Tools & Others',
    icon: <GitBranchIcon size={28} className="text-blue-600" />,
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Agile', 'JIRA', 'Testing']
  }];
  return <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MovingGridBackground />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of
            expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 backdrop-blur-sm bg-opacity-80" data-aos="flip-up" data-aos-delay={index * 100} data-aos-duration="800">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200 hover:rotate-12 duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm transition-all hover:bg-blue-100 hover:text-blue-700 cursor-default">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;