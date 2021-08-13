import React from 'react';
import names from '../data/names'

const generateName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  return name
}

const NameGenerator = () => {
  return (
    <div 
      className="container card card-body text-center text-success border-success mb-3 mt-3">
      <h5>Hit Refresh on Your Browser to Generate a New Name</h5>
        <p>
          Your new Character Name is...
        </p>
        <h2 className="Text-hacker-name">
          {generateName()}
        </h2>
       
      
    </div>
  );
}

export default NameGenerator;