"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    if (typeof(str) != "string") {
        newStr = "Ошибка!"
    }
    return newStr;
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let newArr = [...arr];
    if (arr.length != 0) {
            if (newArr.includes(missingCurr)) {
                newArr.splice(newArr.indexOf(missingCurr), 1)
            }
        let result = "Доступные валюты:\n";
        for (const key in newArr) {
            result += `${newArr[key]}\n`
        }
        return result;
    } else {
        return `Нет доступных валют`;
    }
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))


