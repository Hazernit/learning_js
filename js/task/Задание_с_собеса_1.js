"use strict";

// let x = 5; alert( x++ ); // 5

// [ ] + false - null + true 
console.log(typeof([] + false)) // [] = "" -> "" + false = "false"
console.log([] + false - null + true) // из строки ничего нельза вычесть - поэтому NaN


// let y = 1; 
// let x = y = 2; 
// alert(x); // 2

// [ ] + 1 + 2
// console.log([ ] + 1 + 2) // 12

// alert( "1"[0] )  // от строки: '1' вызываем значение по нулевому индексу -> получаем 1

// console.log(2 && 1 && null && 0 && undefined );
// и - запинается на лжи
// или - запинается на правде

console.log(!!( 1 && 2 ) && (1 && 2)) // восклицателные знаки превращают в булевое значение
// поэтому бул не будет равен значению точно


// таблица приоритев операторов js
alert( null || 2 && 3 || 4 ); // null не правда, 2 и 3 вернёт последнюю павду - это 3,
// а или останавливается на первой правде -> выведится 3

// Правда ли что a == b ?
// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 

// console.log(a == b) // они не равны, так как сравниваются не значения а масиивы -> разные ящики


// alert( +"Infinity" ); // Выведет инфините, тип данных будет число, на букфу выдаст NaN


// "Ёжик" > "яблоко"?
// Для этой задачи можно открыть юникод и посмотреть кто на каком месте стоит
// console.log("Ёжик" > "яблоко")
// console.log(0 || "" || 2 || undefined || true || falsе ) // 2