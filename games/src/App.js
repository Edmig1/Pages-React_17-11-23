import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import ListaDesejo from "./components/ListaDesejo";
import Descricao from "./pages/Descricao";

function App() {
  return (
      <BrowserRouter>
          <Header></Header>
        <Routes>
            <Route path="/jogo/:jogo" element={<Descricao />} />
        </Routes>
          <ListaDesejo img='/The_Last_of_Us_capa 1.svg'></ListaDesejo>

      </BrowserRouter>
  );
}

export default App;
