import React from 'react';
import bandOfBrothers from '../img/tvShows/band-of-brothers.jpg';
import blackMirror from '../img/tvShows/black-mirror.jpg';
import cosmos from '../img/tvShows/cosmos.jpg';
import gameOfThrones from '../img/tvShows/game-of-thrones.jpg';
import life from '../img/tvShows/life.jpg';
import sopranos from '../img/tvShows/the-sopranos.jpg';
import Cover from '../Component/Cover.js';
import '../css/TvShowsGallery.css';

export default function TvShowsGallery(props) {
   return (
      <div className="Header">
        <div className="TvShows__cover">
          <Cover name='Band Of Brothers' logo={bandOfBrothers} />
          <Cover name='Black Mirror' logo={blackMirror} />
          <Cover name='Cosmos' logo={cosmos} />
        </div>
        <div className="TvShows__cover">
          <Cover name='Game Of Thrones' logo={gameOfThrones} />
          <Cover name='Life' logo={life} />
          <Cover name='The Sopranos' logo={sopranos} />
        </div>
      </div>
   );
}