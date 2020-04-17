import React from 'react';
import classnames from 'classnames';
import Controls from '../Controls/Controls';
import './StationListItem.css';

type StationListItemProps = {
  id: string;
  name: string;
  freq: string;
  logo: string;
  isActive: boolean;
  onClick: (id: string) => void;
};

export default function StationListItem({
  id,
  name,
  freq,
  logo,
  isActive,
  onClick
}: StationListItemProps): JSX.Element {
  const itemClassName = classnames('stations-list-item', { 'stations-list-item--active': isActive });
  return (
    <li area-expanded={`${isActive}`} className={itemClassName}>
      <button
        type="button"
        className="stations-list-item__details"
        aria-label="Select station"
        title="Select station"
        onClick={() => onClick(id)}
      >
        <span className="stations-list-item__details-name">{name}</span>
        <span className="stations-list-item__details-freq">{freq}</span>
      </button>
      <Controls logo={logo} isActive={isActive} />
    </li>
  );
}
