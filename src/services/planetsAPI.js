const fetchPlanets = async () => {
  const request = await fetch('https://swapi.dev/api/planets/');
  const response = request.json();
  return response;
};

export default fetchPlanets;
