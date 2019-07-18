import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

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
    const {item:{id, name, gender, birthYear, eyeColor},image} = this.state;
    return (
      <div className="person-details card">
        <img className="person-image" alt='Item' src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        <ErrorButton/>
        </div>
      </div>
    )
  }
}
