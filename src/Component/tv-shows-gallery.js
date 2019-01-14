import React from 'react';
import getTehnologies from './get-tehnologies';
import Cover from './Cover';
import '../css/tv-showsGallery.css';

export default function TvShowsGallery(props) {
   return (
      <div className="Header">
        <div className="tvShows__cover">
          {
            getTehnologies().map(cover => (
              <Cover
                key={cover.id}
                id={cover.id}
                name={cover.name}
                logo={cover.logo} />
            ))
          }
        </div>
      </div>
   );
}