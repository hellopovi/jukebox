import React from 'react';
import './Footer.css';

type FooterProps = {
  activeStationName: string | undefined;
};

export default function Footer({ activeStationName }: FooterProps): JSX.Element {
  return (
    <footer className="footer">
      {activeStationName && (
        <>
          <p className="footer__title">Currently playing</p>
          <p data-testid="activeStation" className="footer__station">
            {activeStationName}
          </p>
        </>
      )}
    </footer>
  );
}
