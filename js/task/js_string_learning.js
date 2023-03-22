"use strict";


// Расскажет про всё что содержится в объекте
console.dir(Number)

const str = "test"

// Делает все буквы с большой
// Чтобы сохранить этот результат нужно перезаписать в переменную
// str = str.toUpperCase()
console.log(str.toUpperCase())
// Делает все буквы с маленькой
console.log(str.toLowerCase())
console.log(str)

const fruit = "Some fruit"
// Вернёт индекс первого вхождения если нет -1
console.log(fruit.indexOf("iu"))

const logg = "Hello world";

// slice = срезу в python [6: 11]
console.log(logg.slice(6, 11));

// не поддерживает отрицательные числа, будут инерпритироваться как нуль

console.log(logg.substring(6, 11));

// сколько нужно вырезать (6)
console.log(logg.substr(3));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
// Возвращает целое число
console.log(parseInt(test));
console.log(parseFloat(test))













