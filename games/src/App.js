import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Descricao from "./pages/Descricao";
import Desejo from "./pages/Desejo";


function App() {
  return (
      <BrowserRouter>
          <Header></Header>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/jogo/:jogo" element={<Descricao />} />
            <Route path="/desejos" element={<Desejo />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
