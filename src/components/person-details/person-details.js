import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  state = {
    person: null,
    loading: false
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  swapiService = new SwapiService();

  updatePerson () {
    let {personId = 1} = this.props;
    if (!personId) {
      personId = 1
    }
    this.setState({loading: true});
    this.swapiService.getPerson(personId)
      .then(person => {
        this.setState({person, loading: false})
      })
  }

  render() {
    if (!this.state.person || this.state.loading) {
      return(<Spinner/>)
    }
    const {person:{id, name, gender, birthYear, eyeColor}} = this.state;
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

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
        </div>
      </div>
    )
  }
}
