import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store'

Store.subscribe( () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});

Store.dispatch({type:null});