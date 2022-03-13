const charactersRepository = require('../repositories/characters');
const movieCharacterRepository = require('../repositories/movieCharacter');
const status = require('../constants/statusCodes');
const messages = require('../constants/messages');
const fetch = require('./fetch');

let specie;
let characterSorted;
let newCharacter;

const bulkCreate = (movieid, characters) => {
  characters.forEach(async (character) => {
    const response = await fetch.getAny(character);

    if (response.species[0] === undefined) {
      characterSorted = {
        name: response.name,
        gender: response.gender,
        specie: null,
      };
      newCharacter = await charactersRepository.create(characterSorted);
    } else {
      specie = await fetch.getAny(response.species[0]);

      characterSorted = {
        name: response.name,
        gender: response.gender,
        specie: specie.name,
      };
      newCharacter = await charactersRepository.create(characterSorted);
    }

    if (!newCharacter) {
      const error = new Error(messages.INTERNAL_ERROR);
      error.status = status.INTERNAL_ERROR;
      throw error;
    }
    movieCharacterRepository.create(movieid, newCharacter.id);
    return newCharacter;
  });
};

module.exports = { bulkCreate };
