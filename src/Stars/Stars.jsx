import React from 'react';
import './Stars.css';

const Stars = ({ rating, onUpdate }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => {
        return (
          <i 
            key={i}
            className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`}
            onClick={() => onUpdate(i + 1)}
          >
          </i>
        );
      })}
    </div>
  );
};

export default Stars;

