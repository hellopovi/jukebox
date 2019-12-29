import React, { useState } from 'react';
import Header from './components/Header/Header';
import StationList from './components/StationList/StationList';
import Footer from './components/Footer/Footer';
import './App.css';

const radioStations = [
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
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    id: 'radio4',
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    id: 'radio5',
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  },
  {
    id: 'radio6',
    name: 'ZipFM',
    freq: '101.5',
    logo: 'https://static-media.streema.com/media/cache/c3/c0/c3c006a91b3d49470c8e4d6ab608c3ca.jpg'
  }
];

function useActiveStation(id) {
  const [activeStationId, setActiveStationId] = useState(id);
  function activateStation(id) {
    if (activeStationId === id) {
      setActiveStationId('');
      return;
    }
    setActiveStationId(id);
  }
  return [activeStationId, activateStation];
}

function findStation(radioStations, id) {
  const activeStation = radioStations.find(station => station.id === id);
  return activeStation?.name;
}

function App() {
  const [activeStation, setActiveStation] = useActiveStation('');
  return (
    <>
      <Header />
      <StationList stations={radioStations} activeStationId={activeStation} activateStation={setActiveStation} />
      <Footer activeStationName={findStation(radioStations, activeStation)} />
    </>
  );
}

export default App;
