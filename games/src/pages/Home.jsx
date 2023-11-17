import s from './Home.module.css'
import Header from "../components/Header";
import CardHome from "../components/CardHome";

function Home(){
    return(
        <div className={s.divtotal}>
            <CardHome  img='/ea.webp' nome={'EA FC'} texto='R$249.99' x='88%'></CardHome>
            <CardHome  img='/brawl.jpg' nome={'Brawlhalla'} texto='GRÁTIS' x='50%'>></CardHome>
            <CardHome  img='/last.png' nome={'The Last Of Us'} texto='R$99.99' x='50%'>></CardHome>
        </div>
    )

}
export default Home