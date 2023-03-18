// "use strict";  // Строгий режим
// Без строго режима это работает, с ним - нет
/* 
a = 15;
console.log(a);
*/
console.log(number)
let number = 5;  // изменяемая переменная
const leftBorderWidth = 1; // конст - константа -> неизменяемая

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

console.log(name)
var name = 'Ivan'; // var - может перезаписывать, но устарел 
// т.к. некоректно работает при вызове например мы ее еще не создали но вызвали
// и она будет undefined - а не ошибка, с let такой проблемы нет - оны выдаст ошибку если переменная ещё не объявлена