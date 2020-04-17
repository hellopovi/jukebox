import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component tests', () => {
  describe('Default state', () => {
    it('renders component without crashing', () => {
      render(<Controls />);
    });

    it('has all buttons disabled', () => {
      const { getByTitle } = render(<Controls />);
      const volumeDown = getByTitle('Volume down');
      const volumeUp = getByTitle('Volume up');
      expect(volumeDown).toBeDisabled();
      expect(volumeUp).toBeDisabled();
    });

    it('has img element to display logo', () => {
      const { getByAltText } = render(<Controls />);
      const logo = getByAltText('station logo');
      expect(logo).toBeInTheDocument();
    });

    it('has default css class to hide it', () => {
      const { container } = render(<Controls />);
      expect(container.firstChild.classList.contains('controls')).toBe(true);
      expect(container.firstChild.classList.contains('controls--active')).toBe(false);
    });
  });

  describe('Active state', () => {
    it('renders component without crashing', () => {
      render(<Controls isActive />);
    });

    it('has all buttons enabled', () => {
      const { getByTitle } = render(<Controls isActive />);
      const volumeDown = getByTitle('Volume down');
      const volumeUp = getByTitle('Volume up');
      expect(volumeDown).toBeEnabled();
      expect(volumeUp).toBeEnabled();
    });

    it('shows image', () => {
      const logoUrl = 'localhost:3000/logo.png';
      const { getByAltText } = render(<Controls isActive logo={logoUrl} />);
      const logo = getByAltText('station logo');
      expect(logo).toHaveAttribute('src', logoUrl);
    });

    it('has css class to show it', () => {
      const { container } = render(<Controls isActive />);
      expect(container.firstChild.classList.contains('controls')).toBe(true);
      expect(container.firstChild.classList.contains('controls--active')).toBe(true);
    });
  });
});
