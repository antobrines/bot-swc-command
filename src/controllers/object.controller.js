const catchAsync = require('../utils/catchAsync');
const objectService = require('../services/object.service');
const httpStatus = require('http-status');
const {
    successF
} = require('../utils/message');

const create = catchAsync(async (req, res, next) => {
    if(Array.isArray(req.body)){
        const object = await objectService.createMany(req.body);
        successF('object', object, httpStatus.OK, res, next);
    } else {
        const object = await objectService.create(req.body);
        successF('object', object, httpStatus.OK, res, next);
    }
});

const findAll = catchAsync(async (req, res, next) => {
    const object = await objectService.findAll();
    successF('object', object, httpStatus.OK, res, next);
});

const findOne = catchAsync(async (req, res, next) => {
    const nb = req.query.nb;
    const object = await objectService.findOne(req.params.id);
    const extractedCrafts = extractObjectsFromList(object);
    const calculatedCostAndRequirements = calculateCostAndRequirements(extractedCrafts);
    const calculateNbTimesAllElement = calculateNbTimesAllElements(calculatedCostAndRequirements, nb);
    successF('object', calculateNbTimesAllElement, httpStatus.OK, res, next);
});

const findAllInOrder = catchAsync(async (req, res, next) => {
    const object = await objectService.findAllInOrder();
    successF('object', object, httpStatus.OK, res, next);
});
    
function extractObjectsFromList(body) {
    const extractedObjects = [];

    function extractRecursively(objectsList, mainObject) {
        for (const craftItem of objectsList) {
            const extractedObject = {
                _id: craftItem.object._id,
                name: craftItem.object.name,
                priceToCraft: craftItem.object.priceToCraft,
                quantity: craftItem.quantity,
                isMain: false,
                isCraftable: craftItem.object.isCraftable,
            };

            if (mainObject) {
                if (!mainObject.listObjects) {
                    mainObject.listObjects = [];
                }
                mainObject.listObjects.push(extractedObject);
            } else {
                extractedObjects.push({
                    _id: body._id,
                    name: body.name,
                    priceToCraft: body.priceToCraft,
                    quantity: body.quantity,
                    isMain: true,
                    listObjects: [extractedObject],
                });
            }

            if (craftItem.object.listObjectsToCraft && craftItem.object.listObjectsToCraft.length > 0) {
                extractRecursively(craftItem.object.listObjectsToCraft[0], extractedObject);
            }
        }
    }

    if (body.listObjectsToCraft && body.listObjectsToCraft.length > 0) {
        extractRecursively(body.listObjectsToCraft[0]);
    }

    return extractedObjects;
}

function calculateCostAndRequirements(objectsList) {
    const result = {};

    function calculateRecursively(craftItem, multiplier = 1) {
        const currentQuantity = craftItem.quantity ? craftItem.quantity : 1;
        const cost = craftItem.priceToCraft * currentQuantity * multiplier;
        if (!result[craftItem._id]) {
            result[craftItem._id] = {
                _id: craftItem._id,
                name: craftItem.name,
                quantity: 0,
                cost: 0,
                isMain: craftItem.isMain,
                isCraftable: craftItem.isCraftable,
            };
        }
        result[craftItem._id].quantity += craftItem.isMain ? 1 : currentQuantity * multiplier;
        result[craftItem._id].cost += cost;

        if (craftItem.listObjects && craftItem.listObjects.length > 0) {
            for (const subItem of craftItem.listObjects) {
                var newMultiplier = 1;
                if (currentQuantity) {
                    newMultiplier = currentQuantity;
                    if (!isNaN(newMultiplier)) {
                        newMultiplier = currentQuantity * multiplier;
                    }
                }
                calculateRecursively(subItem, newMultiplier);
            }
        }
    }

    for (const craftItem of objectsList) {
        calculateRecursively(craftItem);
    }

    return Object.values(result);
}

function calculateNbTimesAllElements(mainObjects, multiplier = 1) {
    const result = {};
    var totalCost = 0;
    const mainObject = mainObjects.filter(obj => obj.isMain);
    mainObject.forEach(obj => {
        obj.cost = obj.cost / obj.quantity * multiplier;
        obj.quantity = 1 * multiplier;
        if (obj.cost) {
            totalCost += obj.cost;
        }
    });

    result.objectMainToCraft = mainObject;
    result.objectsToCraft = Object.values(mainObjects).filter(obj => !obj.isMain && obj.isCraftable);
    result.objectsToCraft.forEach(obj => {
        obj.quantity = obj.quantity * multiplier;
        obj.cost = obj.cost * multiplier;
        if (obj.cost) {
            totalCost += obj.cost;
        }
    });
    result.objectsToFarm = Object.values(mainObjects).filter(obj => !obj.isMain && !obj.isCraftable);
    result.objectsToFarm.forEach(obj => {
        obj.quantity = obj.quantity * multiplier;
        obj.cost = obj.cost * multiplier;
        if (obj.cost) {
            totalCost += obj.cost;
        }
    });
    result.totalCost = totalCost;
    return result;
}



module.exports = {
    create,
    findAll,
    findOne,
    findAllInOrder
};