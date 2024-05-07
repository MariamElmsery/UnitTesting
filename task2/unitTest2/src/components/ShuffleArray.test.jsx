import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShuffleList from './ShuffleList';
import ShuffleArray from './ShuffleArray';

test('renders ShuffleList component', () => {
  const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'];
  const { getByText,getByTestId} = render(<ShuffleArray items={items} />);
  
  // test if component renders
  const heading = getByText('Shuffle Array');
  expect(heading).toBeInTheDocument();
  
  // test if initial list renders
  items.forEach((item) => {
    const listItem = getByText(item);
    expect(listItem).toBeInTheDocument();
  });

  // test if Shuffle button renders
  const shuffleButton = getByText('Shuffle');
  expect(shuffleButton).toBeInTheDocument();

  // Click the Shuffle button
  fireEvent.click(shuffleButton);

  // test if the list gets shuffled
  const shuffledArray = getByTestId('shuffled-Array');
  const shuffledItems = shuffledList.getElementsByTagName('li');
  expect(shuffledItems.length).toEqual(items.length);
  items.forEach((item) => {
    expect(shuffledArray).toContainElement(getByText(item));
  });
});
