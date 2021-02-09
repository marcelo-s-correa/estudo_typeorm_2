import express from 'express';
import './database/connection';
import {getRepository} from "typeorm";
import Users from './models/users';

const app = express();

app.post('/users', async (request, response) => {
    const {
        nome,
        idade,
        cidade
    } = request.body;

    const usersRepository = getRepository(Users);

    const user = usersRepository.create({
        nome,
        idade,
        cidade
    });

    await usersRepository.save(user);

    return response.json({mensagem:"TA TUDO OK !"});
});

app.get('/users', (request,response) =>{
    console.log(request.query);
    console.log(request.params);

    return response.json({mensagem: "TUDO CERTO !"});
});

app.listen(3333)