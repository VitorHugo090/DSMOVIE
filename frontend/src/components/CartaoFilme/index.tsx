
import NotaFilme from "components/NotaFilme";
import { Link } from "react-router-dom";


function CartaoFilme() {
    
    const movie = {
        id: 1, 
        image: "https://4.bp.blogspot.com/-TH5qBbcjx5E/VhGc6OvO8PI/AAAAAAAAAZM/Yqe0mhOP3HM/s1600/whiplash.34229.jpg",
        title: "Whiplash - Em Busca da Perfeição", 
        count: 2, 
        score: 5
    };

    return (

    <div className="dsmovie-form-container">
    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
    <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <NotaFilme />
        <Link to={`/form/${movie.id}`}>
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
    </div>
    </div>

);
}

export default CartaoFilme;