import { Router } from "express";
import { getAllGenres, addGenre } from "../controllers/genre";

class GenreRouter {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    private routes(): void {
        this.router.route('/')
            .get(getAllGenres)
            .post(addGenre);
    }
}

export default new GenreRouter().router;