'use strict';

const Car = function (make, speed) {
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

const bmw = new Car('BWM', 120);
const mercedes = new Car('mercedes'.toUpperCase(), 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

[1, 2, 3, 4, 5].forEach(_ => mercedes.accelerate());


//with classes
console.log('******************************************');

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

    accelerate = function () {
        this.speed += 10;
        console.log(`New speed for ${this.make} is ${this.speed} km/h`);
        return this;
    }

    brake = function () {
        this.speed -= 5;
        console.log(`New speed for ${this.make} is ${this.speed} km/h`);
        return this;
    }

}

const ford = new CarCl('FORD', 120);
console.log(ford.speedUS);//75

[1, 2, 3].forEach(_ => ford.accelerate());


ford.speedUS = 50;
console.log(ford);

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;

}
//linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with charge of ${this.charge}%.`);

}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();


console.log(tesla.__proto__);

//method overloading - same name with more params
EV.prototype.accelerate = function (methodName) {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with charge of ${this.charge}%.`);
    console.log(`${methodName} is overloaded`);

};

//final task

class EVcl extends CarCl{
    #charge;

    get getCharge(){
        return this.#charge;
    }

    constructor(make , speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }



    chargeBattery(chargeTo){
        this.#charge = chargeTo;
    }

    accelerate(){
        this.speed += 20;
        this.#charge --;
        console.log(`${this.make} is going at ${this.speed} km/h with charge of ${this.#charge}%.`)

    }

    brake = function () {
        this.speed -= 5;
        console.log(`New speed for ${this.make} is ${this.speed} km/h`);
        return this;
    }



}
const rivian = new EVcl('Rivian', 120, 23);
console.log(rivian);
console.log(rivian.getCharge);

rivian.brake();
rivian.accelerate();
rivian.chargeBattery(100);
console.log(rivian.getCharge);



