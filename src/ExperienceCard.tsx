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
      className={`experience-card ${showDescription ? 'expanded' : ''}`}>
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{duration.start} - {duration.end}</p>
          {showDescription == true ? <button onClick={toggleDescription} style={{backgroundColor: 'transparent', color:'rgb(255, 121, 31)', borderRadius:15, padding:10, border: '1px solid rgb(255, 121, 31)', width:'fit-content', marginTop:'1%'}}>See Less</button> : <button onClick={toggleDescription} style={{backgroundColor: 'transparent', color:'rgb(255, 121, 31)', borderRadius:15, marginTop:'1%', padding:10, border: '1px solid rgb(255, 121, 31)', width:'fit-content'}}>See More</button>}
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