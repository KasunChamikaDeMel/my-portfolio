import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
import WaveBackground from './animations/WaveBackground';
const Contact = () => {
  return <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <WaveBackground />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="p-3 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200 hover:scale-110">
                  <MapPinIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-700">Padukka, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start" data-aos="zoom-in" data-aos-delay="200">
                <div className="p-3 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200 hover:scale-110">
                  <MailIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-700">kasun.chamika@example.com</p>
                </div>
              </div>
              <div className="flex items-start" data-aos="zoom-in" data-aos-delay="300">
                <div className="p-3 bg-blue-100 rounded-full mr-4 transition-all hover:bg-blue-200 hover:scale-110">
                  <PhoneIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-700">+94 71 234 5678</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-opacity-90" data-aos="fade-up" data-aos-delay="400">
              <h4 className="font-bold text-lg mb-4 text-gray-900">
                Let's discuss your project
              </h4>
              <p className="text-gray-700 mb-4">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>
              <a href="mailto:kasun.chamika@example.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all inline-flex items-center hover:shadow-lg group">
                <MailIcon size={16} className="mr-2 transition-transform group-hover:scale-110" />
                Send me an email
              </a>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <form className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:shadow-xl backdrop-blur-sm bg-opacity-90">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Send Me a Message
              </h3>
              <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                  Your Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="John Doe" />
              </div>
              <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Your Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>
              <div className="mb-6" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="subject" className="block text-gray-800 font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="mb-6" data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all inline-flex items-center hover:shadow-lg hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay="500">
                <SendIcon size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;