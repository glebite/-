import React from 'react';

import './App.css';
import Hello from './sayHello';
import Tweet from './tweet';

function App() {

  return (
    <div className="App">
          <Hello />

          <Tweet name="Dev ED"/>
          <Tweet name="Dev Ralph"/>          
    </div>
  );
}

export default App;
