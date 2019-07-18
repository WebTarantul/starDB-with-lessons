import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'

export default class ItemList extends Component {

  state = {
    itemList : null
  }
  
  swapiService = new SwapiService();

  componentDidMount () {
    this.props.getData()
      .then(itemList => {
        this.setState({itemList})
      })
  }

  renderItems (arr) {
    return arr.map(item => {

      const label = this.props.children(item);

      return (
        <li className="list-group-item" 
          key={item.id} 
          onClick={() => this.props.onItemSelected(item.id)}>
            {label}
      </li>
      )
    })
  }

  render() {

    const {itemList} = this.state;
    if (!itemList) {
      return <Spinner/>
    }
    
    const listItems = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {listItems}
      </ul>
    );
  }
}
