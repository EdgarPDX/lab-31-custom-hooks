import { useEffect, useState } from 'react';
import { getCharacters } from '../services/Hey-Arnold-Api';


export const useCharacters = page => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(charactersArray => setCharacters(charactersArray));
      
  }, [page]);


  return {
    characters
  };
};


