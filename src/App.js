import React from 'react';
import './App.css';

// IMAGES
import logo from './logo.svg';

// COMPONENTS
// import Header from './components/header'
import Navbar from './components/Navbar';
import Header from './components/Header.js';
import SignUpSide from './components/SignUpSide';

function App() {
  return (
    <div className="App">
      <body>
        < SignUpSide />
        < Navbar />
        < Header />
        <p>Upload Drinks</p>
      </body>
    </div>
  );
}

export default App;
