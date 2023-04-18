import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import fetchPlanets from '../services/planetsAPI';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numericFilters, setNumericFilters] = useState([]);
  const [columns, setColumns] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 0 },
  });

  useEffect(() => setFilteredPlanets(planets
    .filter((planet) => planet
      .name.includes(filters.filterByName.name))), [filters.filterByName.name, planets]);

  const getPlanets = async () => {
    const planetsCall = await fetchPlanets();
    setPlanets(planetsCall.results);
    setFilteredPlanets(planetsCall.results);
  };

  useEffect(() => getPlanets(), []);

  useEffect(() => {
    if (numericFilters.length === 0) setFilteredPlanets(planets);
    const filtersToApply = numericFilters.reduce((acc, curr) => {
      const { column, comparison, value } = curr;
      acc = acc
        .filter((planet) => {
          if (comparison === 'maior que') {
            return Number(planet[column]) > Number(value);
          }
          if (comparison === 'menor que') {
            return Number(planet[column] < Number(value));
          }
          return Number(planet[column]) === Number(value);
        });
      return acc;
    }, planets);
    setFilteredPlanets(filtersToApply);
  }, [numericFilters, planets]);

  return (
    <AppContext.Provider
      value={ {
        filters,
        setFilters,
        filteredPlanets,
        numericFilters,
        setNumericFilters,
        columns,
        setColumns,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: node,
}.isRequired;

export default AppProvider;
