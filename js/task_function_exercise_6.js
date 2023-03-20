"use strict";

// любая фуекция не имеющая return
// возвращает underfiend


function sayHello(name) {
    return `Привет, ${name}`;
}
console.log(sayHello("Dmitriy"));

function returnNeighboringNumbers(number) {
    return [number-1, number, number+1];
}

console.log(returnNeighboringNumbers(5));

function getMathResult(number, range) {
    if (typeof(range) != 'number' || range < 0) {
        return `${number}`;
    }
    let result = `${number}`
    for (let i = 1; i < range; i++) {
        result += `---${number * (i+1)}`        
    }
    return result;
}

console.log(getMathResult(20, -5))