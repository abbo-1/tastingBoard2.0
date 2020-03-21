import React from 'react';
import ImageUpload from './components/ImageUpload';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header.js';
import SignUpSide from './components/SignUpSide';
import Card from './components/Card.js';
import CardEdit from './components/CardEdit.js';
import AddDrink from './components/AddDrink.js';
import Render from './components/Render.js';
import Store from './store.js';

import AddFancyDrink from './components/AddFancyDrink.js';

function App() {
  // let showCardEdit  = false;

  // Store.getState().showCardEdit

  //Store.getState().showCardEdit;

  return (
    <div className='App'>
      <body>
        <SignUpSide />
        <Header />

        <Navbar reduxDispatch={Store.dispatch} />
        <Render reduxState={Store.getState()} />
        {/* <Card />
        <CardEdit /> */}
      </body>
    </div>
  );
}

export default App;
