import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Speaker from './Speaker';


describe('<Speaker />', () => {
  it('should call the speak function on click', () => {  // checks to make sure the speaker function works when you click the button
    const speakMock = jest.fn();
    const { getByText } = render(<Speaker speak={speakMock} />); // renders the Speaker component

    const speakButton = getByText(/speak/i); // finds the speak button

    fireEvent.click(speakButton);

    expect(speakMock).toHaveBeenCalled();
    });
});