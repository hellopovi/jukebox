import React, { useState, useEffect } from 'react';
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

export function findStation(radioStations, id) {
  const activeStation = radioStations.find(station => station.id === id);
  return activeStation?.name;
}

function App() {
  const [activeStation, setActiveStation] = useActiveStation('');
  const [stations, setStations] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('http://www.mocky.io/v2/5e08f54b300000610081a16b', { method: 'GET' });
  //     const stationsData = await response.json();
  //     setStations(stationsData);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <Header />
      <StationList stations={radioStations} activeStationId={activeStation} activateStation={setActiveStation} />
      <Footer activeStationName={findStation(radioStations, activeStation)} />
    </>
  );
}

export default App;
