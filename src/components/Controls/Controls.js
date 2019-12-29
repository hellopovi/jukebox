import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Controls.css';

function Controls({ logo, isActive }) {
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

export default Controls;

Controls.defaultProps = {
  logo: '',
  isActive: false
};

const { string, bool } = PropTypes;

Controls.propTypes = {
  logo: string.isRequired,
  isActive: bool.isRequired
};
