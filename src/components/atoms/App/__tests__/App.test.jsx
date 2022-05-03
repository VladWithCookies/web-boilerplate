import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders correct header', () => {
    render(<App />);

    expect(screen.getByText('Welcome to WEB Boilerplate!')).toBeInTheDocument();
  });
});
