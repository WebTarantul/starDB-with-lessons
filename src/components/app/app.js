import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';

class App extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    console.error('Information of error:', info);
    this.setState({hasError: true});
  }


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div>
        <Header />
        <RandomPlanet />
        <ErrorButton/>

        <PeoplePage/>
      </div>
    );
  }
}

export default App;