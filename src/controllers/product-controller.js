'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const productRepository = require('../repositories/product-repository');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async (req, res, next) => {

    try {
        const data = await productRepository.get();
        res.status(200).send(data);

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

    //Sem async 
    // productRepository.get()
    //     .then(data => {
    //         res.status(201).send(data);
    //     })
    //     .catch(e => {
    //         res.status(400).send(e);
    //     });;
};

exports.getById = async (req, res, next) => {
    try {
        const data = await productRepository.getById(req.body.id);
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.getByTitle = async (req, res, next) => {
    try {

        const data = await productRepository.getByTitle(req.params.title);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }



};

exports.getByTags = async (req, res, next) => {
    try {
        const data = await productRepository.getByTags(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

};


exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter mais que 3 caracteres');

    //Se dados inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await productRepository
            .create(req.body)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }
    catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.put = async (req, res, next) => {
    try {
        await productRepository.update(req.params.id, req.bodyz);

        res.status(201).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.delete = async(req, res, next) => {
   try{
        await productRepository.delete(req.body.id);
        res.status(201).send({
            message: 'Produto excluido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
      
};