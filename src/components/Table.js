import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { filteredPlanets, numericFilters, setNumericFilters,
    setFilters, filters } = useContext(AppContext);

  const removeFilter = ({ target: { name } }) => {
    const newFilters = numericFilters
      .filter((filter) => filter !== numericFilters[name]);

    setNumericFilters(newFilters);
    setFilters({
      ...filters,
      filterByNumericValues: {
        column: 'population',
        comparison: 'maior que',
        value: 0 },
    });
  };

  return (
    <section>
      <div>
        <p>Applied filters:</p>
        {numericFilters && numericFilters.map(({ column, comparison, value }, i) => (
          <div key={ i }>
            <p>
              {column}
              ,
              {' '}
              {comparison}
              ,
              {' '}
              {value}
            </p>
            <button
              type="button"
              name={ i }
              onClick={ removeFilter }
            >
              X
            </button>
          </div>
        ))}
      </div>
      <table className="demo">
        <caption><h1>Star Wars Planets Table</h1></caption>
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
          {filteredPlanets.length > 0 && filteredPlanets.map((planet, i) => (
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
