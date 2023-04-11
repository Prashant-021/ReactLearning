import React from 'react';
import './App.css';

import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import PureComp from './components/PureComp';

function App() {
  return (
    <>
      <div className="App">
        <h1>React + TypeScript Project</h1>
      </div>
      <FunctionComponent />
      <ClassComponent />
      <PureComp text = "Pure" />
    </>
  );
}

export default App;
