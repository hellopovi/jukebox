import React from 'react';
import PropTypes from 'prop-types';
import './Controls.css';

function Controls({ logo, active }) {
  return (
    <div className="controls">
      <button disabled={!active} type="button" className="controls-button" aria-label="Volume down" title="Volume down">
        <img className="controls-button-icon" src={`${process.env.PUBLIC_URL}minus.png`}></img>
      </button>
      <img className="controls-station-logo" src={logo} alt="station logo" />
      <button disabled={!active} type="button" className="controls-button" aria-label="Volume up" title="Volume up">
        <img className="controls-button-icon" src={`${process.env.PUBLIC_URL}plus.png`}></img>
      </button>
    </div>
  );
}

export default Controls;

Controls.propTypes = {
  logo: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};
