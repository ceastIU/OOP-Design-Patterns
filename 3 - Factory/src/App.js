import React, { Component, useState, useEffect } from 'react';
import Timer from './components/Timer';
import './App.css';

// Create a simple component that will act as an observer.
class MyComponent extends Component {
  constructor() {
    super();
    this.rend = <button>I'm a Button</button>;
  }

  render() {
    return this.rend;
  }
}

function App() {


  // useEffect(() => {
  //   // Simulate a subject update (e.g., due to an API call or user interaction).
  //   setTimeout(handleSubjectUpdate("Changed"), 2000);
  // }, []);

  return (
    <div>
      <Timer />
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  );
}

export default App;