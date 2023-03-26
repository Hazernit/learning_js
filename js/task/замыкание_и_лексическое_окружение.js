"use strict";


let number = 5; debugger

function logNumber() {
    // let number = 4; debugger
    console.log(number); 
}


number = 6;
logNumber(); debugger


number = 8;
logNumber();
// __________________________________________________________________


function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

console.log(typeof(NaN))

console.log(0 || 1)
console.log(0 && 1)
console.log("a" > "b")
console.log(0 || NaN || false || null)


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result)