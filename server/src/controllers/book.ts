import { Request, Response } from "express";
import { Book } from "../entity/Book";

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
        const newBook = await Book.create({
            name: req.body.name,
            genres: req.body.genreId,
            author: req.body.authorId
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