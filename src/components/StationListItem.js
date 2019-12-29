import React, { useState } from 'react';
import './StationListItem.css';
import Controls from './Controls';

function StationListItem({ key, name, freq, logo }) {
  const [active, setActive] = useState(false);
  const activeClassName = active ? ' stations-list-item--active' : '';
  return (
    <li key={key} className={['stations-list-item', activeClassName].join('')}>
      <div className="stations-list-item__details" onClick={() => setActive(!active)}>
        <span>{name}</span>
        <span className="stations-list-item__details--bold">{freq}</span>
      </div>
      <Controls logo={logo} active={active} />
    </li>
  );
}

export default StationListItem;
