import React from 'react';
import getMovies from './get-movies';
import Cover from './Cover';
import '../css/tv-showsGallery.css';

export default function TvShowsGallery(props) {
   return (
      <div className="Header">
        <div className="tvShows__cover">
          {
            getMovies().map(cover => (
              <Cover
                key={ cover.id }
                id={ cover.id }
                name={ cover.name }
                logo={ cover.logo } />
            ))
          }
        </div>
      </div>
   );
}