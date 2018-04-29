import { Author } from "../entity/Author";
import { Genre } from "../entity/Genre";
import { Book } from "../entity/Book";
import { createConnection } from "typeorm";



test('Register Book', async () => {
    await createConnection();
    const author = await Author.create({
        name: "John",
        age: 15
    });
    
    const genre1 = await Genre.create({
        name: "Fantasy"
    });
    
    const genre2 = await Genre.create({
        name: "essay"
    });
    
    const book = await Book.create({
        name: "The Long Earth",
        genres: [genre1, genre2],
        author
    });

    const newBook = await book.save();
    expect(newBook).toEqual(book);
    const loadBooks = await Book.find({ where: { id: book.id }, relations: ["genres", "author"]});
    expect(loadBooks).toHaveLength(1);
    const loadBook = loadBooks[0];
    expect(loadBook.name).toEqual(book.name);
    expect(loadBook.genres).toEqual(book.genres);
    expect(loadBook.author).toEqual(book.author);

    
})