import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';

test('render Contianer correct', () => {
    render(<Container />)
    const containerElement = screen.getByTestId('container')
    expect(containerElement).toBeInTheDocument();
})
