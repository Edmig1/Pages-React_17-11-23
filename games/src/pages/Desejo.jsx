import s from './Desejo.module.css'
import {Link} from "react-router-dom";
import ListaDesejo from "../components/ListaDesejo";

function Desejo () {
    return (
        <div>
            <h1>Lista de desejos</h1>
            <div className={s.content}>
                <ListaDesejo></ListaDesejo>
                <ListaDesejo></ListaDesejo>
                <ListaDesejo></ListaDesejo>
            </div>
        </div>

    )
}

export default Desejo