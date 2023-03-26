"use strict";


const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const test = [];

function showFamily(arr) {
    let answer = "Семья состоит из:";

    for (const key in arr) {
        answer += ` ${arr[key]}`
    }
    if (arr.length == 0) {
        answer = "Семья пуста"
    }
    return answer;
}

console.log(showFamily(test));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (const key in arr) {
        console.log(`${arr[key].toLowerCase()}`)
    }
}

console.log(standardizeStrings(favoriteCities));





