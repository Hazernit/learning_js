"use strict";

// Функции - function declaration


function showFirstMessage() {
    console.log("Hello World");
}
showFirstMessage();

let num = 20
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMessage("text");
console.log(num)

// Замыкание функции в JavaScript 
// Замыкание функции - это сама функция вместе
// со всеми внешними переменными которые ей доступны

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret() {
    let num = 50;

    // код  какой-то

    return num
}

const anotherNum = ret();
console.log(anotherNum);
// Стрелочные функции