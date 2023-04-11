import React from 'react';
import './App.css';

import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';


function App() {
  return (
    <>
      <div className="App">
        <h1>React + TypeScript Project</h1>
      </div>
      <FunctionComponent />
      <ClassComponent />
    </>
  );
}

export default App;
