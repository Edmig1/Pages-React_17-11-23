import s from './Desejo.module.css'
import {Link} from "react-router-dom";
import ListaDesejo from "../components/ListaDesejo";

function Desejo () {
    return (
        <div className={s.todo}>
            <h1>Lista de desejos</h1>
            <div className={s.content}>
                <ListaDesejo title='Mortal kombat 1' img='./mkt.png' preco='R$342' game='mkt'></ListaDesejo>
                <ListaDesejo title='Brawlhalla' img='./braw.png' preco='grátis' game='bw'></ListaDesejo>
                <ListaDesejo title='EA FC 2024' img='/fc.svg' preco='R$250' game='fifa'></ListaDesejo>
                <br/> <br/> <br/> <br/> <br/>
            </div>
        </div>

    )
}

export default Desejo