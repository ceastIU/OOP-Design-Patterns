import React, { Component, useState, useEffect } from 'react';
import Timer from './components/Timer';
import './App.css';
// Create a Subject class that will manage observers.
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}


// Create a simple component that will act as an observer.
class MyComponent extends Component {
  constructor() {
    super();
    this.state = { data: "div-2" };
  }

  update(data) {
    // Handle updates here, e.g., fetch new data or re-render the component.
    this.setState({ data: `Updated Data: ${data}` });
  }

  componentDidMount() {
    // When the component mounts, add itself as an observer.
    subject.addObserver(this);
  }

  componentWillUnmount() {
    // When the component unmounts, remove itself from observers.
    subject.removeObserver(this);
  }

  render() {
    return <div class={this.state.data}>{this.state.data}</div>;
  }
}

// Create an instance of the Subject.
const subject = new Subject();

function App() {
  const handleSubjectUpdate = (data) => {
    // Notify all observers when the subject updates.
    console.log("notify", data)
    subject.notify(data);
  };


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
      <button onClick={() => handleSubjectUpdate("div-1")}>Change</button>
    </div>
  );
}

export default App;