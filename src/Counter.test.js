import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);

test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);

  // debug(); // Outputs dam as string
  const counterButton = getByTestId('counter-button');

  // assert counter-button is a button
  expect(counterButton.tagName).toBe('BUTTON');
  // assert counter-button starts at 0
  expect(counterButton.textContent).toBe('0');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('2');
  // debug(); //Outputs dom as string
});
