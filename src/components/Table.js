import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const {
    filteredPlanets,
    numericFilters,
    setNumericFilters,
    setFilters,
    filters,
    columns,
    setColumns,
  } = useContext(AppContext);

  const removeFilter = ({ target }) => {
    const newFilters = numericFilters.filter(
      (filter) => filter !== numericFilters[target.name],
    );
    setNumericFilters(newFilters);
    setColumns([...columns, numericFilters[target.name].column]);
    setFilters({
      ...filters,
      filterByNumericValues: {
        column: columns[0],
        comparison: 'maior que',
        value: 0,
      },
    });
  };

  const removeAllFilters = () => {
    setNumericFilters([]);
    setColumns([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  return (
    <section>
      <div className="appliedFilters">
        <p>Applied filters:</p>
        {numericFilters
          && numericFilters.map(({ column, comparison, value }, i) => (
            <div key={ i } data-testid="filter">
              <p>
                {column}
                ,
                {' '}
                {comparison}
                ,
                {' '}
                {value}
              </p>
              <button type="button" name={ i } onClick={ removeFilter }>
                X
              </button>
            </div>
          ))}
        <button
          type="button"
          onClick={ removeAllFilters }
          data-testid="button-remove-filters"
        >
          Remove all filters
        </button>
      </div>
      <table className="demo">
        <caption>
          <h1>Star Wars Planets Table</h1>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.length > 0
            && filteredPlanets.map((planet, i) => (
              <tr key={ i }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
