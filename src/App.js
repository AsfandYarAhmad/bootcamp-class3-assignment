import React from 'react';
import './App.css';

function App({name ,age}) {
  return <div className="new">
    point:1 <br></br><br></br>
    Hello world from <strong>{name}</strong> <br></br><br></br><br></br>
    This is Heading <br></br>
    <h1>This is assignment no 3</h1>
    <br></br><br></br>
    This is List
    <br></br>
          <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
          </ul>
          <ol>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
          </ol>
          My Age is:{10 +13}
  
    
    </div>
  }

export default App;
