import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
   return (
      <div className='tvShows__img'>
         <Link to={props.id}>
            <img src={props.logo} alt={`${props.name} Tv Shows Logo`} />
            <h4 className='tvShowsTitle'>{props.name}</h4>
         </Link>
      </div>
   );
}