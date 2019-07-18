import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';

import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails from '../item-details';
import {Record} from '../item-details'

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

    const personDetails = (<ItemDetails 
                            itemId={5}
                            getData={getPerson}
                            getImage={getPersonImage}
                             > 
                              <Record field='name' label='Name'  />
                              <Record field='gender' label='Gender'  />
                            </ItemDetails>) 
    const planetDetails = <ItemDetails 
    itemId={3}
                            getData={getPlanet}
                            getImage={getPlanetImage} >
                            <Record field='name' label='Name'  />
                            <Record field='diameter' label='Diameter'  />

                            </ItemDetails>
    const peopleList = (<ItemList onItemSelected={this.onItemSelected} 
                                  getData={this.swapiService.getAllPeople} >

                            {(i) => `${i.name} (${i.birthYear})`}

                            </ItemList>);

    return (
      <div>
        <Header />
        <RandomPlanet />

        <Row leftContent={peopleList} rightContent={personDetails} />
       
      </div>
    );
  }
}

export default App;

