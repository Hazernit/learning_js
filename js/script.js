"use strict";


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';

    return prop ? answer = 'Открыто' : answer = 'Закрыто';
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    debugger;
    const a = parseInt(fDish.price)
    const b = parseInt(sDish.price)
    const total = a + b
    // console.log(total)
    if (a + b < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        debugger;
        return 'Цена выше средней';
    }
    
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

function transferWaitors(data) {

    // const copy = {...data};
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
    
}

transferWaitors(restorantData);


console.log(transferWaitors(restorantData));
console.log(restorantData);











