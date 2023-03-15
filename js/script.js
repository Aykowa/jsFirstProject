"use strict";

//alert("hello");

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt('Vam est 18?','');
//console.log(answer+5);
//console.log(typeof(answer));

//const answers = [];
//answers[0] = prompt('Ваше имя?', '');
//answers[1] = prompt('Ваш возраст', '');
//answers[2] = prompt('Ваш город?', '');

//console.log(answers);
//document.write(answers);

//const result = confirm("Are you here?");

//const category = 'toys';

/*console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Hello, ${user}`);



const user = 'Ivan';

const user2 = 'Igor';

console.log(user + user2);

console.log("ivan" + "Igor");*/

//1-hw

//--------------

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?"," ");

const personalMovieDB = {
        
    count: numberOfFilms,
    movies: {},     
    actors: {} ,
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);