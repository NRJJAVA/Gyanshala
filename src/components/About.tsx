import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div id="about-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Building tomorrow's leaders through quality education and innovative learning methods.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide quality education that empowers students to achieve their full potential.',
              },
              {
                icon: Users,
                title: 'Our Vision',
                description: 'To be the leading institution in transformative education and holistic development.',
              },
              {
                icon: Award,
                title: 'Our Values',
                description: 'Excellence, integrity, innovation, and inclusivity in everything we do.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <item.icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;