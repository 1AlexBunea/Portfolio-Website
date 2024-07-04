import React from 'react';
import './ArrayList.css'; // Import CSS file for styling

interface Skill {
  name: string;
  experience: number;
}

interface Props {
  skills: Skill[];
}

const ArrayList: React.FC<Props> = ({ skills }) => {
  return (
    <div className="bullet-point-list">
      {skills.map((skill, index) => (
        <div key={index} className="bullet-point-item">
          <div className="bullet-point-name">{skill.name}</div>
          <div className="bullet-point-experience">
            {skill.experience} year{skill.experience !== 1 ? 's' : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrayList;
