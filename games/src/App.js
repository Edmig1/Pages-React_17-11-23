import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import ListaDesejo from "./components/ListaDesejo";
import Desejo from "./pages/Desejo";

function App() {
  return (
      <BrowserRouter>
          <Header></Header>
        <Routes>

        </Routes>

      </BrowserRouter>
  );
}

export default App;
