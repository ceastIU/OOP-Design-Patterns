class Observer {
    constructor() {
        this.observers = [];
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1){
            this.observers.splice(index,1)
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

export default Observer;