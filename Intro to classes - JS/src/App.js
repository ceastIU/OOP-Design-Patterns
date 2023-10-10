import React, { useState } from 'react';
import MallardDuck from './Duck/MallardDuck'; // Import your duck component
import { FlyRocketPowered } from './Behaviors/FlyBehavior';
function App() {
  const [mallardDuck] = useState(new MallardDuck());

  const performFly = () => {
    mallardDuck.performFly();
  }

  const performQuack = () => {
    mallardDuck.performQuack();
  }

  const changeToRockets = () => {
    mallardDuck.setFlyBehavior(new FlyRocketPowered());
  }

  return (
    <div>
      <h1>My App</h1>
      <MallardDuck /> {/* Use your specific duck component */}
      <button onClick={performFly}>Perform Fly</button>
      <button onClick={performQuack}>Perform Quack</button>
      <button onClick={changeToRockets}>Switch to boosters!!</button>
    </div>
  );
}

export default App;
