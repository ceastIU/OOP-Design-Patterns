// trying to combine multiple different design patterns into one
class Size {
    static EMPTY = 'EMPTY';
    static BOMB = 'BOMB';
    static FLAG = 'FLAG';
}

class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this)
    }
}

class Cell {
    constructor(bombController) {
        this.nearbyBombs = 0
        this.flag = false
        this.bomb = false
        this.emptu = false
        this.description = "Unknow Beverage"
        this.bombController = bombController;
        this.bombController.registerObserver(this)
    }
    
    getDescription() {
        return this.description;
    }

    reveal() {
        console.log(`I was a  ${this.description}`)
    }

    getSize() {
        return this.size
    }
}

class CondimentDecorator extends Beverage {
    constructor(beverage) {
      super();
      this.beverage = beverage;
    }
  
    getSize() {
        return this.beverage.getSize();
    }

    getDescription() {
      // This method needs to be implemented in concrete subclasses.
      throw new Error('getDescription must be implemented in subclasses');
    }
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost() {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "House Blend Coffee";
    }

    cost() {
        return 0.89
    }
}

class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage
    }

    getDescription() {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost() {
        return this.beverage.cost() + .20;
    }
}
