import { Entity, Column } from 'typeorm';
import Instituicoes from './instituicoes';

@Entity('colegios')
export default class Colegios extends Instituicoes {

    @Column()
    cursos: string;

    @Column()
    graduados: string;

}

