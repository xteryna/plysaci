import { render } from '@czechitas/render';
import '../global.css';
import './index.css';


const name1 = 'Silvestr';
const image1 = "../img/silvestr.jpg";
const text1 =
  'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.';

const name2 = 'Ctirad';
const image2 = '../img/ctirad.jpg';
const text2 =
  'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.';


const Plysak = (props) => {
  return (
    <div className="plushy">
      <img className="plushy__image" src={props.obrazek}/>
      <h2 className="plushy__name">{props.jmenoPlysaka}</h2>
      <p className="plushy__text">{props.textOPlysakovi}</p>
    </div>
  )
}


document.querySelector('#root').innerHTML = render(
  <>
    <h1>Plyšáci</h1>
    <div className="plushies">
      <Plysak jmenoPlysaka = {name2} textOPlysakovi = {text2} obrazek = {image2}/>
      <Plysak jmenoPlysaka = {name1} textOPlysakovi = {text1} obrazek = {image1}/>

    </div>
  </>
);
