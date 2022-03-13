const fetch = require('node-fetch');

const getMovie = async (id) => {
  let response = await fetch(`https://swapi.dev/api/films/${id}`);
  response = await response.json();
  return response;
};

const getAny = async (link) => {
  let response = await fetch(link);
  response = await response.json();
  return response;
};

module.exports = { getMovie, getAny };
