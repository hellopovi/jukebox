import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

describe('Controls component tests', () => {
  describe('Default state', () => {
    it('renders component without crashing', () => {
      const div = document.createElement('div');
      render(<Controls />, div);
    });

    it('has all buttons disabled', () => {
      const div = document.createElement('div');
      const { getByTitle } = render(<Controls />, div);
      const volumeDown = getByTitle('Volume down');
      const volumeUp = getByTitle('Volume up');
      expect(volumeDown).toBeDisabled();
      expect(volumeUp).toBeDisabled();
    });

    it('has img element to display logo', () => {
      const div = document.createElement('div');
      const { getByAltText } = render(<Controls />, div);
      const logo = getByAltText('station logo');
      expect(logo).toBeInTheDocument();
    });

    it('has default css class to hide it', () => {
      const div = document.createElement('div');
      const { container } = render(<Controls />, div);
      expect(container.firstChild.classList.contains('controls')).toBe(true);
      expect(container.firstChild.classList.contains('controls--active')).toBe(false);
    });
  });

  describe('Active state', () => {
    it('renders component without crashing', () => {
      const div = document.createElement('div');
      render(<Controls isActive />, div);
    });

    it('has all buttons enabled', () => {
      const div = document.createElement('div');
      const { getByTitle } = render(<Controls isActive />, div);
      const volumeDown = getByTitle('Volume down');
      const volumeUp = getByTitle('Volume up');
      expect(volumeDown).toBeEnabled();
      expect(volumeUp).toBeEnabled();
    });

    it('shows image', () => {
      const div = document.createElement('div');
      const logoUrl = 'localhost:3000/logo.png';
      const { getByAltText } = render(<Controls isActive logo={logoUrl} />, div);
      const logo = getByAltText('station logo');
      expect(logo).toHaveAttribute('src', logoUrl);
    });

    it('has css class to show it', () => {
      const div = document.createElement('div');
      const { container } = render(<Controls isActive />, div);
      expect(container.firstChild.classList.contains('controls')).toBe(true);
      expect(container.firstChild.classList.contains('controls--active')).toBe(true);
    });
  });
});
