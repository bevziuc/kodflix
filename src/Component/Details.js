import React, { Component } from 'react';
import '../css/details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello, this will be the details page for each Movie & TV show :)'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'Coming Soon!  :)' });
    }, 3000)
  };

  render () {
    return (
      <h1>{ this.state.message }</h1>
    );
  }
}