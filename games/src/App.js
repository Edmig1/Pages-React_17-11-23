import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Descricao from "./pages/Descricao";
import Desejo from "./pages/Desejo";


function App() {
  return (
      <BrowserRouter>
          <Header></Header>
        <Routes>
            <Route path="/jogo/:jogo" element={<Descricao />} />
        </Routes>
          <Desejo></Desejo>
      </BrowserRouter>
  );
}

export default App;
