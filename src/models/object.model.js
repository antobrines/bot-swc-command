const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const objectSchema = mongoose.Schema(
    {
        name: {
            type: types.String,
            required: true,
            unique: true,
        },
        categories: [{
            type: types.ObjectId,
            ref: 'Category',
            required: true,
        }],
        isCraftable: {
            type: types.Boolean,
            required: true,
        },
        isFarmable: {
            type: types.Boolean,
            required: true,
        },
        priceToCraft: {
            type: types.Number,
            required: false,
        },
        rarity: {
            type: types.String,
            required: true,
            enum: ['N', 'M', 'R', 'H', 'L']
        },
        listObjectsToCraft: [
            [
                {
                    object: {
                        type: types.ObjectId,
                        ref: 'Object',
                        required: false,
                    },
                    quantity: {
                        type: types.Number,
                        required: false,
                        default: 1,
                    },
                },
            ],
        ],
    },
    { 
        versionKey: false,
        strictPopulate: false,
    }
);

const Object = mongoose.model('Object', objectSchema);
module.exports = Object;
