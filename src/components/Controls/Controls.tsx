import React from 'react';
import classnames from 'classnames';
import './Controls.css';

type ControlsProps = {
  logo: string;
  isActive: boolean;
};

export default function Controls({ logo, isActive }: ControlsProps): JSX.Element {
  const className = classnames('controls', { 'controls--active': isActive });
  return (
    <div className={className}>
      <button
        disabled={!isActive}
        type="button"
        className="controls-button"
        aria-label="Volume down"
        title="Volume down"
      >
        <img className="controls-button-icon" src={`${process.env.PUBLIC_URL}minus.png`} alt="" />
      </button>
      <img className="controls-station-logo" src={logo} alt="station logo" />
      <button disabled={!isActive} type="button" className="controls-button" aria-label="Volume up" title="Volume up">
        <img className="controls-button-icon" src={`${process.env.PUBLIC_URL}plus.png`} alt="" />
      </button>
    </div>
  );
}
