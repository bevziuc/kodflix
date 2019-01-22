import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TvShowsGallery from './Component/tv-shows-gallery';
import Details from './Component/Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/' exact component={TvShowsGallery}></Route>
          <Route path='/:moviesId' exact component={Details}></Route>
        </div>
      </Router>
      <div className="Header">
        <div className="TvShows__cover">
          <div className='TvShows__img'>
            <img src={bandOfBrothers} alt='Tv Shows Logo'/>
            <div className='TvShows__overlay'>
              <h4>Band Of Brothers</h4>
            </div>
          </div>
          <div className='TvShows__img'>
            <img src={blackMirror} alt='Tv Shows Logo'/>
            <div className='TvShows__overlay'>
              <h4>Black Mirror</h4>
            </div>
          </div>
          <div className='TvShows__img'>
            <img src={cosmos} alt='Tv Shows Logo'/>
            <div className='TvShows__overlay'>
              <h4>Cosmos</h4>
            </div>
          </div>
        </div>
        <div className="TvShows__cover">
          <div className='TvShows__img'>
            <img src={gameOfThrones} alt='Tv Shows Logo'/>
            <div className='TvShows__overlay'>
              <h4>Game Of Thrones</h4>
            </div>
          </div>
          <div className='TvShows__img'>
            <img src={life} alt='Tv Shows Logo'/>
            <div className='TvShows__overlay'>
              <h4>Life</h4>
            </div>
          </div>
          <div className='TvShows__img'>
            <img src={sopranos} alt='Tv Shows Logo'/>
            <div className='TvShows__overlay'>
              <h4>Sopranos</h4>
            </div>
          </div>
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