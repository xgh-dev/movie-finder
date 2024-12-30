import { useParams } from "react-router-dom";
import { useFetchByID,useFetch } from "../hooks/useFetch";


//api para renderizar un solo elemento porsu id `http://www.omdbapi.com/?apikey=877dbc3a&i=${id}`;

const SingleItem = () => {
  //extraemos los parametros de la url los atributos que necesitemos
  const { id } = useParams();
  
  const {isLoading,error,data} = useFetchByID(`&i=${id}`)//este tipo de consulta nos devolvera un json en un formato diferente, por lo tanto estara en conflicto con las validaciones de useFetch por ende deberemos asigarle un or para que nos pueda devolver el json cuando hagamos este tipo de consulta

  //console.log(data);
  return (
    <>
      <h3>Single item</h3>
    </>
  );
};

export default SingleItem;


