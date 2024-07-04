import React from 'react';
import ExperienceCard from './ExperienceCard';
import './ExperiencePage.css';

interface ExperiencePageProps {
  titles: string[];
  companies: string[];
  descriptions: string[];
  durations: Array<{ start: string; end: string }>;
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({
  titles,
  companies,
  descriptions,
  durations,
}) => {
  return (
    <div className="experience-page">
      {titles.map((title, index) => (
        <ExperienceCard 
          key={index}
          title={title}
          company={companies[index]}
          description={descriptions[index]}
          duration={durations[index]}
        />
      ))}
    </div>
  );
};

export default ExperiencePage;