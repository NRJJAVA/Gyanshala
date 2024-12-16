import React from 'react';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { WORK_ITEMS } from '../constants/content';

const Work = () => {
  return (
    <div id="our-work" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle title="Our Work" centered />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {WORK_ITEMS.map((work, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Work;