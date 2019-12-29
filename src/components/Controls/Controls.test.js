import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component tests', () => {
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    render(<Controls />, div);
  });

  // it('renders Controls with headline', () => {
  //   const { getByText } = render(<Controls />);
  //   const headerText = getByText(/stations/i);
  //   expect(headerText).toBeInTheDocument();
  // });
});
