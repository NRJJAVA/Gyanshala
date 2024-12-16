import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  centered = false 
}) => {
  const titleClasses = centered ? 'text-center' : '';
  
  return (
    <div className={titleClasses}>
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};