import React from 'react';

class FlyBehavior extends React.Component {
  fly() {
    // Abstract method
  }
}

class FlyWithWings extends FlyBehavior {
    fly() {
        console.log("I am flying with my wings")
    }
}

class FlyRocketPowered extends FlyBehavior {
    fly() {
        console.log("Weee, I am flying with a rocket")
    }
}

export { FlyWithWings, FlyRocketPowered };