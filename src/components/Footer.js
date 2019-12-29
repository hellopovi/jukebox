import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer({ activeStation }) {
  return (
    <footer className="footer">
      {activeStation && (
        <>
          <p className="footer__title">Currently playing</p>
          <p className="footer__station">ZipFM</p>
        </>
      )}
    </footer>
  );
}

Footer.propTypes = {
  activeStation: PropTypes.string.isRequired
};

export default Footer;
