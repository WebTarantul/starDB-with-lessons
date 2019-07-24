import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import { PeopleList, StarshipList,PlanetList, PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components'
import {SwapiServiceProvider} from '../swapi-service-context';


class App extends React.Component {

  state = {
    hasError: false
  }

  swapiService = new SwapiService();

  componentDidCatch (e, info) {
    console.error('Information of error:', info);
    this.setState({hasError: true});
  }


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const personDetails = <PersonDetails itemId={3} />
    const peopleList = <PeopleList/>
    const starshipDetails = <StarshipDetails itemId={3} />
    const starshipList = <StarshipList/>
    const planetDetails = <PlanetDetails itemId={3} />
    const planetList = <PlanetList/>

    return (
      <React.Fragment>
        
        <SwapiServiceProvider value={this.swapiService} >
          <Header />
          <RandomPlanet />
  
          <Row leftContent={peopleList} rightContent={personDetails} />
          <Row leftContent={planetList} rightContent={planetDetails} />
          <Row leftContent={starshipList} rightContent={starshipDetails} />
        </SwapiServiceProvider>
       
      </React.Fragment>
    );
  }
}

export default App;

