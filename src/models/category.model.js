const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
    name: {
        type: types.String,
        required: true,
        unique: true
    },  
}, { versionKey: false });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;