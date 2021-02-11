import { Column, PrimaryGeneratedColumn } from 'typeorm';

export default abstract class Instituicoes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({name: 'createAt'})
    createdAt: Date;

    @Column({name: 'updatedAt'})
    updateAt: Date;

}

