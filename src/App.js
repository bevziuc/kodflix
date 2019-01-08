import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
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
