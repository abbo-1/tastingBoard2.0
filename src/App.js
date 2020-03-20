import React from 'react';
import ImageUpload from './components/ImageUpload';
import './App.css';

// IMAGES
// import logo from './logo.svg';

// COMPONENTS
// import Header from './components/header'


import Navbar from './components/Navbar';
import Header from './components/Header.js';
import SignUpSide from './components/SignUpSide';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <body>
        < SignUpSide />
        < Header />
        < Navbar />
        <Card />
        <ImageUpload/>
      </body>
    </div>
  );
}

export default App;
