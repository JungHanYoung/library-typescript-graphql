import { Router } from "express";
import { getAllBooks, addBook } from "../controllers/book";

class BookRouter {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    private routes(): void {
        this.router.route('/')
            .get(getAllBooks)
            .post(addBook)
    }
}

export default new BookRouter().router;