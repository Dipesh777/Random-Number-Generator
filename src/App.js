import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NumbersContainer from './components/NumbersApp/NumbersContainer';

function App() {
  return (
    <div>
      <h1>Random Number Generator</h1>
      <NumbersContainer />
    </div>
  );
}

export default App;
