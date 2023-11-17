import s from './CardPromo2.module.css'
import {Link} from "react-router-dom";

function CardPromo2(props){
    return(
        <div className={s.divcard}>
            <div className={s.divimg} style={{backgroundImage:`url(${props.img})`}}>

            </div>
            <div className={s.desc}>
                <p className={s.texto}>{props.oferta}</p>
            </div>
        </div>
    )
}
export default CardPromo2