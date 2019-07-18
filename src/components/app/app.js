import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../item-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails from '../item-details';

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
    const {getPerson,getPlanet, getPersonImage,getPlanetImage} = this.swapiService;

    const personDetails = <ItemDetails 
                            itemId={3}
                            getData={getPerson}
                            getImage={getPersonImage}
                             />
    const planetDetails = <ItemDetails 
                            itemId={3}
                            getData={getPlanet}
                            getImage={getPlanetImage}
                             />

    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row leftContent={personDetails} rightContent={planetDetails} />
       
      </div>
    );
  }
}

export default App;