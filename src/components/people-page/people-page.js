import React, { Component } from 'react';
import PersonDetails from '../item-details';
import ItemList from '../item-list';  


import './people-page.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {
  
  state = {
    itemSelected: null,
    hasError: false
  }

  swapiService = new SwapiService();



  onItemSelected = (id) =>{
    this.setState({itemSelected: id})
  }

  render() {

    const peopleList = (<ItemList  onItemSelected={this.onItemSelected} 
                                    getData={this.swapiService.getAllPeople} >

                            {(i) => `${i.name} (${i.birthYear})`}

                        </ItemList>);
    
    const personDetails = ( 
                          <ErrorBoundry>
                            <PersonDetails personId={this.state.itemSelected} />
                          </ErrorBoundry>)

    return (
           <ErrorBoundry>
             <Row leftContent={peopleList} rightContent={personDetails} /> 
           </ErrorBoundry>
            
    )
  }
}