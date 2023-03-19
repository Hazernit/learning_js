
// Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода. 
// Вы спросите, а зачем это вообще нужно? Ответов несколько:

// Существуют реальные задачи, когда вы кодом строите геометрию, 
// символы и другие нужные вещи. 
// Вспомните простые электронные табло на улицах, например

// Это хорошо прокачивает логику и разминает мозг

// Позволяет запомнить нюансы работы языка

// Иногда можно встретить просто нереальные вещи, 
// построенные только при помощи кода. 
// Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, 
// который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
const lines = 5;
let result = '';

max_len_star = lines * 2 + 1;
let lines_for_star = lines;
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < max_len_star - (lines_for_star * 2); j++) {
        result += "*";
    }
    lines_for_star -= 1;
    result += "\n";
}
console.log(result)










for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)

