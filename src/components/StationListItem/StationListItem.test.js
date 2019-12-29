import React from 'react';
import { render } from '@testing-library/react';
import StationListItem from './StationListItem';

describe('StationListItem component tests', () => {
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    render(<StationListItem />, div);
  });

  // it('renders StationListItem with headline', () => {
  //   const { getByText } = render(<StationListItem />);
  //   const headerText = getByText(/stations/i);
  //   expect(headerText).toBeInTheDocument();
  // });
});
