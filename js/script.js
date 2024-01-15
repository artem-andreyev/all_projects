let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

const question = prompt("Один из последних просмотренных фильмов?");
const question_1 = prompt("На сколько оцените его?");
const question2 = prompt("Один из последних просмотренных фильмов?");
const question_2 = prompt("На сколько оцените его?");

personalMovieDB.movies[question] = question_1;
personalMovieDB.movies[question2] = question_2;

console.log(personalMovieDB);

// JavaScript : Cannot open local file - Chrome: Not allowed to load local resource в браузере