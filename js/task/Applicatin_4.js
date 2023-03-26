"use strict";

"use strict";

// Applicatin_4.js

// @ts-ignore
let numberOfFilms;

// function start() {
//     // @ts-ignore
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

//     // @ts-ignore
//     while (numberOfFilms == '' || numberOfFilms == null 
//     || isNaN(numberOfFilms)) {
//         // @ts-ignore
//         numberOfFilms = +prompt('Введите корректный ответ! Сколько фильмов вы уже посмотрели?', '')

//     }
// }

// start();



const personalMovieDB = {
    count: 0,
    movies: {},
    actores: {},
    genres: [],
    privat: false,
    start: function () {

        // numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')

        // @ts-ignore
        while (numberOfFilms == '' || personalMovieDB.count == null 
        || isNaN(personalMovieDB.count)) {
            // @ts-ignore
            personalMovieDB.count = +prompt('Введите корректный ответ! Сколько фильмов вы уже посмотрели?', '')

        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let movie = prompt('Один из последних просмотренных фильмов?', ''),
                grade = prompt('На сколько оцените его?', '');
        
            // @ts-ignore
            if (movie.length != null && grade != null
                 && movie != '' && grade != null 
                 // @ts-ignore
                 && movie.length < 50) {
        
                personalMovieDB.movies[movie] = grade;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
            
        }
    },
    detectPersonalLevel: function() {
        // @ts-ignore
        if (+personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        // @ts-ignore
        } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        // @ts-ignore
        } else if (+personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function() {
        // for (let i = 0; i < 3; i++) {
        //     let genre = prompt( `Ваш любимый жанр под номером: ${i + 1}`, '');
        //     if (genre == '' || genre == null) {
        //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i] = genre;
        //     }

        // }

        for (let i = 0; i < 1; i++) {

            let genres = prompt( `Ваш любимый жанр через запятую`)?.toLocaleUpperCase();

            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(`, `);
                // Сортировка по алфавиту
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let movie = prompt('Один из последних просмотренных фильмов?', ''),
//             grade = prompt('На сколько оцените его?', '');
    
//         // @ts-ignore
//         if (movie.length != null && grade != null
//              && movie != '' && grade != null 
//              // @ts-ignore
//              && movie.length < 50) {
    
//             personalMovieDB.movies[movie] = grade;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
        
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//     // @ts-ignore
//     if (+personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     // @ts-ignore
//     } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     // @ts-ignore
//     } else if (+personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (!personalMovieDB.privat) {
//         console.log(personalMovieDB)
//     }
// }

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
// }

// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         const genre = prompt( `Ваш любимый жанр под номером: ${i + 1}`, '');
//         // personalMovieDB.genres.push(genre)
//         // personalMovieDB.genres[i] = prompt( `Ваш любимый жанр под номером: ${i + 1}`, '');
//         // @ts-ignore
//         personalMovieDB.genres[i] = genre;
//     }
// }

// writeYourGenres();

// showMyDB();















