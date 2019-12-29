import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer({ activeStationName }) {
  return (
    <footer className="footer">
      {activeStationName && (
        <>
          <p className="footer__title">Currently playing</p>
          <p className="footer__station">{activeStationName}</p>
        </>
      )}
    </footer>
  );
}

Footer.defaultProps = {
  activeStationName: ''
};

const { string } = PropTypes;

Footer.propTypes = {
  activeStationName: string
};

export default Footer;
