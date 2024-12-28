import { useState } from "react";

const FormSearch = () => {
  const [titulo, setTitulo] = useState("");

  const generarBusqueda = (e) => {
    //gracias a que asignamos el evento e como argumento en el eventop del form no hace falta pasar argumento
    e.preventDefault();
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
      </div>
    </>
  );
};

export default FormSearch;
