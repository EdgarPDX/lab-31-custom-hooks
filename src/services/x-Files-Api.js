export const getCharacters = async() => {
  const res = await 
  fetch('https://xfiles-api.herokuapp.com/api/v1/characters/');
  const ok = res.ok;
  const json = await res.json();
  if(!ok) throw 'Unable to fetch Characters from API';

  return json.results.map(character => ({
    name: character.name,
    occupation: character.occupation,
    image: character.image,
    description: character.description
  }));
};
