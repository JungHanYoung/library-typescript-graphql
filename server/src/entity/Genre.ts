import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable} from "typeorm";
import { Book } from "./Book";

@Entity()
export class Genre extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Book, book => book.genres)
    @JoinTable()
    books: Book[];

}
