import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Title from './Title';

test('Title Output', () => {
    render(<Title />)
    expect(screen.getByText(/Σurekα!/)).toHaveTextContent(
        'Σurekα!',
    )
})