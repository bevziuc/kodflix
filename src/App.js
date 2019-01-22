import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TvShowsGallery from './Tv-shows-gallery/tv-shows-gallery';
import Details from './Details/Details';
import NotFound from './NotFound/not-found';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={ TvShowsGallery } />
            <Route path='/not-found' exact component={NotFound} />
            <Route path='/:moviesId' exact component={  Details } />
          </Switch>
          
        </div>
      </Router>
    );
  }
}
export default App;