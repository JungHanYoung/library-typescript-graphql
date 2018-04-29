// import { Author } from "../entity/Author";
// import { Genre } from "../entity/Genre";
// import * as request from 'request'; 
import { Book } from "../entity/Book";
import axios from 'axios';
import { typeormConn } from "../utils/typeormConn";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

beforeAll(async () => {
    await typeormConn();
});

test('get All books', async () => {
    const books = await axiosInstance({
        url: '/book',
        method: 'get'
    });
    console.log(books);
    // request.get('http://localhost:4000/api/v1/book', (err, {}, body) => {
    //     if(err) {
    //         throw err;
    //     }
    //     const books = JSON.parse(body);
    //     console.log(books);
    // });
});

// test('Register author', async () => {
//     const res = await axiosInstance({
//         url: '/author',
//         method: 'post',
//         data: {
//             name: "John",
//             age: 15
//         }
//     });
//     expect(res).toEqual({ success: true });
// });

// test('Register genre', async () => {
//     const res = await axiosInstance.post('/genre', { name: "Fantasy" });
//     expect(res).toEqual({ success: true });
// });

// test('Register book', async () => {
//     const res = await axiosInstance.post('/book', { name: "The Long", authorId: 1, genreId: 1 });
//     expect(res).toEqual({ success: true });
//     console.log(await Book.find({ relations: ["genres", "author"]}));
//     const books = await Book.find({ where: { name: "The Long" }, relations: ["genres", "author"]});
//     expect(books).toHaveLength(1);
//     const book = books[0];
//     expect(book.name).toEqual("The Long");
//     expect(book.author).toEqual("John");
//     expect(book.genres[0]).toEqual("Fantasy");

// });

// test('Register Book', async () => {
    
//     const author = await Author.create({
//         name: "John",
//         age: 15
//     });
    
//     const genre1 = await Genre.create({
//         name: "Fantasy"
//     });
    
//     const genre2 = await Genre.create({
//         name: "essay"
//     });
    
//     const book = await Book.create({
//         name: "The Long Earth",
//         genres: [genre1, genre2],
//         author
//     });

//     const newBook = await book.save();
//     expect(newBook).toEqual(book);
//     const loadBooks = await Book.find({ where: { id: book.id }, relations: ["genres", "author"]});
//     expect(loadBooks).toHaveLength(1);
//     const loadBook = loadBooks[0];
//     expect(loadBook.name).toEqual(book.name);
//     expect(loadBook.genres).toEqual(book.genres);
//     expect(loadBook.author).toEqual(book.author);

// });