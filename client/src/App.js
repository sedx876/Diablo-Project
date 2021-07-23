import React from 'react'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './MainRouter'


function App() {
  return (
    <Router>
      <MainRouter/>
    </Router>
  );
}

export default App;
