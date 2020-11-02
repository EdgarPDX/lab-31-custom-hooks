import React, { useState } from 'react';
import CharacterList from '../../components/characters/CharacterList';


const AllCharacters = () => {

  const [page, setPage] = useState(1);


  return (
    <>
      <button
        onClick={() => setPage(page => page - 1)} 
        disabled={page <= 1}>
        Previous Page
      </button>
      <button
        onClick={() => setPage(page => page + 1)}>
        Next Page
      </button>
      <CharacterList page={page}/>
    </>
  );
};

export default AllCharacters;
