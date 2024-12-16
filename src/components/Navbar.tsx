import React from 'react';
import { Book } from 'lucide-react';
import { Container } from './ui/Container';
import { NAV_ITEMS } from '../constants/navigation';
import { formatId } from '../utils/formatters';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <Container>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">Gyanshala</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${formatId(item)}`}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;