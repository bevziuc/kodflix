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
          <Cover id='band' name='Band Of Brothers' logo={bandOfBrothers} />
          <Cover id='mirror' name='Black Mirror' logo={blackMirror} />
          <Cover id='bacosmosnd' name='Cosmos' logo={cosmos} />
        </div>
        <div className="TvShows__cover">
          <Cover id='thrones' name='Game Of Thrones' logo={gameOfThrones} />
          <Cover id='life' name='Life' logo={life} />
          <Cover id='sopranos' name='The Sopranos' logo={sopranos} />
        </div>
      </div>
   );
}