const arr = [1, 2, 3];

arr[10] = '3455'

console.log(arr)

const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};
const b = 'b';

// arrObj.b = '1234';
// arrObj['b'] = '1234';
// arrObj[b] = '1234';
arrObj[b] = [];

console.log(arrObj['b']);
console.log(arrObj.b);

console.log(arr[1])
console.log(arrObj.a)

// const obj = {a: 1, b: 2};
const obj = {
    Anna: 500,
    'Alice': 800
};
// Аналог в виде масиива, но лучше объект - для себя сохранил
// ['Anna', 500, 'Alice', 800];