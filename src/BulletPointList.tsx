import React from 'react';
import './BulletPointList.css';

interface BulletPointListProps {
  items: string[];
}

const BulletPointList: React.FC<BulletPointListProps> = ({ items }) => {
  return (
    <div className="bullet-point-list">
      {items.map((item, index) => (
        <div key={index} className="bullet-point-item">
          <h5> • {item}</h5>
        </div>
      ))}
    </div>
  );
};

export default BulletPointList;
