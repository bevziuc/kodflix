import bandOfBrothers from '../img/tvShows/band-of-brothers.jpg';
import blackMirror from '../img/tvShows/black-mirror.jpg';
import cosmos from '../img/tvShows/cosmos.jpg';
import gameOfThrones from '../img/tvShows/game-of-thrones.jpg';
import life from '../img/tvShows/life.jpg';
import sopranos from '../img/tvShows/the-sopranos.jpg';

export default function getMovies() {
   return [
      { id: 'band', name: 'Band Of Brothers', logo: bandOfBrothers },
      { id: 'mirror', name: 'Black Mirror', logo: blackMirror },
      { id: 'cosmos', name: 'Cosmos', logo: cosmos },
      { id: 'thrones', name: 'Game Of Thrones', logo: gameOfThrones },
      { id: 'life', name: 'Life', logo: life },
      { id: 'sopranos', name: 'The Sopranos', logo: sopranos }
   ];
 }
 