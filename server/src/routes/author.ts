import { Router } from "express";
import { getAllAuthors, addAuthor, getAuthor, updateAuthor, deleteAuthor } from "../controllers/author";

class AuthorRouter {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        this.router.route('/')
            .get(getAllAuthors)
            .post(addAuthor);

        this.router.route('/:id')
            .get(getAuthor)
            .put(updateAuthor)
            .delete(deleteAuthor);
    }

}

export default new AuthorRouter().router;