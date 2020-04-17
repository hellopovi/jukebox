import React, { useState, useEffect } from 'react';
import RADIO_STATIONS, { findStation, radioStation } from '../radioStations';
import Header from './Header/Header';
import StationList from './StationList/StationList';
import Footer from './Footer/Footer';
import './App.css';

function useActiveStationId(id: string) {
  const [activeStationId, setActiveStationId] = useState(id);
  function activateStation(stationId: string): void {
    if (activeStationId === stationId) {
      setActiveStationId('');
      return;
    }
    setActiveStationId(stationId);
  }
  return [activeStationId, activateStation] as const;
}

export default function App(): JSX.Element {
  const [activeStationId, setActiveStationId] = useActiveStationId('');
  const [stations, setStations] = useState<radioStation[]>([]);

  useEffect(() => {
    async function getData(): Promise<void> {
      setStations(RADIO_STATIONS);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <StationList stations={stations} activeStationId={activeStationId} activateStation={setActiveStationId} />
      <Footer activeStationName={findStation(stations, activeStationId)} />
    </>
  );
}
