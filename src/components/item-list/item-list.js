import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'

export default class ItemList extends Component {

  state = {
    peopleList : null
  }
  
  swapiService = new SwapiService();

  componentDidMount () {
    this.swapiService.getAllPeople()
      .then(peopleList => {
        this.setState({peopleList})
      })
  }

  renderItems (arr) {
    return arr.map(item => {
      return (
        <li className="list-group-item" 
          key={item.id} 
          onClick={() => this.props.onItemSelected(item.id)}>
            {item.name}
      </li>
      )
    })
  }

  render() {

    const {peopleList} = this.state;
    if (!peopleList) {
      return <Spinner/>
    }
    
    const listItems = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {listItems}
      </ul>
    );
  }
}
