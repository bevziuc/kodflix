import React from 'react';
import getTehnologies from './get-tehnologies.js';
import Cover from '../Component/Cover.js';
import '../css/TvShowsGallery.css';

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