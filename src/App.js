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
          <Route path="/" exact component={TvShowsGallery}></Route>
          <Route path="/:details" exact component={Details}></Route>
        </div>
      </Router>
    );
  }
}
export default App;