import DefaultImage from '/NoImage.png'


const ItemMovie = ({ item }) => {

  let imagen = item.Poster === 'N/A' ?  DefaultImage : item.Poster

  return (
    <>
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
    </>
  );
};

export default ItemMovie;
