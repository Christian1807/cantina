const express = require('express');
const routes = express.Router();
const crypto = require('crypto');

const connection = require('./database/connection');

routes.post('/usuario/', async (request, response) => {
    const {nome, email, telefone} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');


    await connection('usuario').insert(
        {
            id,
            nome,
            email,
            telefone
        }
    )

    return response.json({id});
});

routes.get('/usuario/', async (request, response) => {

    const usuarios = await connection('usuario').select('*');

    return response.json(usuarios);
});


routes.delete('/usuario/:id', async (request, response) => {
    const {id} = request.params;

    await connection('usuario').where('id', id).delete();

    return response.status(204).send();
});


routes.post('/cliente/', async (request, response) => {
    const {nome, cpf, email, telefone} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');


    await connection('cliente').insert(
        {
            id,
            nome,
            cpf,
            email,
            telefone
        }
    )

    return response.json({id});
});

routes.get('/cliente/', async (request, response) => {

    const cliente = await connection('cliente').select('*');

    return response.json(cliente);
});


routes.post('/fornecedor/', async (request, response) => {
    const {nome, cpf, email, telefone} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');


    await connection('fornecedor').insert(
        {
            id,
            nome,
            cpf,
            email,
            telefone
        }
    )

    return response.json({id});
});

routes.get('/fornecedor/', async (request, response) => {

    const fornecedor = await connection('fornecedor').select('*');

    return response.json(fornecedor);
});


routes.post('/produto/', async (request, response) => {
    const {nome, codigo_barra, valor, unidade} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');


    await connection('produto').insert(
        {
            id,
            nome,
            codigo_barra,
            valor,
            unidade
        }
    )

    return response.json({id});
});

routes.get('/produto/', async (request, response) => {

    const produto = await connection('produto').select('*');

    return response.json(produto);
});

module.exports = routes;