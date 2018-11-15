export const columns = {
  cost: 'Film cost',
  title: 'Title',
  year: 'Year',
  metascore: 'Metascore',
};

export const rows = [
  {
    cost: '2000 USD',
    title: 'Vikings',
    year: 1993,
    metascore: 12,
    _id: '1',
  }, {
    cost: '1000 USD',
    title: 'Breaking Bad',
    year: 2000,
    metascore: 15,
    _id: '2',
  }, {
    cost: '3000 USD',
    title: 'Suits',
    year: 2010,
    metascore: 20,
    _id: '3',
  }, {
    cost: '10000 USD',
    title: 'Friends',
    year: 1345,
    metascore: 2,
    _id: '4',
  }, {
    cost: '1 USD',
    title: 'Sherlock Holmes',
    year: 2015,
    metascore: 32,
    _id: '5',
  },
];

export const singleActor = {
  _id: '5bbb4aa99279d03578598282',
  imdbId: 'nm0000093',
  name: 'Brad Pitt',
  birthday: 'Wed Dec 18 1963 01:00:00 GMT+0100',
  country: 'USA',
  gender: 'male',
  photoUrl: 'http://example.com/api/v1/assets/img/actor/nm0000093.jpg',
};

export const singleMovie = {
  _id: '5bbb4aa99279d03578598282',
  imdbId: 'nm0000093',
  title: 'World War Z',
  director: 'David Fincher',
  year: 2013,
  metascore: 63,
  actors: [
    {
      imdbId: 'nm0000093',
      name: 'Brad Pitt',
    },
    {
      imdbId: 'nm0749263',
      name: 'Mark Ruffalo',
    },
  ],
  posterUrl: 'http://example.com/api/v1/assets/img/actor/nm0000093.jpg',
};

export const movies = [
  {

    _id: '5be5473892df05190b72f305',
    imdbId: 'tt0848228',
    title: 'Avengers',
    director: 'Joss Whedon',
    year: 2012,
    metascore: 69,
    actors: [
      {
        imdbId: 'nm0000375',
        name: 'Robert Downey Jr.',
      },
    ],
    posterUrl: 'http://marblejs-example.herokuapp.com/api/v1/assets/img/movie/tt0848228.jpg',
  },
  {
    _id: '5be5473892df05190b72f306',
    imdbId: 'tt2395427',
    title: 'Avengers: Age of Ultron',
    director: 'Joss Whedon',
    year: 2015,
    metascore: 66,
    actors: [
      {
        imdbId: 'nm0000375',
        name: 'Robert Downey Jr.',
      },
    ],
    posterUrl: 'http://marblejs-example.herokuapp.com/api/v1/assets/img/movie/tt2395427.jpg',
  },
];
