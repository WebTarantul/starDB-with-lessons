import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import withData from '../hoc-helper'


 class ItemList extends Component {

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

    const {data}  = this.props;
    const listItems = this.renderItems(data);

    return (
      <ul className="item-list list-group">
        {listItems}
      </ul>
    );
  }
}


const {getAllPeople} = new SwapiService();

export default withData(ItemList, getAllPeople);