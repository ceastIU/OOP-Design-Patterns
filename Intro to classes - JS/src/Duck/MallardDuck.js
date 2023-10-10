import React from 'react';
import Duck from './Duck';
import { FlyWithWings } from "../Behaviors/FlyBehavior"; // Import behavior components
import { Quack } from '../Behaviors/QuackBehavior';
class MallardDuck extends Duck {
  constructor() {
    super({
      flyBehavior: new FlyWithWings(),
      quackBehavior: new Quack(),
    });
  }

  display() {
    return "Displaying Mallard Duck";
  }
}

export default MallardDuck;