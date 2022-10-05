import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />,{ wrapper: BrowserRouter});
  // const user = userEvent.setup();
});
