"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj = {
    a: 5, 
    b: 1
}

// const copy = obj; // ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y: 4
    }
};

const newNumbers = copy(numbers)

newNumbers.a = 10;

console.log(newNumbers)
console.log(numbers)


const add = {
    d: 17,
    e: 20
}
// Добавление в объект другого объекта
// console.log(Object.assign(numbers, add))

// Копирование объекта по-другому
const clone = Object.assign({}, add);

clone.d = 20;


console.log(add)
console.log(clone)


const oldArray = ['a', 'b', 'c'];
// Копирование массива
const newArray = oldArray.slice();

newArray[1] = 'asdsadsadf';
console.log(newArray);
console.log(oldArray);


// Оператор разворота
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
// Мы видим как интернет в себя вместил два массива благодаря оператору разворота
console.log(internet)

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);
      
      
      
//  создаём копию при помощи сред оператора
const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};


const newObj = {...q};
      
console.log(newObj)