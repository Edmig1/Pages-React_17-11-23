import s from './Desejo.module.css'
import {Link} from "react-router-dom";
import ListaDesejo from "../components/ListaDesejo";

function Desejo () {
    return (
        <div className={s.todo}>
            <h1>Lista de desejos</h1>
            <div className={s.content}>
                <ListaDesejo title='The Last of Us' img='./The_Last_of_Us_capa 1.svg' preco='R$200'></ListaDesejo>
                <ListaDesejo title='Brawlhalla' img='./braw.png' preco='grátis'></ListaDesejo>
                <ListaDesejo title='EA FC 2024' img='/fc.svg' preco='R$250'></ListaDesejo>
                <br/> <br/> <br/> <br/> <br/>
            </div>
        </div>

    )
}

export default Desejo