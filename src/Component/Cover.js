import React from 'react';

export default function Cover (props) {
   return (
      <div className='TvShows__img'>
         <img src={props.logo} alt={`${props.name} Tv Shows Logo`} />
         <div className='TvShows__overlay'>
            <h4>{props.name}</h4>
         </div>
      </div>
   );
}