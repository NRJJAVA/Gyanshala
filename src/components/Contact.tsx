import React from 'react';
import { Container } from './ui/Container';
import { SectionTitle } from './ui/SectionTitle';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

const Contact = () => {
  return (
    <div id="contact-us" className="py-16 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Contact Us"
          subtitle="Have questions? We'd love to hear from you."
          centered
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;