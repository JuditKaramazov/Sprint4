const movies = require('../src/data');
const {
  getAllDirectors,
  getMoviesFromDirector,
  moviesAverageOfDirector,
  orderAlphabetically,
  orderByYear,
  moviesAverageByCategory,
  hoursToMinutes,
  bestFilmOfYear,
} = require('../src/films');

// Exercise 1
describe('Function "getAllDirectors"', () => {
  it('should be declared', () => {
    expect(typeof getAllDirectors).toBe('function');
  });

  it('should return an array', () => {
    expect(getAllDirectors(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(getAllDirectors(movies)).not.toEqual(movies);
  });

  it('should return a new array with the same length as the original one', () => {
    const testArr = [
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ];
    expect(getAllDirectors(testArr)).toEqual([
      'Stanley Kubrick',
      'Quentin Tarantino'
    ]);
  });
});

// Exercise 2
describe('Function "getMoviesFromDirector"', () => {
  it('should be declared', () => {
    expect(typeof getMoviesFromDirector).toBe('function');
  });

  it('should return an array', () => {
    expect(getMoviesFromDirector(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(getMoviesFromDirector(movies)).not.toEqual(movies);
  });

  it('should return a new array with the movies from director', () => {
    const testArr = [
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ];
    expect(getMoviesFromDirector(testArr, 'Quentin Tarantino')).toEqual([
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      }
    ]);
  });

});

// Exercise 3
describe('Function "moviesAverageOfDirector"', () => {
  it('should be declared', () => {
    expect(typeof moviesAverageOfDirector).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof moviesAverageOfDirector(movies, 'Stanley Kubrick')).toBe('number');
  });

  it(' should return the average score of movies selecting only the director films. With 2 decimals! ', () => {
    expect(moviesAverageOfDirector([
      {
        title: 'Paths of Glory',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Django Unchained',
        year: 2012,
        director: 'Quentin Tarantino',
        duration: '2h 45min',
        genre: ['Drama', 'Western'],
        score: 8.4
      },
      {
        title: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        duration: '2h 34min',
        genre: ['Crime', 'Drama'],
        score: 8.9
      }
    ], 'Quentin Tarantino')).toBe(8.65);
  });

});

// Exercise 4
describe('Function "orderAlphabetically"', () => {
  it('should be declared', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderAlphabetically([])).toBe('object');
  });

  it('should not mutate the original array', () => {
    const arr = [{ title: 'xyz' }, { title: 'abc' }];
    orderAlphabetically(arr);
    expect(arr[0].title).toEqual('xyz');
  });

  it('should only return the title of the movies, each value should be a string', () => {
    expect(typeof orderAlphabetically([{ title: 'aab' }])[0]).toBe('string');
  });

  it('should return all of items when the array passed has fewer than 20 items', () => {
    const moviesArr = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];
    expect(orderAlphabetically(moviesArr)).toHaveLength(3);
  });

  it('should order them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'aaa' },
      { title: 'abc' },
      { title: 'acb' },
      { title: 'abb' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'abb',
      'abc',
      'acb'
    ]);
  });

  it('should return the top 20 after ordering them alphabetically.', () => {
    const moviesArr = [
      { title: 'aab' },
      { title: 'bab' },
      { title: 'acb' },
      { title: 'aaa' },
      { title: 'bbb' },
      { title: 'anc' },
      { title: 'kns' },
      { title: 'zds' },
      { title: 'pow' },
      { title: 'gda' },
      { title: 'res' },
      { title: 'ter' },
      { title: 'bca' },
      { title: 'ccc' },
      { title: 'bbt' },
      { title: 'qas' },
      { title: 'kmn' },
      { title: 'frt' },
      { title: 'afb' },
      { title: 'agb' },
      { title: 'apo' },
      { title: 'poa' },
      { title: 'cdf' },
      { title: 'sea' },
      { title: 'lom' },
      { title: 'acs' },
      { title: 'qas' },
      { title: 'mns' },
      { title: 'bvc' },
      { title: 'gha' },
      { title: 'lkj' },
      { title: 'era' },
      { title: 'ert' },
      { title: 'tex' },
      { title: 'zas' },
      { title: 'pol' }
    ];

    expect(orderAlphabetically(moviesArr)).toEqual([
      'aaa',
      'aab',
      'acb',
      'acs',
      'afb',
      'agb',
      'anc',
      'apo',
      'bab',
      'bbb',
      'bbt',
      'bca',
      'bvc',
      'ccc',
      'cdf',
      'era',
      'ert',
      'frt',
      'gda',
      'gha'
    ]);
  });
});

