const fetchPlanets = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = request.json();
  return response;
};

export default fetchPlanets;
