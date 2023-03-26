// Exercise 1: Get the array of all directors.
// Implement a loop.map going through the entire movies array.
function getAllDirectors(movies) {
  let result =  movies.map((film) => film.director);
  return result;
};

// Exercise 2: Get the films of a certain director.
// Implement the .filter() method.
function getMoviesFromDirector(array, director) {
  let result = array.filter(film => film.director.includes(director));
  return result;
};

// Exercise 3: Calculate the average of the films of a given director.
// Implement the .reduce() method in order to get the desired value.
function moviesAverageOfDirector(array, director) {
  let directorAverage = array.filter((film) =>
  film.director.includes(director)
  );
  let sumScores = directorAverage.reduce((accumulator, element) => accumulator + element.score, 0);
  let result = sumScores / directorAverage.length;
  return Math.round(result * 100) / 100;
};

// Exercise 4:  Alphabetical order by title.
function orderAlphabetically(movies) {
  let sortedMovies = movies.map((film) => film.title).sort();
  let sortedTwentyTitles = sortedMovies.slice(0, 20);
  return sortedTwentyTitles;
};

// Exercise 5: Order by year, ascending.
// In case the years are coincident, we're prioritising the alphabetical order.
function orderByYear(array) {
  const sortedByYear = [...array];
  sortedByYear.sort((firstFilm, secondFilm) =>
    (firstFilm.year < secondFilm.year) ? 
    -1 : (firstFilm.year === secondFilm.year) ? 
    ((firstFilm.title > secondFilm.title) ? 
    1 : (-1)) : 1);
  return sortedByYear;
};

// Exercise 6: Calculate the average of the movies in a category.
function moviesAverageByCategory(array, category) {
  const moviesByCategory = array.filter((film) =>
  film.genre.includes(category) && typeof film.score === 'number');
  let scores = moviesByCategory.map((film) => film.score);
  let genreAverage = parseFloat(
    (scores.reduce((firstFilm, secondFilm) => firstFilm + secondFilm) / scores.length).toFixed(2)
  );
    return genreAverage;
};

// Exercise 7: Modify the duration of movies to minutes.
function hoursToMinutes(movies) {
  let result = movies.map((film) => {
    let duration = film.duration;
    let indexHours = duration.indexOf('h');
    let indexMinutes = duration.indexOf('min');
    let hours = parseInt(duration.substr(0, indexHours).trim());
    let minutes = 0;
    
    if (duration.indexOf('min') !== -1) {
      minutes = parseInt(duration.substr(indexHours +1, indexMinutes).trim());
    }
    let totalInMinutes = {
      duration: hours * 60 + minutes
    };
    return totalInMinutes;
  });
  return result;
};

// Exercise 8: Get the best film of a year.
function bestFilmOfYear(movies, year) {
  let moviesByYear = movies.filter(film => film.year === year);
  let bestByYear = moviesByYear.sort((firstFilm, secondFilm) => secondFilm.score - firstFilm.score);
  let bestFilm = Array.of(bestByYear[0]);
  return bestFilm;
};

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
};