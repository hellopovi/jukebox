import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Controls from '../Controls/Controls';
import './StationListItem.css';

function StationListItem({ id, name, freq, logo, isActive, onClick }) {
  const itemClassName = classnames('stations-list-item', { 'stations-list-item--active': isActive });
  return (
    <li area-expanded={isActive + ''} className={itemClassName}>
      <button className="stations-list-item__details" onClick={() => onClick(id)}>
        <span>{name}</span>
        <span className="stations-list-item__details--bold">{freq}</span>
      </button>
      <Controls logo={logo} isActive={isActive} />
    </li>
  );
}

export default StationListItem;

StationListItem.defaultProps = {
  id: '',
  name: '',
  freq: '',
  logo: '',
  isActive: false,
  onClick: () => {}
};

const { string, func, bool } = PropTypes;

StationListItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  freq: string.isRequired,
  logo: string.isRequired,
  isActive: bool.isRequired,
  onClick: func.isRequired
};
