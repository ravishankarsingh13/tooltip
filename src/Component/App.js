import React, { useState } from 'react';
import '../css/App.css';
import Tooltip from './Tooltip';


function App() {
  
// this for set the drop down list
  let [place, setPlace] = useState('');
  
  // here we change the dropdown value 
  let handleChange = (e) =>{
    setPlace(e.target.value);
  }
  return (
    <div className="App">
      <h1>Tooltip Position</h1>
      <select className="tooltip__option" 
      onChange={handleChange}
    >
        <option value="top">Top</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="bottom">Bottom</option>
      </select>
      {/* use the tooltip component */}
      <Tooltip 
      // here we pass the place as the state
        place= {place}
      />
    </div>
  );
}

export default App;
