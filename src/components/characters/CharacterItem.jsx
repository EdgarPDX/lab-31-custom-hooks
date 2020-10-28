import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => (
  <figure>
    <h4>Name</h4>
    <figcaption> {name}</figcaption>
    <img src={image} alt={name}/>
  </figure>
);


CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterItem;
