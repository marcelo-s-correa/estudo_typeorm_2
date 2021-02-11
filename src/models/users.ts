import {Entity , Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    cidade: string;
}
