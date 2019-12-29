import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import StationListItem from './StationListItem';

describe('StationListItem component tests', () => {
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    render(<StationListItem />, div);
  });

  describe('default state', () => {
    describe('onClick event on radio station', () => {
      const station = {
        id: 'radio1',
        name: 'RelaxFM',
        freq: '100',
        logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg',
        isActive: false
      };
      const div = document.createElement('div');
      const callback = jest.fn();
      const { getByTitle, container } = render(<StationListItem {...station} onClick={callback} />, div);
      const stationButton = getByTitle('Select station');
      fireEvent.click(stationButton);

      it('calls callback once', () => {
        expect(callback).toHaveBeenCalledTimes(1);
      });

      it('sets right css classes', () => {
        waitForElement(() => expect(container.firstChild).toHaveClass('stations-list-item--active'));
      });

      it('sets accessibility tags', () => {
        waitForElement(() => expect(container.firstChild).toHaveAttribute('area-expanded', 'true'));
      });
    });
  });

  describe('expanded state', () => {
    // describe('onClick event on radio station', () => {
    //   const station = {
    //     id: 'radio1',
    //     name: 'RelaxFM',
    //     freq: '100',
    //     logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg',
    //     isActive: true
    //   };
    //   const div = document.createElement('main');
    //   const callback = jest.fn();
    //   const { getByTitle, container } = render(<StationListItem {...station} onClick={callback} />, div);
    // const stationButton = getByTitle('Select station');
    // fireEvent.click(stationButton);
    // it('calls callback once', () => {
    //   expect(callback).toHaveBeenCalledTimes(1);
    // });
    // it('sets right css classes', () => {
    //   waitForElement(() => expect(container.firstChild).toHaveClass('stations-list-item'));
    // });
    // it('sets accessibility tags', () => {
    //   waitForElement(() => expect(container.firstChild).toHaveAttribute('area-expanded', 'false'));
    // });
    // });
  });
});
