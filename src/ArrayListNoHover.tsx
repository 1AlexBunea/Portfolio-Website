import React from 'react';
import './ArrayListNoHover.css'; // Import CSS file for styling

interface Skill {
  name: string;
  experience: number;
}

interface Props {
  skills: Skill[];
}

const ArrayListNoHover: React.FC<Props> = ({ skills }) => {
  return (
    <div className="bpoint-list">
      {skills.map((skill, index) => (
        <div key={index} className="bpoint-item">
          <div className="bpoint-name">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ArrayListNoHover;
