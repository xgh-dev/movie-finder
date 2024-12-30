import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";


const Movies = () => {
  const { query, setQuery, isLoading, error, data } = useContext(DataContext);

  return (
    <>
      <div className="movies-content">
        {isLoading ? '' : data.map(item => <ItemMovie key={item.imdbID} item={item} />) }
      </div>
    </>
  );
};

export default Movies;
