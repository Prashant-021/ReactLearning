import React from 'react';
import './App.css';
import CreateState from './components/CreateState';

function App() {
  return (
    <div className="App">
      <p>
        Hello
      </p>
      <p>
        React components has a built-in state object.
      </p>
      <p>
        The state object is where you store property values that belongs to the component.
      </p>
      <p>
        When the state object changes, the component re-renders.
      </p>
      <CreateState name="Prashant" />
    </div>
  );
}

export default App;
