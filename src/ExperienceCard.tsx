import React, { useState, useRef, useEffect } from 'react';
import './ExperienceCard.css';
import BulletPointTextArea from './BulletPointTextArea';

interface JobExperience {
  title: string;
  company: string;
  description: string;
  duration: {
    start: string;
    end: string;
  };
}

const ExperienceCard: React.FC<JobExperience> = ({ 
  title, 
  company, 
  description, 
  duration, 
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (descriptionRef.current) {
        setDescriptionHeight(descriptionRef.current.scrollHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (descriptionRef.current) {
      resizeObserver.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        resizeObserver.unobserve(descriptionRef.current);
      }
    };
  }, [description]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setTimeout(() => {
      if (descriptionRef.current) {
        setDescriptionHeight(descriptionRef.current.scrollHeight);
      }
    }, 50);
  };

  return (
    <div 
      className={`experience-card ${showDescription ? 'expanded' : ''}`} 
      onClick={toggleDescription}>
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{duration.start} - {duration.end}</p>
        </div>
        <div 
          className="card-description" 
          style={{ height: showDescription ? `${descriptionHeight}px` : '0' }}
        >
          <div ref={descriptionRef} className="description-content">
            <BulletPointTextArea description={description}></BulletPointTextArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;