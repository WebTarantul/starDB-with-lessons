import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import { PeopleList, StarshipList,PlanetList, PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components'

class App extends React.Component {

  state = {
    hasError: false
  }

  swapiService = new SwapiService();

  componentDidCatch (error, info) {
    console.error('Information of error:', info);
    this.setState({hasError: true});
  }


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const personDetails = <PersonDetails itemId={3} />
    const peopleList = <PeopleList>{(i) => `${i.name} (${i.birthYear})`}</PeopleList>
    const starshipDetails = <StarshipDetails itemId={3} />
    const starshipList = <StarshipList>{(i) => `${i.name}`}</StarshipList>
    const planetDetails = <PlanetDetails itemId={3} />
    const planetList = <PlanetList>{(i) => `${i.name}`}</PlanetList>

    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row leftContent={peopleList} rightContent={personDetails} />
        <Row leftContent={planetList} rightContent={planetDetails} />
        <Row leftContent={starshipList} rightContent={starshipDetails} />
       
      </div>
    );
  }
}

export default App;

