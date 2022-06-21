import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const cardOfPlanet = planets.map(({ name, image }) => (
      <PlanetCard key={ name } planetName={ name } planetImage={ image } />
    ));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>{cardOfPlanet}</div>
      </div>
    );
  }
}

export default SolarSystem;
