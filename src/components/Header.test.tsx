import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('render header correct', () => {
    render(<Header />)
    const headerText = screen.getByText(/Dog Catalog/i)
    expect(headerText).toBeInTheDocument();
})
