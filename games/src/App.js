import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import ListaDesejo from "./components/ListaDesejo";

function App() {
  return (
      <BrowserRouter>
          <Header></Header>
        <Routes>

        </Routes>
          <ListaDesejo img='/The_Last_of_Us_capa 1.svg'></ListaDesejo>
      </BrowserRouter>
  );
}

export default App;
