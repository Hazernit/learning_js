"use strict";

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + `px`;

// Преобразуем в цифры

// 1)
const toNumber = Number('4');

console.log(typeof(Number('4')));

// 2) Более лаконичный способ

const toNumber2 = +`5`
console.log(typeof(+`5`));

// 3)
const toNumber3 = parseInt("15px", 10)
console.log(typeof(parseInt("15px", 10)));
console.log((parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// Пустота всегда лож, 0 - тоже лож
// 0, '', null, undefined, NaN - ложь

let switcher = null;
// не работает
if (switcher) {
    console.log('Working...')
}


switcher = 1
// Работает
if (switcher) {
    console.log('Working...')
}

// 2) Преобразует в бул, так как 4 на будет тру
console.log(typeof(Boolean('4')));


// 3) Тоже преобразует в бул
console.log(typeof(!!"44444"));
