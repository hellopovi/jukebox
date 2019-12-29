import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Controls.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  freq: PropTypes.string.isRequired,
  logo: PropTypes.bool.isRequired
};
