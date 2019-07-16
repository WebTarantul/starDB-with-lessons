import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor () {
    super();
    this.updatePlanet();
  }
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }


  updatePlanet () {
    const id = Math.floor(Math.random() * 20 + 1);
    this.swapiService.getPlanet(id)
    .then(planet => {
      this.setState({planet, loading: false})
    })
    .catch(err => this.onError(err));
  }

  onError (err) {
  this.setState({loading: false, error: true});
  console.error(err);
  }

    render() {
      const { planet, loading, error } = this.state;
      
      const spinner = loading ? <Spinner/> : null;
      const content = !loading && !error ? <PlanetView planet={planet} />: null;
      const errorContent = error ? <ErrorIndicator/> : null;

      return (
        <div className="random-planet jumbotron rounded">
          {spinner}
          {content}
          {errorContent}
        </div>

      );
    }
}

const PlanetView = ({planet}) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return(
  <React.Fragment>
    <img className="planet-image"
    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population:</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period:</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter:</span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </React.Fragment>
  )
}
