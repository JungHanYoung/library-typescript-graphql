import { Request, Response } from "express";
import { Author } from "../entity/Author";

// GET
export const getAllAuthors = async ({}, res: Response) => {
    try{
        const authors = await Author.find({});
        return res.json(authors);
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}

// POST
export const addAuthor = async (req: Request, res: Response) => {
    try {
        // body -> name, age
        const newAuthor = await Author.create(req.body);
        await newAuthor.save();
        return res.json({
            success: true
        });
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}

// GET
export const getAuthor = async (req: Request, res: Response) => {
    try {
        // params -> id
        let id = req.params.id;
        const author = await Author.findOne({ id });
        return res.json(author);
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}

// PUT
export const updateAuthor = async (req: Request, res: Response) => {
    try {
        // params -> id
        // body -> name, age
        let id = req.params.id;
        await Author.update({ id }, req.body);
        return res.json({
            success: true
        });
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}

// DELETE
export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        // params -> id
        let id = req.params.id;
        await Author.delete({ id });
        return res.json({
            success: true
        });
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}