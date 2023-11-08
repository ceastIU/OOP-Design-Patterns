import React from 'react';

class Duck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flyBehavior: props.flyBehavior,
      quackBehavior: props.quackBehavior,
    };
  }

  display() {
    // Abstract method - implement in subclass
  }

  setFlyBehavior(fb) {
    this.state.flyBehavior = fb;
  }

  setQuackBehavior(qb) {
    this.state.quackBehavior = qb;
  }

  performFly() {
    this.state.flyBehavior.fly();
  }

  performQuack() {
    this.state.quackBehavior.quack();
  }

  render() {
    return (
      <div>
        <h2>{this.display()}</h2>
      </div>
    );
  }
}

export default Duck;