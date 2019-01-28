import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import getMovies from '../Get-movies/get-movies';
import './Details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    };
  }

  componentDidMount() {
    this.setState({
      movies: getMovies()
        .find(movies => movies.id === this.props.match.params.moviesId)
    });

    fetch('/rest/movies-details')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  render() {
    if (this.state.movies === undefined) {
      return <Redirect to="/not-found" />
    } else {
      return (
        <div className='Details'>
          <div className='DetailsSubscribe'>
            <h1 className=''>{this.state.movies.title}</h1>
          </div>
          <div className='DetailsContent'>
            <div className='DetailsDescription'>{this.state.movies.synopsis}</div>
            <img
              className='DetailsImage'
              src={this.state.movies.logo}
              alt={this.state.movies.title} />
          </div>
        </div>
      );
    }
  }
}