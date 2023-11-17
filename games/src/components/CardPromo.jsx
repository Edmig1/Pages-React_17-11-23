import s from './CardPromo.module.css'
import {Link} from "react-router-dom";

function CardPromo(props){
    return(
            <div className={s.divcard}>
                <div className={s.divimg} style={{backgroundImage:`url(${props.img})`}}>

                </div>
                <div className={s.desc}>
                    <p className={s.texto}>{props.oferta}</p>
                    <div className={s.financeiro}>
                        <div className={s.porcento}>
                            <p>-80%</p>
                        </div>
                        <div className={s.precos}>
                            <p className={s.preco}>De {props.preco}</p>
                            <p className={s.desconto}>Para {props.desconto}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default CardPromo