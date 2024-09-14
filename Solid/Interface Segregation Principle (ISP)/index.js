/*
The ISP suggests 
that clients should not to depend on interfaces they
do not use. Instead of creating large interfaces with 
many methods, developers should design smaller, 
specific interfaces that cater to distinct requirements. This prevents classes from implementing methods they don't need, enhancing code maintainability and reusability.
*/ 

// We Need To Use Classes Becouse No Any Interfaces In Javascript:

class DrivingTest {
    constructor(userType) {
      this.userType = userType;
    }
  }
  
  class CarDrivingTest extends DrivingTest {
    constructor(userType) {
      super(userType);
      this.carTest = new CarUserTest(); // Composition
    }
  
    startCarTest() {
      return this.carTest.startCarTest(); // Delegate to CarUserTest
    }
  }
  
  class TruckDrivingTest extends DrivingTest {
    constructor(userType) {
      super(userType);
      this.truckTest = new TruckUserTest(); // Composition
    }
  
    startTruckTest() {
      return this.truckTest.startTruckTest(); // Delegate to TruckUserTest
    }
  }
  
  class CarUserTest {
    startCarTest() {
      return 'Car Test Started';
    }
  }
  
  class TruckUserTest {
    startTruckTest() {
      return 'Truck Test Started';
    }
  }
  
  const carTest = new CarDrivingTest("CarDriver");
  console.log(carTest.startCarTest());
  
  const truckTest = new TruckDrivingTest("TruckDriver");
  console.log(truckTest.startTruckTest());
  