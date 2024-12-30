import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext(null);

export const ContextProvider = ({ children }) => {
  //aqui definiremos una variable de estado que sera quien le dara un valor a la url de la api
  const [query, setQuery] = useState("");
  const { isLoading, error, data } = useFetch(
    query !== "" ? `&s=${query}` : null
  );

  //returnaremos el componente de contextProvider
  return (
    <DataContext.Provider value={{ query, setQuery, isLoading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};
