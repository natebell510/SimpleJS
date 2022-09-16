// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temps = [3, -2,-6,-1, 'error',9,13,17,15,14,9,5];
//calculate temp aplitude - difference between highest and lowest temp
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temps);
console.log(amplitude);
//
//
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX
        // value: Number(prompt('Degrees celsius:')),
        value: 10,
    };

    // B) FIND
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//time stamp on 3 - 0:00:00
