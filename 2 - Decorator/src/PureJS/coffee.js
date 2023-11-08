class Size {
    static TALL = 'TALL';
    static GRANDE = 'GRANDE';
    static VENTI = 'VENTI';
}

class Beverage {
    constructor() {
        this.size = Size.TALL;
        this.description = "Unknow Beverage"
    }
    getDescription() {
        return this.description;
    }

    setSize(size) {
        this.size = size
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

class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }

    cost() {
        return 0.99
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

class Whip extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage
    }

    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }

    cost() {
        var cost = this.beverage.cost()
        console.log(this.getSize());
        if (this.beverage.getSize() == Size.TALL) {
            cost += .10;
         
        } else if (this.beverage.getSize() == Size.GRANDE) {
            cost += .15;
        } else if (this.beverage.getSize() == Size.VENTI) {
            cost += .20;
        } else {
            console.log("Else");
        }
        return cost + .10;
    }
}

class Soy extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage
    }

    getDescription() {
        return this.beverage.getDescription() + ", Soy";
    }

    cost() {
        return this.beverage.cost() + .15;
    }
}

class StarbuzzCoffee {
    constructor() {
        this.beverage = new Espresso();
        console.log(this.beverage.getDescription() + " $" + this.beverage.cost())
        
        this.beverage2 = new DarkRoast();
        this.beverage2.setSize(Size.VENTI);
        console.log(this.beverage2.getSize())
        this.beverage2 = new Soy(this.beverage2);
        this.beverage2 = new Mocha(this.beverage2);
        this.beverage2 = new Whip(this.beverage2);
        console.log(this.beverage2.getDescription() + " $" + this.beverage2.cost())
    }
}

const starbuzzCoffee = new StarbuzzCoffee();