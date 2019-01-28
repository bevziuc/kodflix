import React from 'react';
import getMovies from '../Get-movies/get-movies';
import Cover from '../Cover/Cover';
import '../Tv-shows-gallery/tv-showsGallery.css';

export default function TvShowsGallery(props) {
   return (
      <div className="Header">
        <div className="tvShows__cover">
          {
            getMovies().map(cover => (
              <Cover
                key={ cover.id }
                id={ cover.id }
                title={ cover.title }
                logo={ cover.logo } />
            ))
          }
        </div>
      </div>
   );
}