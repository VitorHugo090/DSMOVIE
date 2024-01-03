import axios from "axios";

export const axiosInstance = axios.create ({
    baseURL: "http://localhost:3000"
})

export class FilmService {
    listarTodos(){
        return axiosInstance.get("/filmes");
    }
}

export default FilmService;