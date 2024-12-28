import "./App.css";
import FormSearch from "./components/FormSearch";

function App() {
  const ApiUrlparaBuscarGeneral =
    "http://www.omdbapi.com/?i=tt3896198&apikey=877dbc3a&s=nombreDelcontenido";

  const apiUrlporID =
    "http://www.omdbapi.com/?i=tt3896198&apikey=877dbc3a&i=idDelcontenido";

  return (
    <>
      <div className="App">
        <FormSearch />
      </div>
    </>
  );
}

export default App;
