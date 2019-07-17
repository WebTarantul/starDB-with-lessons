import React, { Component } from 'react';
import PersonDetails from '../person-details';
import ItemList from '../item-list';  


import './people-page.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {
  
  state = {
    itemSelected: null,
    hasError: false
  }

  componentDidCatch (error, info) {
    console.error('Information of error:', info);
    this.setState({hasError: true});
  }

  onItemSelected = (id) =>{
    this.setState({itemSelected: id})
  }

  render() {

    if (this.state.hasError) {
      return (
        <ErrorIndicator/>
      )
    }

    return (
      <React.Fragment>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.itemSelected} />
            <ErrorButton/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
