"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actores: {},
    genres: [],
    privat: false
};

const question1_0 = prompt('Один из последних просмотренных фильмов?', ''),
      question2_0 = prompt('На сколько оцените его?', '');
      question1_1 = prompt('Один из последних просмотренных фильмов?', ''),
      question2_1 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[question1_0] = question2_0;
personalMovieDB.movies[question1_1] = question2_1;

console.log(personalMovieDB)





