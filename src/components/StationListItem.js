import React from 'react';
import './StationListItem.css';
import Controls from './Controls';

function StationListItem({ name, freq, logo, active }) {
  return (
    <li className="stations-list-item stations-list-item--active">
      <div className="stations-list-item__details">
        <span>{name}</span>
        <span>{freq}</span>
      </div>
      <Controls logo={logo} active={false} />
    </li>
  );
}

export default StationListItem;
