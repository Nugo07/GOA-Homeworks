const car = {
  
    brand: "Mercedes Benz",
    model: "S Class",
    maxSpeed: 250,
    currentSpeed: 0,

  
    acceleration() {
        if (this.currentSpeed < this.maxSpeed) {
            this.currentSpeed += 10;
        } else {
            console.log("მანქანა მაქსიმალურ სიჩქარეზეა");
        }
    },

    deceleration() {
        if (this.currentSpeed > 0) {
            this.currentSpeed -= 10;
        } else {
            console.log("მანქანა უკვე გაჩერებულია");
        }
    },

    currentSpeed() {
        console.log("ამჟამინდელი სიჩქარე არის: " + this.currentSpeed);
    }
};

car.acceleration(); 
car.currentSpeed();

car.acceleration(); 
car.currentSpeed();

car.acceleration(); 
car.currentSpeed();

car.deceleration(); 
car.currentSpeed();

car.deceleration(); 
car.currentSpeed();

car.deceleration(); 
car.currentSpeed();

car.deceleration(); 
car.currentSpeed();

delete car.model;

console.log(car);