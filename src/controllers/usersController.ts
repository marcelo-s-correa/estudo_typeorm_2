import {Request, Response} from 'express';
import {getRepository} from "typeorm";
import Users from '../models/users';

export default {
    async index(request:Request, response:Response){
        const usersRepository = getRepository(Users);

        const users = await usersRepository.find();

        return response.json(users);
    },
    
    async create(request: Request, response: Response){
        const {
            nome,
            idade,
            cidade,
        } = request.body;
    
        const usersRepository = getRepository(Users);
    
        const user = usersRepository.create({
            nome,
            idade,
            cidade,
        });
    
        await usersRepository.save(user);
    
        return response.json(user);
    }
};
