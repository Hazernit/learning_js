"use strict";

// function calculateVolumeAndArea(a) {
//     // S = 6 a²
//     // const S = 6 * a * a
//     // V = 4 * 4 * 4 = 4³
//     if (Number.isInteger(a) && a >= 0) {
//         const S = 6 * a * a
//         const V = a * a * a
//         return `Объем куба: ${V}, площадь всей поверхности: ${S}`
//     }
//     else {
//         return "При вычислении произошла ошибка"
//     }
// }

// console.log(calculateVolumeAndArea(-15))


// function getCoupeNumber(number) {
//     if (Number.isInteger(number) && 1 <= number && number <= 36) {
//         return Math.ceil(number / 4)
//     } else if (number === 0 || number > 36) {
//         return "Таких мест в вагоне не существует"
//     } else {
//         return "Ошибка. Проверьте правильность введенного номера места"
//     }
// }

// // console.log(Math.ceil(33/4))
// console.log(getCoupeNumber('Hello'))




// function getTimeFromMinutes(minutes) {
//     const arr = [2, 3, 4]; // часа
//     const h_arr_t = "часа";
//     const h_1_t = "час";
//     const h_other_t = "часов";
    
//     // 0 минут, 1 минута, 2 минуты, 3 минуты, 
//     // 4 минуты, 5 минут, 6 минут, 7 минут
//     // 8 минут, 9 минут, 10 минут, 11 минут
//     // 12 минут 13 минут 14 минут 15 минут
//     // 16 минут 17 минут 18 минут 19 минут
//     // 20 минут 21 минута 22 минуты
//     const exclude_minute = [11, 12, 13, 14]
//     const arr_minutes = [2, 3, 4];
//     const  arr_minutes_t = "минуты";
//     const one_minute = 1;
//     const one_minute_t = "минута";

//     let answer = "";
//     if (Number.isInteger(minutes) && minutes >= 0) {
//         const hour = Math.floor(minutes / 60)
//         minutes -= hour * 60;

//         if (arr.includes(hour)) {
//             answer += `Это ${hour} ${h_arr_t} `;
//         } else if (hour == 1) {
//             answer += `Это ${hour} ${h_1_t} `;
//         } else {
//             answer += `Это ${hour} ${h_other_t} `;
//         }
        
//         if (exclude_minute.includes(minutes) && minutes % 10 == one_minute) {
//             answer += `и ${minutes} ${one_minute_t}`
//         } else if (exclude_minute.includes(minutes) && arr_minutes.includes(minutes % 10)) {
//             answer += `и ${minutes} ${arr_minutes_t}`
//         } else {
//             answer += `и ${minutes} минут`
//         }
//     } else {
//         answer += `Ошибка, проверьте данные`
//     }
//     return answer;
// }

// console.log(getTimeFromMinutes(-150))


// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) == "number" && typeof(b) == "number" 
//         && typeof(c) == "number" && typeof(d) == "number") {
//             return Math.max(a, b, c, d);
//         } else {
//             return 0;
//         }
        
// }

// console.log(findMaxNumber(1, 5, '6', '10'))






function fib(number) {
    let answer = ``;
    if (Number.isInteger(number)) { 
        if (number >= 3) {
            let a = 0
            let b = 1
            let c = 1
            answer = `${a} ${b} ${c}`
            number -= 3;
            for (let i = 0; i < number; i++) {
                a = c;
                c += b;
                b = a;
                answer += ` ${c}`
            }
            return answer;
        } else if (number == 2) {
            return "0 1"
        } else if (number == 1) {
            return "0"
        } else {
            return answer;
        }
        
    } else {
        return answer;
    }
    
}


console.log(fib(0))

