import { useParams } from "react-router-dom";
import { useFetchByID } from "../hooks/useFetch";
import DefaultImage from "/NoImage.png";

const SingleItem = () => {
  //extraemos los parametros de la url los atributos que necesitemos
  const { id } = useParams();
  const { isLoading, error, data } = useFetchByID(`&i=${id}`);

  //esta condicional nos permitira renderizar nuestra informacion hasta que la consulta se termine de ejecutar y el valor de isLoading sea false, cuando esto suceda se renderizara nustro componente principal
  if (isLoading) {
    return <div className="loading"></div>;
  }

  const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } =
    data;
  let image = Poster === "N/A" ? DefaultImage : Poster;

  return (
    <>
      {isLoading ? (
        <p>Generando consulta...</p>
      ) : (
        <div className="single-movie">
          <img src={image} alt={Title} />
          <div className="single-info">
            <h2>{Title}</h2>
            <p> {Plot}</p>
            <p>
              <strong>Country: </strong>
              {Country}
            </p>
            <p>
              <strong>Director: </strong>
              {Director}
            </p>
            <p>
              <strong>Released: </strong>
              {Released}
            </p>
            <p>
              <strong>Runtime: </strong>
              {Runtime}
            </p>
            <p>
              <strong>Year: </strong>
              {Year}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleItem;
