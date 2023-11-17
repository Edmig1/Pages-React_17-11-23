import s from './Header.module.css'
import {Link} from "react-router-dom";
function Header(){
    return(
        <header className={s.header}>
            <img src="/logo.png" style={{width:'6%'}} alt=""/>
            <nav>
                <Link className={s.link} to={''}>Home</Link>
                <Link className={s.link} to={''}>Promoções</Link>
                <Link className={s.link} to={''}>Desejos</Link>
            </nav>
        </header>
    )
}
export default Header