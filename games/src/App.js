import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Descricao from "./pages/Descricao";
import Desejo from "./pages/Desejo";
import Promocao from "./pages/Promocao";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
      <BrowserRouter>
          <Header></Header>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/jogo/:jogo" element={<Descricao />} />
            <Route path="/desejos" element={<Desejo />} />
            <Route path="/promo" element={<Promocao />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
