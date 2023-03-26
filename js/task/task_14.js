"use strict";

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

// function sortStudentsByGroups(arr) {
//     let new_students = [];
//     let is_first = true;

//     arr.sort();
//     let arr_free_stud = [];
//     let other_str = "Оставшиеся студенты:";

//     for (let j = 0; j < arr.length; j++) {
//         let i = j + 1

//         if (i <= 9) {
//             arr_free_stud.push(arr[j])
            
//         } else {
//             if (is_first) {
//                 other_str += ` ${arr[j]}`;
//                 is_first = false;
//             } else {
//                 other_str += `, ${arr[j]}`;
//             }
            
//             if (i == arr.length) {
//                 // console.log(`test`)
//                 new_students.push(other_str)
//             }
//         }

//         if (i % 3 == 0 && i <= 9) {
//             new_students.push(arr_free_stud)
//             arr_free_stud = []
//         }

//         if (i == 9 && arr.length == 9) {
//             console.log("зашёл")
//             other_str += ` -`;
//             new_students.push(other_str)
//         }
        
//         console.log(`i = ${i}, legth: ${arr.length}`)
        
//     }
//     return new_students;
// }


// console.log(sortStudentsByGroups(students))



// Лучший вариант

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);



