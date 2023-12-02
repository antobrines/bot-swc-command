const {
    Category
} = require('../models');

const create = async (categoryBody) => {
    return Category.create(categoryBody);
};

const createMany = async (categoryBody) => {
    return Category.insertMany(categoryBody);
};

const findAll = async () => {
    return Category.find({});
};

const findOne = async (id) => {
    return Category.findById(id);
};

module.exports = {
    create,
    createMany,
    findAll,
    findOne
};