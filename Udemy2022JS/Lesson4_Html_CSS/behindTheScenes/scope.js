'use strict'
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996); //arrow function inherits this keyword
        };
        isMillenial();

    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};
jonas.greet();
jonas.calcAge();

//argument keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(4,5);


var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
//addArrow(4,2);
