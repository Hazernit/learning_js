"use strict";

const arr = [1, 2, 3, 6, 8, 10];

// Удаление последнего элемента
arr[99] = 0
console.log(arr.length)
console.log(arr)

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

arr.pop();

// Добавляет значение в конец массива
arr.push(10);
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for (const value in arr) {
    if (Object.hasOwnProperty.call(arr, value)) {
        const element = arr[value];
        console.log(element)
    }
}





// Сохоаниение в массив и нужный нам вывод

const str = prompt("", "");
const products = str.split(", ");
products.sort(copareNum);
console.log(products.join('; '))

function copareNum(a, b) {
    return a -b;
}




