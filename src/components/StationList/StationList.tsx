import React from 'react';
import { radioStation } from '../../radioStations';
import './StationList.css';
import StationListItem from '../StationListItem/StationListItem';

type StationListProps = {
  stations: radioStation[];
  activateStation: (id: string) => void;
  activeStationId: string;
};

export default function StationList({ stations, activeStationId, activateStation }: StationListProps): JSX.Element {
  return (
    <main className="stations">
      <ul className="stations-list">
        {stations.map(station => (
          <StationListItem
            key={station.id}
            {...station}
            onClick={activateStation}
            isActive={station.id === activeStationId}
          />
        ))}
      </ul>
    </main>
  );
}
