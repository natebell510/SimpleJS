'use strict';

const Car = function (make, speed){
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`New speed for ${this.make} is ${this.speed} km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`New speed for ${this.make} is ${this.speed} km/h`);
}

const bmw = new Car('BWM',120);
const mercedes = new Car('mercedes'.toUpperCase(),95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

[1,2,3,4,5].forEach(_ => mercedes.accelerate());
