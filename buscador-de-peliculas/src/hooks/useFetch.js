import { useEffect, useState } from "react";

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=877dbc3a`;

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  //definir la funcion que ejecute el fetch
  const consulta = (url) => {
    setIsLoading(true); //esto para que cuando se ejecute el fetch se asigne el valor true
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        if (respuestaJson.Response === "True") {
          console.log("consulta:", respuestaJson);
          setData(respuestaJson.Search);
          setError(false);
        } else {
          setError(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log("error en la consulta", error);
      });
  };
  useEffect(() => {
    if (params !== null) {
      //si params llega siendo un valor null no se ejecutara la llamada a la api
      consulta(`${API_ENDPOINT}${params}`);
    }
  }, [params]); //ligamos la ejecucion del useEffect a cada que params cambie

  return { isLoading, error, data }; //returnamos las variables de estado
};

export const useFetchByID = (params) => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const consulta = (url) => {
    setIsLoading(true)
    fetch(url)
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) => {
      console.log(respuestaJson)
      setData(respuestaJson);
      setError(false)
      setIsLoading(false)
    }).catch(error => {
      console.log('error en la consulta por id',error)
      setError(true)
    })
  }
  
  useEffect(() => {
      consulta(`${API_ENDPOINT}${params}`);
  }, [params]);

  return {isLoading,error,data}

};
