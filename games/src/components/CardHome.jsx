import s from './CardHome.module.css'
import {Link} from "react-router-dom";
function CardHome(props){
    return(
        <div className={s.divcard}>
            <div className={s.cardimg} style={{backgroundImage:`url(${props.img})`, backgroundPositionX:`url(${props.x})`  }}>
            </div>
            <div className={s.carddesc}>
                <div className={s.cardinfo}>
                    <p className={s.titulocard}>{props.nome}</p>
                    <p className={s.textocard}>{props.texto}</p>
                </div>
                <Link className={s.cardbtn} to={''}>Adquirir</Link>
            </div>
        </div>
    )
}
export default CardHome