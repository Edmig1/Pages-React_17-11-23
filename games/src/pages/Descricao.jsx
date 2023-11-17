import style from "./Descricao.module.css"
import {useParams} from "react-router-dom";
function Descricao(){
    const parms = useParams()
    return(
        <div className={style.main}>
            <div className={style.esquerda}>

                {parms.jogo == "fifa" && <h1>FIFA</h1>}
                {parms.jogo == "mkt" && <h1>Mortal Kombat 1</h1>}
                {parms.jogo == "bw" && <h1>Brawlhalla</h1>}

                {parms.jogo == "fifa" && <img src="/Fifa.jfif" />}
                {parms.jogo == "mkt" && <img src="/MK.jfif" />}
                {parms.jogo == "bw" && <img src="/Braw.jpg" />}

            </div>
            <div className={style.direita}>
                <div className={style.videos}>
                    {parms.jogo == "fifa" && <iframe width="560" height="315" src="https://www.youtube.com/embed/XhP3Xh4LMA8?si=kT4lPD0L5btv7GBw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                    {parms.jogo == "mkt" && <iframe width="560" height="315" src="https://www.youtube.com/embed/UmOca7FobTI?si=RUmKbkZtmFIteLLc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                    {parms.jogo == "bw" && <iframe width="560" height="315" src="https://www.youtube.com/embed/Mx25Q3LKQ9Q?si=rd9gMRSZNl5g7dVg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
                </div>


                <h2>Sobre:</h2>

                {parms.jogo == "fifa" &&
                    <p>
                        EA Sports FC 24 é um videojogo de futebol desenvolvido pela EA
                        Canadá e EA Roménia, e publicado pela EA Sports.
                        Este jogo marca o início da série EA Sports FC após
                        a conclusão da parceria da EA com a FIFA, sendo o 31º título
                        lançado da franquia ao todo.
                    </p>
                }

                {parms.jogo == "mkt" &&
                    <p>
                        A história de Mortal Kombat sempre envolveu disputas
                        entre reinos por meio de um torneio no qual o mundo
                        perdedor poderia ser absorvido pelo mundo vencedor.
                        Raiden e Shao Kahn travaram essa batalha por muitos anos
                        nas linhas do tempo anteriores à ascensão de Liu Kang como
                        Deus do Fogo.
                    </p>
                }

                {parms.jogo == "bw" &&
                    <p>
                        Valhalla é um local aonde os guerreiros
                        mais fortes do universo se encontram para lutar no Brawlhalla.
                        Lá, se encontram muitos heróis incríveis e destemidos e, também,
                        vilões cruéis e impiedosos. Orion, é um desses guerreiros,
                        mas há um problema... Ele não faz ideia do por que está ali!
                        Como será que essa história vai se desenrolar?
                    </p>
                }

            </div>
        </div>
    )
}
export default Descricao