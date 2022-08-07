import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Stepone from './Stepone';

describe('Greeting component', () => {
    test('renders error if button is clicked first', () => {

        //Arrange
        <Stepone/>

        // Act
        const buttonElement = screen.getByRole('button')
        console.log(buttonElement)
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText('Errand field is empty!')
        expect(outputElement).toBeInTheDocument()
    })
})