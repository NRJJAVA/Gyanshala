import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Address',
    content: ['123 Education Street', 'Knowledge City, KN 12345'],
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+1 (555) 123-4567'],
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@gyanshala.edu'],
  },
] as const;

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {CONTACT_INFO.map((item, index) => (
        <div key={index} className="flex items-start">
          <item.icon className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
            {item.content.map((line, i) => (
              <p key={i} className="mt-1 text-gray-500">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};