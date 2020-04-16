import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('renders main component without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('renders header in the page', () => {
    const { getByText } = render(<App />);
    const headerText = getByText(/stations/i);
    expect(headerText).toBeInTheDocument();
  });

  it('should activate radio station', async () => {
    const { getByTestId, container } = render(<App />);
    const [stationButton] = await waitForElement(() => [container.querySelector('.stations-list-item > button')], {
      container
    });
    const selectedStation = stationButton.querySelector('.stations-list-item__details-name');
    fireEvent.click(stationButton);
    const activeStation = getByTestId('activeStation');
    expect(selectedStation.textContent).toBe(activeStation.textContent);
  });

  it('should deactivate radio station', async () => {
    const { container } = render(<App />);
    const [stationButton] = await waitForElement(() => [container.querySelector('.stations-list-item > button')], {
      container
    });
    const footer = container.querySelector('footer');
    fireEvent.click(stationButton);
    fireEvent.click(stationButton);
    expect(footer).toMatchInlineSnapshot(`
    <footer
      class="footer"
    />
  `);
  });
});
