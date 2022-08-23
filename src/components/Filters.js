import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const { filters, filters: { filterByNumericValues }, setFilters, numericFilters,
    setNumericFilters } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value } });
  };

  const handleNumericFilters = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: { ...filterByNumericValues,
        [name]: value,
      },
    });
  };

  const applyNumericFilters = () => {
    setNumericFilters([...numericFilters, filterByNumericValues]);
  };

  return (
    <form>
      <label htmlFor="name">
        Filtrar:
        <input
          type="text"
          id="name"
          name="name"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="column">
        Características:
        <select
          id="column"
          name="column"
          value={ filterByNumericValues.column }
          onChange={ handleNumericFilters }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Selecionar:
        <select
          id="comparison"
          name="comparison"
          value={ filterByNumericValues.comparison }
          onChange={ handleNumericFilters }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          id="value"
          name="value"
          value={ filterByNumericValues.value }
          onChange={ handleNumericFilters }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        name="filter-button"
        id="filter-button"
        data-testid="button-filter"
        onClick={ applyNumericFilters }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filters;
