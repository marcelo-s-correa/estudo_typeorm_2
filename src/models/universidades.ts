import { Entity, Column } from 'typeorm';
import Instituicoes from './instituicoes';

@Entity('universidades')
export default class Universidades extends Instituicoes {

    @Column()
    graduacoes: string;

    @Column()
    mestres: string;

    @Column()
    doutores: string;

}

