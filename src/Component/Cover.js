import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
   return (
      <div className='TvShows__img'>
         <Link to="/Details">
            <img src={props.logo} alt={`${props.name} Tv Shows Logo`} />
            <div className='TvShows__overlay'>
               <h4>{props.name}</h4>
            </div>
         </Link>
      </div>
   );
}