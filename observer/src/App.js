import React, { Component, useState, useEffect } from 'react';

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
    this.state = { data: 'Initial Data' };
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
    return <div>{this.state.data}</div>;
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

  const [timer, setTimer] = useState(60); // Initial timer value (in seconds)

  // Function to start the timer
  const startTimer = () => {
    // Reduce the timer by 1 every second
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        handleSubjectUpdate(prevTimer); // Pass the updated timer value to the function
        return prevTimer - 1; // Return the updated timer value
      });
    }, 1000);

    // Return a cleanup function to stop the timer when the component unmounts
    return () => clearInterval(intervalId);
  };

  // Use the useEffect hook to start the timer when the component mounts
  useEffect(() => {
    const cleanup = startTimer();

    // Add cleanup logic for when the component unmounts
    return () => {
      cleanup();
    };
  }, []);
  // useEffect(() => {
  //   // Simulate a subject update (e.g., due to an API call or user interaction).
  //   setTimeout(handleSubjectUpdate("Changed"), 2000);
  // }, []);

  return (
    <div>
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <button onClick={() => handleSubjectUpdate("I was clicked")}>Change</button>
      <h2>Countdown Timer:</h2>
      <p>{timer} seconds</p>
    </div>
  );
}

export default App;