import "./App.css";
import MainComponent from "./components/MainComponent";
import SingleItem from "./components/SingleMovie";
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {
 

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainComponent />}/>
            <Route path={`/singleItem/:id`} element={<SingleItem/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
