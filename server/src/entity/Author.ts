import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn} from "typeorm";
import { Book } from "./Book";

@Entity()
export class Author extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @OneToMany(() => Book, book => book.author)
    @JoinColumn()
    books: Book[];

}
