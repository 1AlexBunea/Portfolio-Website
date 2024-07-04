import React from 'react';

interface ProgressBarProps {
  experience: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ experience }) => {
  const maxExperience = 20; // Assume 20 years is the maximum
  const percentage = Math.min((experience / maxExperience) * 100, 100);

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px' }}>
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: '#4caf50',
          height: '20px',
          borderRadius: '5px',
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;