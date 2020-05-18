'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product.find(
        {
            active: true
        }, 'title price description');
    return res;
}

exports.getById = async (id) => {
    const res = await Product.findById(id);
    return res;
}

exports.getByTitle = async (title) => {
    const res = await Product.findOne(
        {
            active: true,
            title: title
        }, 'title price description');
    return res;
}

exports.getByTags = async (tag) => {
    const res = await Product.find(
        {
            active: true,
            tags: tag
        }, 'title price description tags');

    return res;
}


exports.create = async (data) => {
    let product = new Product(data);
    await product.save()
}

exports.update = async (id, data) => {
    const res = await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price
            }
        });
    return res;
}

exports.delete = async (id) => {
    await Product.findByIdAndRemove(id);
}

