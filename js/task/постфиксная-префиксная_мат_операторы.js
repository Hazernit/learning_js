"use sctrict";



console.log('arr' + " - object")
console.log(4 + " - object")
// +"5" - унарный плюс - плюс который ставится перед чем-то
console.log(4 + +"5")


let incr = 10,
    decr = 10;

// постфиксная - выводит ещё не обновленные значения
incr++;
decr--;

// префиксная - выводят обновленные значения
++incr;
--decr;

console.log(incr);
console.log(decr);

// Наглядный пример префиксного и постфисного дикримента и инкремента
let incr2 = 10,
    decr2 = 10;

// постфиксная - выводит ещё не обновленные значения
console.log(incr++);
console.log(decr--);

// префиксная - выводят обновленные значения
console.log(++decr);
console.log(--decr);


// _________________________
// Арфметические "приёмы?"

// остаток от деления
console.log(5%2);

// сравнение
console.log(2*4 == '8');

// строгое сравнение число не будет равно строке
console.log(2*4 == '8');

// Операторы
// && - и
// || - или
// ! - оператор отрицания

const isChecked = true,
      isClose = true;

    //   если isCheched и isClose = true, тогда будет выполнятся
console.log(isChecked && isClose)

    //   isCheched или isClose = если хоть один правда, тогда выполнится
console.log(isChecked || isClose)






