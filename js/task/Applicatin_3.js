"use strict";

// Applicatin_3.js

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while (numberOfFilms == '' || numberOfFilms == null 
    || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Введите корректный ответ! Сколько фильмов вы уже посмотрели?', '')

    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actores: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (+personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (+personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     }
// }

// showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt( `Ваш любимый жанр под номером: ${i + 1}`, '');
        // personalMovieDB.genres.push(genre)
        // personalMovieDB.genres[i] = prompt( `Ваш любимый жанр под номером: ${i + 1}`, '');
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

showMyDB();





