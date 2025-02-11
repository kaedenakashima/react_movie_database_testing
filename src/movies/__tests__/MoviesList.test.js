import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import MoviesList from '../MoviesList';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'dfghkkh'
  }
};

console.error = jest.fn();

const movies = {
  success: true,
  results: [
    {
      id: 'hi',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg'
    },
    {
      id: 'hiz',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg'
    },
    {
      id: 'hifkjg',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg'
    }
  ]
};

const movie = movies.results[0];

test('<MoviesList /> api fail', async () => {
  movies.success = false;
  fetch.mockResponseOnce(JSON.stringify(movies));

  const { getByTestId, queryByTestId, getAllByTestId, debug } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  expect(getByTestId('loading')).toBeTruthy();
});
