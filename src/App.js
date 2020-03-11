import React from 'react';
import './App.css';
import SignUpSide from './components/SignUpSide';
import Header from './components/Header';

// IMAGES
import logo from './logo.svg';

// COMPONENTS
// import Header from './components/header'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <body>
        < SignUpSide />
        < Navbar />
        {/* < Header /> */}
        <p>Upload Drinks</p>
      </body>
    </div>
  );
}

export default App;
