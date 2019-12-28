import React from 'react';
import './StationList.css';
import StationListItem from './StationListItem';

const radioStations = [
  {
    name: 'RelaxFM',
    freq: '100',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  }
];

const renderRadioStations = stations => stations.map(station => <StationListItem active={true} {...station} />);

function StationList() {
  return (
    <main className="stations">
      <ul className="stations-list">{renderRadioStations(radioStations)}</ul>
    </main>
  );
}

export default StationList;
