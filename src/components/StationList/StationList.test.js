import React from 'react';
import { render } from '@testing-library/react';
import StationList from './StationList';

describe('StationList component tests', () => {
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    render(<StationList />, div);
  });

  // it('renders StationList with headline', () => {
  //   const { getByText } = render(<StationList />);
  //   const headerText = getByText(/stations/i);
  //   expect(headerText).toBeInTheDocument();
  // });
});
