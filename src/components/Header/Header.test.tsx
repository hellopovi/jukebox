import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component tests', () => {
  it('renders component without crashing', () => {
    render(<Header />);
  });

  it('renders Header with headline', () => {
    const { getByText } = render(<Header />);
    const headerText = getByText(/stations/i);
    expect(headerText).toBeInTheDocument();
  });
});
