import s from './Home.module.css'
import Header from "../components/Header";
import CardHome from "../components/CardHome";

function Home(){
    return(
        <div className={s.divtotal}>
            <CardHome link={'/jogo/fifa'}  img='/ea.webp' nome={'EA FC 24'} texto='R$249.99' x='88%'></CardHome>
            <CardHome link={'/jogo/bw'}  img='/brawl.jpg' nome={'Brawlhalla'} texto='GRÁTIS' x='50%'>></CardHome>
            <CardHome link={'/jogo/mkt'}  img='/mkt.jpg' nome={'Mortal Kombat 1'} texto='R$342.99' x='50%'>></CardHome>
        </div>
    )

}
export default Home