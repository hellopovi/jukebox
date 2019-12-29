import React from 'react';
import PropTypes from 'prop-types';
import './StationList.css';
import StationListItem from '../StationListItem/StationListItem';

function StationList({ stations, activeStationId, activateStation }) {
  return (
    <main className="stations">
      <ul className="stations-list">
        {stations.map(station => {
          return (
            <StationListItem
              key={station.id}
              {...station}
              onClick={activateStation}
              isActive={station.id === activeStationId}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default StationList;

StationList.defaultProps = {
  stations: [],
  activateStation: () => {}
};

const { arrayOf, shape, string, func } = PropTypes;

StationList.propTypes = {
  stations: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      freq: string.isRequired,
      logo: string.isRequired
    })
  ),
  activeStationId: string,
  activateStation: func.isRequired
};
