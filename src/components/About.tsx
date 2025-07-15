import { CodeIcon, BriefcaseIcon, BookOpenIcon } from 'lucide-react';


const About = () => {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-2 text-gray-700">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get to know me and my journey in the world of software engineering
            and designing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="relative">
              <div className="w-96 h-120 bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                <img src="/images/pro.png" alt="Kasun Chamika - Software Engineer" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Software Engineer | Web Developer | UI/UX Designer
            </h3>

            <p className="text-gray-700 mb-6">
              I'm Kasun Chamika, a passionate software engineer with expertise
              in both frontend and backend development. I enjoy creating
              elegant, efficient solutions to complex problems and delivering
              high-quality applications using technologies like React, Next.js, Node.js, and Tailwind CSS.
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
                    BSc (Hons) in Computer Science and Software Engineering at SLTC Research University, Meepe, Padukka, Sri Lanka.
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
                    Frontend development, Backend Development, UI/UX design, and system architecture.
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all inline-block hover:shadow-lg hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;