import React from 'react';
import { CodeIcon, BriefcaseIcon, BookOpenIcon } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get to know me and my journey in the world of software engineering
            and design.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              <div className="w-full h-96 bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80" alt="Kasun Chamika - Software Engineer" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg" data-aos="fade-up" data-aos-delay="200"></div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Software Engineer & Web Developer
            </h3>
            <p className="text-gray-700 mb-6">
              I'm Kasun Chamika, a passionate software engineer with expertise
              in both frontend and backend development. I enjoy creating
              elegant, efficient solutions to complex problems and delivering
              high-quality applications.
            </p>
            <p className="text-gray-700 mb-6">
              With a strong foundation in computer science and a keen eye for
              design, I bridge the gap between functionality and aesthetics to
              create seamless user experiences.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="p-2 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200">
                  <CodeIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Development Experience
                  </h4>
                  <p className="text-gray-700">
                    Full-stack web development with modern technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                <div className="p-2 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200">
                  <BookOpenIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Education</h4>
                  <p className="text-gray-700">
                    Bachelor's Degree from SLTC Research University, Padukka
                  </p>
                </div>
              </div>
              <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                <div className="p-2 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200">
                  <BriefcaseIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Professional Focus
                  </h4>
                  <p className="text-gray-700">
                    Website development, UI/UX design, and system architecture
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all inline-block hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;