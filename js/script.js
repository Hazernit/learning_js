"use strict";

// Работа с условиями

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}


const num = 50 //prompt('Введите число', '');

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}


// Тернарный оператор
// Если то что в скобках - правда,
// возвращает первое после знака вопроса 
// если ложь, то возвращает значение после запятой
(num === 50) ? console.log('Ok!') : console.log('Error');


// используем switch
// Свитч только на строгое сравнение
switch (num) {
    case 49:
        console.log('Введеная вами переменная равна 49')
        break;
    case 100:
        console.log('Введеная вами переменная равна 100')
        break;
    case 50:
        console.log('Введеная вами переменная равна 50')
        break;
    default:
        console.log('Введеное вами значение нет в нашей бд')
        break;
}



console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && !3);
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// console.log(hamburger || cola || fries === 3 || nuggets);

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

console.log(hamburger && cola || fries === 3 && nuggets);
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}









