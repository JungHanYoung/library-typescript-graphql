import { Router } from "express";
import AuthorRouter from './author';
import BookRouter from './book';
import GenreRouter from './genre';


class ApiRoutes {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    private routes(): void {
        this.router.use('/author', AuthorRouter);
        this.router.use('/book', BookRouter);
        this.router.use('/genre', GenreRouter);
    }
}

export default new ApiRoutes().router;