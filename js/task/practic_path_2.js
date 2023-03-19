"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actores: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?', ''),
        grade = prompt('На сколько оцените его?', '');

    if (movie.length != null && grade != null
         && movie != '' && grade != null 
         && movie.length < 50) {

        personalMovieDB.movies[movie] = grade;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
}

if (+personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (+personalMovieDB.count >= 10 && +personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (+personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     let movie = prompt('Один из последних просмотренных фильмов?', ''),
//     grade = prompt('На сколько оцените его?', '');

//     let isNotCheked = true;

//     if (movie.length != null && grade != null
//          && movie != '' && grade != null 
//          && movie.length < 50) {

//         personalMovieDB.movies[movie] = grade;

//     } else {
//         while (isNotCheked) {
//             movie = prompt('Вы что-то ввели не правильно! Введите еще раз. Один из последних просмотренных фильмов?', ''),
//             grade = prompt('Вы что-то ввели не правильно! Введите еще раз. На сколько оцените его?', '');
//             if (movie.length != null && grade != null
//                 && movie != '' && grade != null 
//                 && movie.length < 50) {
//                     isNotCheked = false;
//                 }
//         }
//     }
    
// }
// console.log(personalMovieDB)
// for (let i = 0; i < 2; i++) {
//     let isNotCheked = true;
//     while (isNotCheked) {
//         const movie = prompt('Один из последних просмотренных фильмов?', ''),
//               grade = prompt('На сколько оцените его?', '');
//         if (movie.length > 0 && movie.length < 50 && grade.length > 0 && grade.length < 50) {
//             isNotCheked = false
//         }
//     }

//     personalMovieDB.movies[movie] = grade;
// }



/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/









