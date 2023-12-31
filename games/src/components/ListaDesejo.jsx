import s from './ListaDesejo.module.css'
import {Link} from "react-router-dom";
function ListaDesejo (props) {
    return (
        <div className={s.card}>
            <div className={s.imgDiv}>
                <img src={props.img}/>
            </div>

            <div className={s.tudo}>
                <div className={s.title}>
                    <p>{props.title}</p>
                </div>

                <div className={s.din}>
                    <p>{props.preco}</p>
                    <Link to={"/jogo/" + props.game}>descrição</Link>
                </div>
            </div>
        </div>
    )
}

export default ListaDesejo