import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, occupation, image, description }) => (
  <figure>
    <figcaption>Name: {name}</figcaption>
    <img src={image} alt={name}/>
    <figcaption>Occupation: {occupation}</figcaption>
    <p>{description}</p>
  </figure>
);


CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CharacterItem;
