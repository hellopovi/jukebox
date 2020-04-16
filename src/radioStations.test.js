import { findStation } from './radioStations';

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
