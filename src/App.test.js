import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('renders main component without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('renders header in the page', () => {
    const { getByText } = render(<App />);
    const headerText = getByText(/stations/i);
    expect(headerText).toBeInTheDocument();
  });
});
