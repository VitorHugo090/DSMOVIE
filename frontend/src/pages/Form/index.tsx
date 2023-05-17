import './styles.css';

function Form() {
   
    const movie = {
        id: 1, 
        image: "https://4.bp.blogspot.com/-TH5qBbcjx5E/VhGc6OvO8PI/AAAAAAAAAZM/Yqe0mhOP3HM/s1600/whiplash.34229.jpg",
        title: "Whiplash - Em Busca da Perfeição", 
        count: 2, 
        score: 5
    };
   
   
    return (
        <div className="dsmovie-form-container">
        <img className="dsmovie-movie-card-image" src={movie.image}  alt={movie.title} />
        <div className="dsmovie-card-bottom-container">
            <h3>{movie.title}</h3>
            <form className="dsmovie-form">
                <div className="form-group dsmovie-form-group">
                    <label htmlFor="email">Informe seu email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group dsmovie-form-group">
                    <label htmlFor="score">Informe sua avaliação</label>
                    <select className="form-control" id="score">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="dsmovie-form-btn-container">
                    <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                </div>
            </form >
            <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </div >
    </div >
    );
}

export default Form;