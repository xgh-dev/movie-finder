import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
  const [titulo, setTitulo] = useState("");//estado que captara el valor ingresado en el formulario
  const {setQuery,error,data} = useContext(DataContext)

  /* //lineas que fueron implementadas dentro del contexto utilizado
  const [query,setQuery] = useState('') //defiinimos este estado para cuando titulo deje de percivir comportamiento podamos mandarlo una sola vez

  //forma para ejecutar una condicional dentro de argumento de una funcion
  const {isLoading, error, data} = useFetch(query !== '' ? `&s=${query}` : null)
  */

  const generarBusqueda = (e) => {
    //gracias a que asignamos el evento e como argumento en el eventop del form no hace falta pasar argumento
    e.preventDefault();
    setQuery(titulo)
    console.log(titulo);
  };

  return (
    <>
      <div className="form-search">
        <h2>Movie Finder</h2>
        <form action="" onSubmit={generarBusqueda}>
          <input
            type="text"
            placeholder="Ingrese el titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input type="submit" value="Buscar" />
        </form>
        {data === null ? <p>Esperando un titulo</p>:null}
        {error ? <p>Error en la busqueda</p> : null}
      </div>
    </>
  );
};

export default FormSearch;
