"use strict";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`)
        
    }
    
}

// *
// **
// ***
// ****
// *****
// ******
let result = '';
const length = 7;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*'
    }
    result += '\n'
}

console.log(result)

// for (let i = 1; i < 7; i++) {
//     console.log("*"*i)
// }




