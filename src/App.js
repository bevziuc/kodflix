import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Header">
        <div className="TvShows__title">
          <h4 className="TvShows__title-descr">Band Of Brothers</h4>
          <h4 className="TvShows__title-descr">Black Mirror</h4>
          <h4 className="TvShows__title-descr">Cosmos</h4>
        </div>
        <div className="TvShows__title">
          <h4 className="TvShows__title-descr">Game Of Thrones</h4>
          <h4 className="TvShows__title-descr">Life</h4>
          <h4 className="TvShows__title-descr">Sopranos</h4>
        </div>
      </div>
    );
  }
}

export default App;
