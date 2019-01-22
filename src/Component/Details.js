import React, { Component } from 'react';
import getMovies from './get-movies';
import '../css/details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    }
  }

  componentDidMount() {
    let moviesId = this.props.match.params.moviesId;
    let movies = getMovies().find((movies) => movies.id === moviesId);
      this.setState({ movies });
  };

  render () {
    return (
      <h1>{ this.state.movies.name }</h1>
    );
  }
}