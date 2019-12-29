import React from 'react';
import { render } from '@testing-library/react';
import App, { findStation } from './App';

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

  // it('activate radio station', () => {
  //   const { getByTitle, container } = render(<App />);
  //   const stationButton = getByTitle('Select station');
  //   fireEvent.click(stationButton);
  //   container.
  // });

  describe('findStation helper function', () => {
    const stations = [
      {
        id: 'radio1',
        name: 'RelaxFM',
        freq: '100',
        logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
      },
      {
        id: 'radio2',
        name: 'ZipFM',
        freq: '101.5',
        logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
      }
    ];
    const stationId = 'radio2';

    it('returns station name', () => {
      expect(findStation(stations, stationId)).toBe(stations[1].name);
      expect(findStation(stations, 'radio3')).toBe(undefined);
    });
  });
});
