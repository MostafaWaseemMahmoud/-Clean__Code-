class Engine {
    start() {
      throw "start method must be implemented";
    }
  }
  
  // Low-level module 1
  class ElectricEngine extends Engine {
    start() {
      console.log("Electric engine started");
    }
  }
  
  // Low-level module 2
  class GasEngine extends Engine {
    start() {
      console.log("Gas engine started");
    }
  }
  
  // High-level module (depends on abstraction)
  class Car {
    constructor(engine) {
      this.engine = engine; // Dependency is injected
    }
  
    startCar() {
      this.engine.start();
    }
  }
  
  // Now you can inject any engine type
  const electricCar = new Car(new ElectricEngine());
  electricCar.startCar(); // Output: Electric engine started
  
  const gasCar = new Car(new GasEngine());
  gasCar.startCar(); // Output: Gas engine started
  