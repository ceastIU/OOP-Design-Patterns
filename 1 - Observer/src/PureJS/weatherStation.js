// So one thing I have to get super used to is the fact that JS class don't implement
// interfaces, rather I just have to hard code those methods into the js class itself
// Therefore, I have to just skip this idea of interfaces and go straight into hard coding methods

class WeatherData {
    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
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
            observer.update(this.temperature,this.humidity,this.pressure);
        }
    }

    measurementsChanged() {
        this.notifyObservsers();
    }

    setMeasurements(temperature,humidity,pressure) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.measurementsChanged();
    }
}

class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this)
    }

    update(temperature,humidity,pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display() {
        console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`)
    }
}

class WeatherStation {
    constructor(){
        this.weatherData = new WeatherData();
        this.currentConditionsDisplay = new CurrentConditionsDisplay(this.weatherData)
        this.weatherData.setMeasurements(80, 65, 30)
        this.weatherData.setMeasurements(90, 65, 30)
        this.weatherData.setMeasurements(75, 40, 30)
    }
}

const weatherStation = new WeatherStation()