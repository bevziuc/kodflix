import bandOfBrothers from './band-of-brothers.jpg';
import blackMirror from './black-mirror.jpg';
import cosmos from './cosmos.jpg';
import gameOfThrones from './game-of-thrones.jpg';
import life from './life.jpg';
import sopranos from './the-sopranos.jpg';

export default function getMovies() {
   return [
      { id: 'bandOfBrothers', title: 'Band Of Brothers', logo: bandOfBrothers, synopsis: "A 10-part miniseries based on Stephen Ambrose's bestseller about a World War II unit called Easy Company, 2nd Battalion of the 506th Regiment of the 101st Airborne Division, U.S. Army, that begins with their training in Georgia in the spring of 1942, follows them into France on D-Day and ends with the Allied victory in Europe in 1945."},
      { id: 'mirror', title: 'Black Mirror', logo: blackMirror, synopsis: "In 1984, a young programmer begins to question reality as he adapts a dark fantasy novel into a video game. A mind-bending tale with multiple endings." },
      { id: 'cosmos', title: 'Cosmos', logo: cosmos, synopsis: "A young man, hoping to write a novel, visits a French guest-house with a friend, he but finds himself distracted by a strange mystery and the stranger inhabitants of the home." },
      { id: 'gameOfThrones', title: 'Game Of Thrones', logo: gameOfThrones, synopsis: "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years." },
      { id: 'life', title: 'Life', logo: life, synopsis: "A team of scientists aboard the International Space Station discover a rapidly evolving life form that caused extinction on Mars and now threatens all life on Earth." },
      { id: 'theSopranos', title: 'The Sopranos', logo: sopranos, synopsis: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling." }
   ];
 }
 