// Exercise 5
describe('Function "orderByYear"', () => {
  it('should be declared', () => {
    expect(typeof orderByYear).toBe('function');
  });

  it('should return an array', () => {
    expect(typeof orderByYear(movies)).toBe('object');
  });

  it('should return a new array', () => {
    const arr = [];
    expect(orderByYear(arr)).not.toBe(arr);
  });

  it('should return the element in a single element array', () => {
    expect(orderByYear([{ year: 1982 }])).toEqual([{ year: 1982 }]);
  });

  it('should return the new array in ascending order', () => {
    expect(
      orderByYear([{ year: 2002 }, { year: 1982 }, { year: 1995 }])
    ).toEqual([{ year: 1982 }, { year: 1995 }, { year: 2002 }]);
  });

  it('should order movies with the same year by their title, alphabetically', () => {
    expect(
      orderByYear([
        { title: 'abc', year: 2002 },
        { title: 'bac', year: 1982 },
        { title: 'aab', year: 1982 }
      ])
    ).toEqual([
      { title: 'aab', year: 1982 },
      { title: 'bac', year: 1982 },
      { title: 'abc', year: 2002 }
    ]);
  });
});

// Exercise 6
describe('Function "moviesAverageByCategory"', () => {
  it('should be declared', () => {
    expect(typeof moviesAverageByCategory).toBe('function');
  });

  it('should return a number', () => {
    expect(typeof moviesAverageByCategory(movies, 'Drama')).toBe('number');
  });

  it(' should return the average score of 2 movies with score 7 each', () => {
    expect(moviesAverageByCategory([
      { score: 7,
        genre: ['Drama'], 
      },
      { score: 7,
        genre: ['Drama'], 
      }
    ],
    'Drama')).toBe(7);
  });

  it('should be rounded to 2 decimals places', () => {
    expect(moviesAverageByCategory([
      { score: 7,
        genre: ['Drama'], 
      },
      { score: 6,
        genre: ['Drama'], 
      }
    ],
    'Drama')).toBe(6.50);
  });

  it('should not take into consideration films of other category', () => {
    expect(moviesAverageByCategory([
      { score: 5,
        genre: ['Drama'], 
      },
      { score: 10,
        genre: ['Action'], 
      },
      { score: 10,
        genre: ['Action'], 
      }
    ],
    'Action')).toBe(10);
  });

  /* Bug fixing, to review 
  it('should return average even if one of the movies does not have score', () => {
    expect(moviesAverageByCategory([{ score: 6 }, { score: '' }, {}])).toBe(2);
  });
  */
  it('should return average even if one of the movies does not have score', () => {
    expect(moviesAverageByCategory([
      { score: 5,
        genre: ['Action'], 
      },
      { score: '',
        genre: ['Action'], 
      }
    ],
    'Action')).toBe(5);
  });

});

// Exercise 7
describe('Function "hoursToMinutes"', () => {
  it('should be declared', () => {
    expect(typeof hoursToMinutes).toBe('function');
  });

  it('should return an array', () => {
    expect(hoursToMinutes(movies) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(hoursToMinutes(movies)).not.toEqual(movies);
  });

  it('should return an array of movies with duration as a number', () => {
    expect(typeof hoursToMinutes(movies)[0].duration).toBe('number');
  });

  it('should return an array of movies with the correct duration for a 31 minute movie', () => {
    const movieTry = [{ duration: '0h 31min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(31);
  });

  it('should return an array of movies with the correct duration for a 341 minute movie', () => {
    const movieTry = [{ duration: '5h 41min' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(341);
  });

  it('should return an array of movies with the correct duration for a 2 hour movie', () => {
    const movieTry = [{ duration: '2h' }];
    expect(hoursToMinutes(movieTry)[0].duration).toBe(120);
  });
});

// Exercise 8
describe('Function "bestFilmOfYear"', () => {
  it('should be declared', () => {
    expect(typeof bestFilmOfYear).toBe('function');
  });

  it('should return an array', () => {
    expect(bestFilmOfYear(movies, 1999) instanceof Array).toBe(true);
  });

  it('should return a new array, not update the original one', () => {
    expect(bestFilmOfYear(movies, 1999)).not.toEqual(movies);
  });

  it('should return the best film of a year, searching in an array', () => {
    const testArr = [
      {
        title: 'Film1',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 10
      },
      {
        title: 'Film2',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 8.4
      },
      {
        title: 'Film3',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 5
      },
    ];
    expect(bestFilmOfYear(testArr, 1957)).toEqual([
      {
        title: 'Film1',
        year: 1957,
        director: 'Stanley Kubrick',
        duration: '1h 28min',
        genre: ['Drama', 'War'],
        score: 10
      }
    ]);
  });

});
