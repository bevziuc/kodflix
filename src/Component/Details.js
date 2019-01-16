import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import NotFound from './not-found';
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
    this.setState({
        movies: getMovies()
          .find(movies => movies.id === this.props.match.params.moviesId)
    });
  };


  render () {
    if(this.state.movies)  {
      return <h1>{this.state.movies.name}</h1>
    }else {
      return <Redirect to="/not-found" />
    }
  }
  // render () {
  //   return this.state.movies ? (
  //     <h1>{this.state.movies.name}</h1>
  //   ) : (
  //     <Redirect to="/not-found" />
  //   );
  // }
}