import React from 'react';
import { render } from '@testing-library/react';
import StationList from './StationList';

describe('StationList component tests', () => {
  const activeStationId = 'radio1';
  const station = {
    id: 'radio1',
    name: 'RelaxFM',
    freq: '100',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const activateStation = () => {};

  it('renders component without crashing', () => {
    render(<StationList stations={[station]} activeStationId={activeStationId} activateStation={activateStation} />);
  });

  it('renders main element with unordered empty list', () => {
    const { container } = render(
      <StationList stations={[]} activeStationId={activeStationId} activateStation={activateStation} />
    );
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
    const { container } = render(
      <StationList stations={[station]} activeStationId={activeStationId} activateStation={activateStation} />
    );
    expect(container.querySelector('li')).toHaveAttribute('area-expanded', 'true');
  });
});
