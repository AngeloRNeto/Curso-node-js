'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: [true, 'O Nome é obrigatório.'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Customer', schema);