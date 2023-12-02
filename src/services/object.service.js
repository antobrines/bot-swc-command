const {
    Object
} = require('../models');

const create = async (objectBody) => {
    return Object.create(objectBody);
};

const createMany = async (objectBody) => {
    return Object.insertMany(objectBody);
};

const findAll = async () => {
    const object =await Object.find({});
    return object;
};

const findOne = async (id) => {
    return Object.findById(id).populate({
        path: 'listObjectsToCraft.object',
        model: 'Object',
        populate: {
            path: 'listObjectsToCraft.object',
            model: 'Object',
            populate: {
                path: 'listObjectsToCraft.object',
                model: 'Object',
                populate: {
                    path: 'listObjectsToCraft.object',
                    model: 'Object',             
                }       
            }     
        }
    }).exec();
};

const findAllInOrder = async () => {
    return Object.find({ isCraftable: true })
        .sort({ name: 1 })
        .select({ name: 1, _id: 1 })
        .exec();
};

module.exports = {
    create,
    createMany,
    findAll,
    findOne,
    findAllInOrder
};