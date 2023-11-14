// import Observer from "./Observer.js"
// trying to combine multiple different design patterns into one
class Size {
  static EMPTY = "EMPTY";
  static BOMB = "BOMB";
  static FLAG = "FLAG";
}

class Observer {
  constructor() {
    this.observers = [];
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservsers() {
    for (const observer of this.observers) {
      observer.reveal();
    }
  }

  bombTriggered() {
    this.notifyObservsers();
  }
}

class Cell {
  constructor(bombController) {
    this.nearbyBombs = 0;
    this.flag = false;
    this.bomb = false;
    this.empty = false;
    this.description = "Bomb";
    this.bombController = bombController;
    this.bombController.registerObserver(this);
  }

  getDescription() {
    return this.description;
  }

  trigger() {
    this.bombController.bombTriggered();
  }

  reveal() {
    console.log(`I was a ${this.description}`);
  }

  getSize() {
    return this.size;
  }
}

class Bomb extends Cell {
  constructor() {
    super();
    this.description = "bomb";
  }

  getDescription() {
    return this.description;
  }

  trigger() {
    this.bombController.bombTriggered();
  }

  reveal() {
    console.log(`I was a ${this.description}`);
  }

  getSize() {
    return this.size;
  }
}
// more stuff so I can make a change and a commit today

// class CondimentDecorator extends Beverage {
//     constructor(beverage) {
//       super();
//       this.beverage = beverage;
//     }

//     getSize() {
//         return this.beverage.getSize();
//     }

//     getDescription() {
//       // This method needs to be implemented in concrete subclasses.
//       throw new Error('getDescription must be implemented in subclasses');
//     }
// }

// class Espresso extends Beverage {
//   constructor() {
//     super();
//     this.description = "Espresso";
//   }

//   cost() {
//     return 1.99;
//   }
// }

// class HouseBlend extends Beverage {
//     constructor() {
//         super();
//         this.description = "House Blend Coffee";
//     }

//     cost() {
//         return 0.89
//     }
// }

// class Mocha extends CondimentDecorator {
//     constructor(beverage) {
//         super();
//         this.beverage = beverage
//     }

//     getDescription() {
//         return this.beverage.getDescription() + ", Mocha";
//     }

//     cost() {
//         return this.beverage.cost() + .20;
//     }
// }

class Minesweeper {
  constructor() {
    this.bombController = new Observer();
    this.cell = new Cell(this.bombController);
    // this.bombController.bombTriggered()
    this.cell.trigger();
    this.bomb = new Bomb(this.cell);
    this.bomb.getDescription();
  }
}

const minesweeper = new Minesweeper();
