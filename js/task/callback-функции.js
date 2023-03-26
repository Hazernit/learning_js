"use strict";

// callback-функции

function first() {
    
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

// Внутри анонимная функция
// learnJS("JavaScript", function() {
//     console.log("Я прошёл этот урок!")
// });

// или

function done() {
    console.log("Я прошёл этот урок!")
}
learnJS("JavaScript", done);




