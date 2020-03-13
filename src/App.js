import React from 'react';
import './App.css';

// IMAGES
// import logo from './logo.svg';

// COMPONENTS
// import Header from './components/header'
import Navbar from './components/Navbar';
import Header from './components/Header.js';
import SignUpSide from './components/SignUpSide';
import Card from './components/Card.js';
import Render from './components/Render.js'
import Store from './store.js'

function App() {
  return (
    <div className="App">
      <body>
        < SignUpSide />
        < Header />
        < Navbar />
        <Render reduxState = {Store.getState()}/>
        <Card />
      </body>
    </div>
  );
}

export default App;
