import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Record = ({item, field, label}) => {

  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};

export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: false,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  swapiService = new SwapiService();

  updateItem () {
    let {itemId = 1, getData, getImage} = this.props;
    if (!itemId) {
      itemId = 1
    }

    this.setState({loading: true});

    getData(itemId)
      .then(item => {
        this.setState({
                      item, loading: false,
                      image: getImage(item)})
      })
  }

  render() {
    if (!this.state.item || this.state.loading) {
      return(<Spinner/>)
    }
  
    const {item, image} = this.state;
    const listInner = (
      React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {item});
      })
    )
    return (
      <div className="person-details card">
        <img className="person-image" alt='Item' src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {listInner}
          </ul>
        <ErrorButton/>
        </div>
      </div>
    )
  }
}
