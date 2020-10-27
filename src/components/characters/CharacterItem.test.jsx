import React from 'react';
import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';


describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(<CharacterItem
      name="Adam Pierce"
      occupation="Cult leader"
      image="https://vignette.wikia.nocookie.net/x-files/images"
      description="Scientist working at the California Institute of Technology."
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
