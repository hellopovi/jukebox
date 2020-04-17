import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component tests', () => {
  const activeStationName = 'ZipFM';
  it('renders component without crashing', () => {
    render(<Footer activeStationName={activeStationName} />);
  });

  it('renders footer without any text if activeStationName prop is not provided', () => {
    const { container } = render(<Footer activeStationName='' />);
    expect(container.firstChild).toMatchInlineSnapshot(`
    <footer
      class="footer"
    />
  `);
  });

  it('renders footer with text if activeStationName prop is provided', () => {
    const { getByText } = render(<Footer activeStationName={activeStationName} />);
    const footerText = getByText(/currently playing/i);
    const stationName = getByText(/ZipFM/i);
    expect(footerText).toBeInTheDocument();
    expect(stationName).toBeInTheDocument();
  });
});
