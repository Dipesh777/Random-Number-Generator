import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'


const store = configureStore()
store.subscribe(() => {
  console.log('hello', store.getState() )
})


ReactDOM.render(

  <App />
  ,
  document.getElementById('root')
);