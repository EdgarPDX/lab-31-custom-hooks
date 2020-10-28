import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from './CharacterItem';
import { useCharacters } from '../../hooks/characters';

const CharacterList = ({ page }) => {
  const { characters } = useCharacters(page);

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <CharacterItem {...character}  />
    </li>
  ));

  return (
    <ul data-testid="character">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
