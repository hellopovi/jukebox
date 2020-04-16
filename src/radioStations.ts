export type radioStation = {
  id: string;
  name: string;
  freq: string;
  logo: string;
};

const RADIO_STATIONS: radioStation[] = [
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
  },
  {
    id: 'radio3',
    name: 'BBC Radio1',
    freq: '99.1',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    id: 'radio4',
    name: 'BBC Radio 2',
    freq: '102.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    id: 'radio5',
    name: 'BBC Radio 3',
    freq: '105.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    id: 'radio6',
    name: 'KIIS FM',
    freq: '102.7',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  }
];

export function findStation(radioStations: radioStation[], id: string): string | undefined {
  const activeStation = radioStations.find(station => station.id === id);
  return activeStation?.name;
}

export default RADIO_STATIONS;