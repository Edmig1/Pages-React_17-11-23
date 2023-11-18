import CardPromo from "../components/CardPromo";
import s from './Promocao.module.css'
import CardPromo2 from "../components/CardPromo2";

function Promocao(){
    return(
        <div className={s.divtotal}>
            <CardPromo img='/ea.webp' oferta='Oferta da Distribuidora'></CardPromo>
            <div className={s.CardP}>
                <CardPromo2 img='/Brawl.jpg' oferta='All Legends Pack'></CardPromo2>
                <CardPromo2 img='/mkt.jpg' oferta='Oferta do dia'></CardPromo2>
            </div>
        </div>
    )
}
export default Promocao