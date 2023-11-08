class FlyBehavior {
    fly() {
        // Abstract method
    }
}

class FlyWithWings extends FlyBehavior {
    fly() {
        console.log("Fly with wings")
    }
}

class FlyRocketPowered extends FlyBehavior {
    fly() {
        console.log("Fly with rocket!")
    }
}

class QuackBehavior {
    quack() {
        // Abstract method
    }
}

class Quack extends QuackBehavior {
    quack() {
        console.log("Quack!")
    }
}

class MuteQuack extends QuackBehavior {
    quack() {
        console.log("<< Silence >>")
    }
}

class Duck {
    constructor(flyBehavior,quackBehavior) {
        this.flyBehavior = flyBehavior
        this.quackBehavior = quackBehavior
    }

    display() {
        // Abstract method - implement in subclass
    }

    setFlyBehavior(fb) {
        this.flyBehavior = fb;
    }

    setQuakcBehavior(qb) {
        this.quackBehavior = qb
    }

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack()
    }
}

class MallardDuck extends Duck {
    constructor(){
        super(new FlyWithWings(), new Quack);
    }

    display() {
        console.log("Displaying Mallard Duck");
    }
}

const mallardDuck = new MallardDuck()
// Use the behaviors
mallardDuck.display(); // Output: Displaying Mallard Duck
mallardDuck.performFly(); // Output: Flying with wings
mallardDuck.performQuack();
mallardDuck.setFlyBehavior(new FlyRocketPowered());
mallardDuck.performFly();