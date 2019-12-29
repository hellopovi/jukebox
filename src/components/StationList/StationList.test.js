import React from 'react';
import { render } from '@testing-library/react';
import StationList from './StationList';

describe('StationList component tests', () => {
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    render(<StationList />, div);
  });

  it('renders main element with unordered empty list', () => {
    const div = document.createElement('div');
    const { container } = render(<StationList />, div);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="stations"
      >
        <ul
          class="stations-list"
        />
      </main>
    `);
  });

  it('correctly sets active state in list item', () => {
    const div = document.createElement('div');
    const station = {
      id: 'radio1',
      name: 'RelaxFM',
      freq: '100',
      logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
    };
    const { container } = render(<StationList stations={[station]} activeStationId="radio1" />, div);
    expect(container.querySelector('li')).toHaveAttribute('area-expanded', 'true');
  });
});
