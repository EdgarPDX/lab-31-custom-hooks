import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('renders CharacterList', () => {
    const { asFragment } = render(<CharacterList
      characters={[{
        name: 'Adam Pierce',
        occupation: 'Cult leader',
        image: 'https://vignette.wikia.nocookie.net/x-files/images',
        description: 'Scientist working at the CIT.'
      }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
