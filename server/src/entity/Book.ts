import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, JoinColumn} from "typeorm";
import { Genre } from "./Genre";
import { Author } from "./Author";

@Entity()
export class Book extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Genre, genre => genre.books)
    genres: Genre[];

    @ManyToOne(() => Author, author => author.books)
    @JoinColumn()
    author: Author;

}
