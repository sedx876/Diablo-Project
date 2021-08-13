import React from 'react';
import names from '../data/names'
import {Link} from 'react-router-dom'

const generateName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  return name
}

const NameGenerator = () => {
  return (
    <div 
      className="container card card-body text-center text-success border-success mb-3 mt-3">
      <h5>Hit the 'Name Generator' Button to Generate a New Name</h5>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-outline-primary btn-sm mx-auto text-center" 
          to="/namegen">
          Generate New Name
        </Link>
      <br/>
        <p>
          Your new Character Name is...
        </p>
        <h2 className="Text-hacker-name card border-secondary">
          {generateName()}
        </h2>
       
      
    </div>
  );
}

export default NameGenerator;