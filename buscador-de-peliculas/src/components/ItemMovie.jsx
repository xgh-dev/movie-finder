import DefaultImage from '/NoImage.png'
import { Link } from 'react-router-dom';

const ItemMovie = ({ item }) => {

  let imagen = item.Poster === 'N/A' ?  DefaultImage : item.Poster

  return (
    <>
    <Link to={`/singleItem/${item.imdbID}`} style={{color: 'inherit',textDecoration:'inherit' }}>
    <article>
        <div
          className="item-movie"
          style={{
            backgroundImage: `url(${imagen})`
          }}
        >
          <div className="info">
            <h4>{item.Title}</h4>
            <p className="row-info"><span>{item.Type}</span><span>{item.Year}</span></p>
          </div>
        </div>
      </article>
    </Link>
    </>
  );
};

export default ItemMovie;
