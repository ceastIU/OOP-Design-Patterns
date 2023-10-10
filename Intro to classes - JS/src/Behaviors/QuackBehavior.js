import React from 'react';

class QuackBehavior extends React.Component {
  quack() {
    // Abstract method
  }
}

class Quack extends QuackBehavior {
  quack() {
    console.log("Quack!");
  }
}

class MuteQuack extends QuackBehavior {
  quack() {
    console.log("<< Silence >>");
  }
}

export { Quack, MuteQuack };