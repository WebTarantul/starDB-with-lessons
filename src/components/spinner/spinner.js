import React, {Component} from 'react';

import spinner from './spinner.svg'
import './spinner.css'

export default class Spinner extends Component {
  render () {
    return (
      <div className="spinner-wrapper">
        <img src={spinner} alt="Spinner"/>
      </div>
    );
  }
}

