import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="planetCard">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img
          src={ `${planetImage}` }
          alt={ `Planeta ${planetName}` }
          className="planetImage"
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.element.isRequired,
};

export default PlanetCard;
