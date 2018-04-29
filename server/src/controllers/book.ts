import { Request, Response } from "express";
import { Book } from "../entity/Book";
import { Genre } from "../entity/Genre";
import { Author } from "../entity/Author";

// GET ALL
export const getAllBooks = async ({}, res: Response) => {
    try {
        const books = await Book.find({});
        return res.json(books);
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}

// POST
export const addBook = async (req: Request, res: Response) => {
    try {
        // body -> name, genreId, authorId

        const genre = await Genre.findOne(req.body.genreId);
        const author = await Author.findOne(req.body.authorId);
        const newBook = await Book.create({
            name: req.body.name,
            genres: [genre],
            author: author
        });
        await newBook.save();
        return res.json({
            success: true
        })
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}