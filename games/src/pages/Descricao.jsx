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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UmOca7FobTI?si=RUmKbkZtmFIteLLc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h2>Sobre:</h2>
                <p>
                    A história de Mortal Kombat sempre envolveu disputas
                    entre reinos por meio de um torneio no qual o mundo
                    perdedor poderia ser absorvido pelo mundo vencedor.
                    Raiden e Shao Kahn travaram essa batalha por muitos anos
                    nas linhas do tempo anteriores à ascensão de Liu Kang como
                    Deus do Fogo.
                </p>
            </div>
        </div>
    )
}
export default Descricao