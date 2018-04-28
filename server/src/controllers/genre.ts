import { Request, Response } from "express";
import { Genre } from "../entity/Genre";

// GET
export const getAllGenres = async ({}, res: Response) => {
    try{
        const genres = await Genre.find({});
        return res.json(genres);
    } catch(error) {
        console.log('Something broken..', error.message);
        return res.status(500).json({
            error: error,
            code: 5
        });
    }
}

// POST
export const addGenre = async (req: Request, res: Response) => {
    try {
        // body -> name
        const newGenre = await Genre.create(req.body);
        await newGenre.save();
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