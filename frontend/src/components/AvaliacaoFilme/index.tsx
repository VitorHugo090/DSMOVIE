import './styles.css'
import { ReactComponent as FullEstrela } from "assets/faviconcheia.svg"
import { ReactComponent as HalfEstrela } from "assets/faviconmetade.svg"
import { ReactComponent as EmptyEstrela } from "assets/faviconvazia.svg"


function AvalicaoFilme() {
    return(
        <div className="dsmovie-stars-container">
            <FullEstrela />
            <FullEstrela />
            <FullEstrela />
            <HalfEstrela />
            <EmptyEstrela />
            </div>

    )
}

export default AvalicaoFilme;