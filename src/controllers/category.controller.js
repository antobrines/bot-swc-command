const catchAsync = require('../utils/catchAsync');
const categoryService = require('../services/category.service');
const httpStatus = require('http-status');

const {
    successF
} = require('../utils/message');


const getAll = catchAsync(async (req, res, next) => {
    const categories = await categoryService.findAll();
    console.log(req.lang);
    successF('categories', categories, httpStatus.OK, res, next);
});

const getOne = catchAsync(async (req, res, next) => {
    const category = await categoryService.findOne(req.params.id);
    successF('category', category, httpStatus.OK, res, next);
});

const create = catchAsync(async (req, res, next) => {
    if (Array.isArray(req.body)) {
        const categories = await categoryService.createMany(req.body);
        successF('categories', categories, httpStatus.OK, res, next);
    } else {
        const category = await categoryService.create(req.body);
        successF('category', category, httpStatus.OK, res, next);
    
    }
});

module.exports = {
    getAll,
    getOne,
    create
};